import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/shared/models/pedido.model';
import { PedidoService } from 'src/app/shared/services/pedido.service';

@Component({
  selector: 'app-crud-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss'],
})
export class PedidoComponent implements OnInit {
  pedidos!: Pedido[];

  displayedColumns = ['id', 'nome', 'preco', 'quantidade', 'action'];

  constructor(private pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.pedidoService.getPedidos().subscribe((pedidos) => {
      this.pedidos = pedidos;
    });
  }
}
