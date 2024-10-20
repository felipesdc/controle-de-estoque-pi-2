import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/shared/models/produto.model';
import { ProdutoService } from 'src/app/shared/services/produto.service';

@Component({
  selector: 'app-crud-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss'],
})
export class ProdutoComponent implements OnInit {
  produtos!: Produto[];

  displayedColumns = ['id', 'nome', 'preco', 'quantidade', 'action'];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.produtoService.getProdutos().subscribe((produtos) => {
      this.produtos = produtos;
    });
  }
}
