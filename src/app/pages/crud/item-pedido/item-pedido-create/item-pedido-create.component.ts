import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ItemPedido } from 'src/app/shared/models/item-pedido.model';
import { ItemPedidoService } from 'src/app/shared/services/item-pedido.service';

@Component({
  selector: 'app-item-pedido-create',
  templateUrl: './item-pedido-create.component.html',
  styleUrls: ['./item-pedido-create.component.scss'],
})
export class ItemPedidoCreateComponent implements OnInit {
  itemPedidoForm: UntypedFormGroup;

  constructor(
    private itemPedidoService: ItemPedidoService,
    private router: Router,
    private fb: UntypedFormBuilder
  ) {
    this.itemPedidoForm = fb.group({
      item_pedido_pedido_id: ['', Validators.required],
      item_pedido_produto_id: ['', Validators.required],
      item_pedido_unidade_id: ['', Validators.required],
      item_pedido_preco_id: ['', Validators.required],
      item_pedido_quantidade: ['', Validators.required],
      item_pedido_total: ['', Validators.required],
    });
  }

  get itemPedido(): ItemPedido {
    const itemPedido = this.itemPedidoForm.value;
    return itemPedido;
  }

  get itemPedidoFormControl() {
    return this.itemPedidoForm.controls;
  }

  ngOnInit(): void {}

  createItemPedido(): void {
    this.itemPedidoService
      .createNewItemPedido(this.itemPedido)
      .subscribe(() => {
        this.itemPedidoService.showMessage(
          'Item de Pedido criado com sucesso!',
          'backsnack'
        );
        this.router.navigate(['/crud', 'item-pedido']);
      });
  }

  cancel(): void {
    this.router.navigate(['/crud', 'item-pedido']);
  }
}
