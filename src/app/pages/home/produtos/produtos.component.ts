import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { ProdutosCreateDialogComponent } from './produtos-create-dialog/produtos-create-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss'],
})
export class ProdutosComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'descricao',
    'categoria',
    'quantidade',
    'acoes',
  ];

  produtos = [
    {
      produto_id: 1,
      produto_descricao: 'Hamburguer',
      categoria_nome: 'Lanches',
      produto_quantidade: 50,
    },
    {
      produto_id: 2,
      produto_descricao: 'Batata Frita',
      categoria_nome: 'Acompanhamentos',
      produto_quantidade: 3,
    },
    {
      produto_id: 3,
      produto_descricao: 'Refrigerante',
      categoria_nome: 'Bebidas',
      produto_quantidade: 20,
    },
  ];

  dataSource = new MatTableDataSource(this.produtos);

  // Aqui ligamos o paginator e o sort
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onAddProduto() {
    const dialogRef = this.dialog.open(ProdutosCreateDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const newProduto = {
          produto_id: this.produtos.length + 1, // ID fictício
          ...result,
        };
        this.produtos.push(newProduto);
      }
    });
  }

  onEditProduto(id: number) {
    console.log('Editar produto', id);
  }

  onDeleteProduto(id: number) {
    console.log('Excluir produto', id);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
