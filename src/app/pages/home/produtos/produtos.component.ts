import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { ProdutosCreateDialogComponent } from './produtos-create-dialog/produtos-create-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ProdutoService } from 'src/app/shared/services/produto.service';
import { MovimentacaoEstoqueService } from 'src/app/shared/services/movimentacao-estoque.service';
import { Produto } from 'src/app/shared/models/produto.model';
import { MovimentacaoEstoque } from 'src/app/shared/models/movimentacao-estoque.model';
import { Categoria } from 'src/app/shared/models/categoria.model';
import { CategoriaService } from 'src/app/shared/services/categoria.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss'],
})
export class ProdutosComponent implements AfterViewInit {
  produtos: Produto[];
  categorias: Categoria[];

  dataSource: MatTableDataSource<Produto>;

  displayedColumns: string[] = [
    'id',
    'descricao',
    'categoria',
    'quantidade',
    'acoes',
  ];

  // produtos = [
  //   {
  //     produto_id: 1,
  //     produto_descricao: 'Hamburguer',
  //     categoria_nome: 'Lanches',
  //     produto_quantidade: 50,
  //   },
  //   {
  //     produto_id: 2,
  //     produto_descricao: 'Batata Frita',
  //     categoria_nome: 'Acompanhamentos',
  //     produto_quantidade: 3,
  //   },
  //   {
  //     produto_id: 3,
  //     produto_descricao: 'Refrigerante',
  //     categoria_nome: 'Bebidas',
  //     produto_quantidade: 20,
  //   },
  // ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private dialog: MatDialog,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private movimentacaoEstoqueService: MovimentacaoEstoqueService
  ) {}

  ngOnInit(): void {
    this.loadProdutos();
  }

  loadProdutos(): void {
    forkJoin({
      produtos: this.produtoService.getProdutos(),
      categorias: this.categoriaService.getCategorias(),
    }).subscribe(({ produtos, categorias }) => {
      this.produtos = produtos;
      this.categorias = categorias;

      // Adiciona o nome da categoria a cada produto
      this.produtos.forEach((produto) => {
        const categoria = categorias.find(
          (c) => c.categoria_id === produto.produto_categoria_id
        );
        produto.produto_categoria = categoria
          ? categoria.categoria_descricao
          : 'Sem categoria';
      });

      this.dataSource = new MatTableDataSource(this.produtos);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngAfterViewInit() {}

  onAddProduto() {
    const dialogRef = this.dialog.open(ProdutosCreateDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((novoProduto) => {
      if (novoProduto) {
        this.produtoService
          .createNewProduto(novoProduto)
          .subscribe((produtoCriado) => {
            this.loadProdutos();
            this.registrarMovimentacao(
              produtoCriado.produto_id,
              produtoCriado.produto_descricao,
              produtoCriado.produto_quantidade_estoque,
              'entrada'
            );
          });
      }
    });
  }

  onEditProduto(produtoId: number): void {
    const produto = this.produtos.find((p) => p.produto_id === produtoId);

    if (!produto) return;

    const dialogRef = this.dialog.open(ProdutosCreateDialogComponent, {
      width: '400px',
      data: { ...produto }, // já inclui produto_descricao e categoria_nome
    });

    dialogRef.afterClosed().subscribe((produtoEditado) => {
      if (produtoEditado) {
        this.produtoService
          .updateExistingProduto(produtoEditado, produtoId)
          .subscribe(() => {
            this.loadProdutos();

            const diff =
              produtoEditado.produto_quantidade_estoque -
              produto.produto_quantidade_estoque;
            if (diff !== 0) {
              this.registrarMovimentacao(
                produtoId,
                produtoEditado.produto_descricao,
                Math.abs(diff),
                diff > 0 ? 'entrada' : 'saida'
              );
            }
          });
      }
    });
  }

  onDeleteProduto(produtoId: number): void {
    this.produtoService.getProduto(produtoId).subscribe((produto) => {
      this.produtoService.deleteExistingProduto(produtoId).subscribe(() => {
        this.loadProdutos();
        this.registrarMovimentacao(
          produtoId,
          produto.produto_descricao,
          produto.produto_quantidade_estoque,
          'saida'
        );
      });
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  registrarMovimentacao(
    produtoId: number,
    produtoDescricao: string,
    produtoQuantidadeEstoque: number,
    tipo: 'entrada' | 'saida'
  ): void {
    const movimentacao: MovimentacaoEstoque = {
      movimento_produto_id: produtoId,
      movimento_produto: produtoDescricao,
      movimento_quantidade: produtoQuantidadeEstoque,
      movimento_tipo: tipo,
      movimento_data: new Date(),
      movimento_observacao:
        tipo === 'entrada' ? 'Adição de estoque' : 'Saída de estoque',
    };

    this.movimentacaoEstoqueService
      .createNewMovimentacaoEstoque(movimentacao)
      .subscribe({
        next: () => console.log('Movimentação registrada'),
        error: (err) => console.error('Erro ao registrar movimentação:', err),
      });
  }
}
