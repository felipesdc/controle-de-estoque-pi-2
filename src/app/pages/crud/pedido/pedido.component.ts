import { Component, OnInit } from '@angular/core';
import { EstadoPedido } from 'src/app/shared/models/estado-pedido.model';
import { Fornecedor } from 'src/app/shared/models/fornecedor.model';
import { Pedido } from 'src/app/shared/models/pedido.model';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { EstadoPedidoService } from 'src/app/shared/services/estado-pedido.service';
import { FornecedorService } from 'src/app/shared/services/fornecedor.service';
import { PedidoService } from 'src/app/shared/services/pedido.service';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-crud-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss'],
})
export class PedidoComponent implements OnInit {
  pedidos!: Pedido[];

  fornecedores!: Fornecedor[];
  usuarios!: Usuario[];
  estadosPedido!: EstadoPedido[];

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

  constructor(
    private pedidoService: PedidoService,
    private fornecedorService: FornecedorService,
    private usuarioService: UsuarioService,
    private estadoPedidoService: EstadoPedidoService
  ) {}

  ngOnInit(): void {
    this.fornecedorService.getFornecedores().subscribe({
      next: (fornecedores) => (this.fornecedores = fornecedores),
      complete: () => {
        this.estadoPedidoService.getEstadosPedido().subscribe({
          next: (estadosPedido) => (this.estadosPedido = estadosPedido),
          complete: () => {
            this.usuarioService.getUsuarios().subscribe({
              next: (usuarios) => (this.usuarios = usuarios),
              complete: () => {
                this.carregaPedidos();
              },
            });
          },
        });
      },
    });
  }

  carregaPedidos(): void {
    this.pedidoService.getPedidos().subscribe((pedidos) => {
      this.pedidos = pedidos.map((pedido) => {
        let pedido_fornecedor = this.fornecedores.find(
          (fornecedor) =>
            fornecedor.fornecedor_id === pedido.pedido_fornecedor_id
        ).fornecedor_nome;
        let pedido_usuario = this.usuarios.find(
          (usuario) => usuario.usuario_id === pedido.pedido_usuario_id
        ).usuario_nome;
        let pedido_estado = this.estadosPedido.find(
          (estadoPedido) =>
            estadoPedido.estado_pedido_id === pedido.pedido_estado_id
        ).estado_pedido_descricao;
        return { ...pedido, pedido_fornecedor, pedido_usuario, pedido_estado };
      });
    });
  }
}
