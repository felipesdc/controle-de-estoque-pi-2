import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/shared/models/categoria.model';
import { Fornecedor } from 'src/app/shared/models/fornecedor.model';
import { Preco } from 'src/app/shared/models/preco.model';
import { Unidade } from 'src/app/shared/models/unidade.model';
import { CategoriaService } from 'src/app/shared/services/categoria.service';
import { FornecedorService } from 'src/app/shared/services/fornecedor.service';
import { PrecoService } from 'src/app/shared/services/preco.service';
import { ProdutoService } from 'src/app/shared/services/produto.service';
import { UnidadeService } from 'src/app/shared/services/unidade.service';

@Component({
  selector: 'app-produto-delete',
  templateUrl: './produto-delete.component.html',
  styleUrls: ['./produto-delete.component.scss'],
})
export class ProdutoDeleteComponent implements OnInit {
  produto_id: string;

  produtoForm: UntypedFormGroup;

  fornecedores!: Fornecedor[];
  precos!: Preco[];
  unidades!: Unidade[];
  categorias!: Categoria[];

  get produtoFormControl() {
    return this.produtoForm.controls;
  }

  constructor(
    private produtoService: ProdutoService,
    private fornecedorService: FornecedorService,
    private precoService: PrecoService,
    private unidadeService: UnidadeService,
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: UntypedFormBuilder
  ) {
    this.produtoForm = fb.group({
      produto_id: ['', Validators.required],
      produto_descricao: ['', Validators.required],
      produto_fornecedor_id: ['', Validators.required],
      produto_fornecedor: ['', Validators.required],
      produto_preco_id: ['', Validators.required],
      produto_preco: ['', Validators.required],
      produto_unidade_id: ['', Validators.required],
      produto_unidade: ['', Validators.required],
      produto_categoria_id: ['', Validators.required],
      produto_categoria: ['', Validators.required],
      produto_quantidade_estoque: ['', Validators.required],
      produto_data_validade: ['', Validators.required],
      produto_codigo_barras: ['', Validators.required],
      produto_estado: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.produto_id = this.route.snapshot.paramMap.get('produto_id');
    this.produtoForm.controls['produto_id'].setValue(this.produto_id);
    this.fornecedorService.getFornecedores().subscribe({
      next: (fornecedores) => (this.fornecedores = fornecedores),
      complete: () => {
        this.precoService.getPrecos().subscribe({
          next: (precos) => (this.precos = precos),
          complete: () => {
            this.unidadeService.getUnidades().subscribe({
              next: (unidades) => (this.unidades = unidades),
              complete: () => {
                this.categoriaService.getCategorias().subscribe({
                  next: (categorias) => (this.categorias = categorias),
                  complete: () => {
                    this.carregaProduto();
                  },
                });
              },
            });
          },
        });
      },
    });
  }

  carregaProduto(): void {
    this.produtoService.getProduto(this.produto_id).subscribe((produto) => {
      this.produtoForm.controls['produto_descricao'].setValue(
        produto.produto_descricao
      );
      this.produtoForm.controls['produto_fornecedor_id'].setValue(
        produto.produto_fornecedor_id
      );
      this.produtoForm.controls['produto_fornecedor'].setValue(
        this.fornecedores.find(
          (fornecedor) =>
            fornecedor.fornecedor_id === produto.produto_fornecedor_id
        ).fornecedor_nome
      );
      this.produtoForm.controls['produto_preco_id'].setValue(
        produto.produto_preco_id
      );
      this.produtoForm.controls['produto_preco'].setValue(
        this.precos.find((preco) => preco.preco_id === produto.produto_preco_id)
          .preco_compra
      );
      this.produtoForm.controls['produto_unidade_id'].setValue(
        produto.produto_unidade_id
      );
      this.produtoForm.controls['produto_unidade'].setValue(
        this.unidades.find(
          (unidade) => unidade.unidade_id === produto.produto_unidade_id
        ).unidade_descricao
      );
      this.produtoForm.controls['produto_categoria_id'].setValue(
        produto.produto_categoria_id
      );
      this.produtoForm.controls['produto_categoria'].setValue(
        this.categorias.find(
          (categorias) =>
            categorias.categoria_id === produto.produto_categoria_id
        ).categoria_descricao
      );
      this.produtoForm.controls['produto_quantidade_estoque'].setValue(
        produto.produto_quantidade_estoque
      );
      this.produtoForm.controls['produto_data_validade'].setValue(
        produto.produto_data_validade
      );
      this.produtoForm.controls['produto_codigo_barras'].setValue(
        produto.produto_codigo_barras
      );
      this.produtoForm.controls['produto_estado'].setValue(
        produto.produto_estado.toString()
      );
    });
  }

  deleteProduto(): void {
    this.produtoService
      .deleteExistingProduto(this.produto_id)
      .subscribe((produto) => {
        this.produtoService.showMessage(
          'Produto excluído com sucesso!',
          'backsnack'
        );
        this.router.navigate(['/crud', 'produto']);
      });
  }

  cancel(): void {
    this.router.navigate(['/crud', 'produto']);
  }
}
