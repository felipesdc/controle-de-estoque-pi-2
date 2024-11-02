import { Component, OnInit } from '@angular/core';
import { MovimentacaoEstoque } from 'src/app/shared/models/movimentacao-estoque.model';
import { MovimentacaoEstoqueService } from 'src/app/shared/services/movimentacao-estoque.service';

@Component({
  selector: 'app-crud-movimentacao-estoque',
  templateUrl: './movimentacao-estoque.component.html',
  styleUrls: ['./movimentacao-estoque.component.scss'],
})
export class MovimentacaoEstoqueComponent implements OnInit {
  movimentacoesEstoque!: MovimentacaoEstoque[];

  displayedColumns = [
    'movimento_id',
    'movimento_produto',
    'movimento_quantidade',
    'movimento_tipo',
    'movimento_data',
    'movimento_observacao',
    'movimento_action',
  ];

  constructor(private movimentacaoEstoqueService: MovimentacaoEstoqueService) {}

  ngOnInit(): void {
    this.movimentacaoEstoqueService
      .getMovimentacoesEstoque()
      .subscribe((movimentacoesEstoque) => {
        this.movimentacoesEstoque = movimentacoesEstoque;
      });
  }
}
