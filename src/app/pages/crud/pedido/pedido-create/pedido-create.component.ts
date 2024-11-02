import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Pedido } from 'src/app/shared/models/pedido.model';
import { PedidoService } from 'src/app/shared/services/pedido.service';

@Component({
  selector: 'app-pedido-create',
  templateUrl: './pedido-create.component.html',
  styleUrls: ['./pedido-create.component.scss'],
})
export class PedidoCreateComponent implements OnInit {
  pedidoForm: UntypedFormGroup;

  constructor(
    private pedidoService: PedidoService,
    private router: Router,
    private fb: UntypedFormBuilder
  ) {
    this.pedidoForm = fb.group({
      pedido_id: ['', Validators.required],
      pedido_fornecedor_id: ['', Validators.required],
      pedido_fornecedor: ['', Validators.required],
      pedido_data: ['', Validators.required],
      pedido_usuario_id: ['', Validators.required],
      pedido_usuario: ['', Validators.required],
      pedido_estado_id: ['', Validators.required],
      pedido_estado: ['', Validators.required],
      pedido_observacao: ['', Validators.required],
      pedido_total: ['', Validators.required],
    });
  }

  get pedido(): Pedido {
    const pedido = this.pedidoForm.value;
    return pedido;
  }

  get pedidoFormControl() {
    return this.pedidoForm.controls;
  }

  ngOnInit(): void {}

  createPedido(): void {
    this.pedidoService.createNewPedido(this.pedido).subscribe(() => {
      this.pedidoService.showMessage('Pedido criado com sucesso!', 'backsnack');
      this.router.navigate(['/crud', 'pedido']);
    });
  }

  cancel(): void {
    this.router.navigate(['/crud', 'pedido']);
  }
}
