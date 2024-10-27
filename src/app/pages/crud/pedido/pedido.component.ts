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

  displayedColumns = [
    'pedido_id',
    'pedido_fornecedor',
    'pedido_data',
    'pedido_usuario',
    'pedido_estado',
    'pedido_observacao',
    'pedido_total',
    'pedido_action',
  ];

  constructor(private pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.pedidoService.getPedidos().subscribe((pedidos) => {
      this.pedidos = pedidos;
    });
  }
}
