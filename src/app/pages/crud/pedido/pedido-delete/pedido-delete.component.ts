import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidoService } from 'src/app/shared/services/pedido.service';

@Component({
  selector: 'app-pedido-delete',
  templateUrl: './pedido-delete.component.html',
  styleUrls: ['./pedido-delete.component.scss'],
})
export class PedidoDeleteComponent implements OnInit {
  pedidoId: string;

  pedidoForm: UntypedFormGroup;

  get pedidoFormControl() {
    return this.pedidoForm.controls;
  }

  constructor(
    private pedidoService: PedidoService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: UntypedFormBuilder
  ) {
    this.pedidoForm = fb.group({
      nome: ['', Validators.required],
      preco: ['', Validators.required],
      quantidade: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.pedidoId = this.route.snapshot.paramMap.get('id');
    this.pedidoService.getPedido(this.pedidoId).subscribe((pedido) => {
      this.pedidoForm.controls['nome'].setValue(pedido.pedido_observacao);
      this.pedidoForm.controls['preco'].setValue(pedido.pedido_total);
      this.pedidoForm.controls['quantidade'].setValue(
        pedido.pedido_fornecedor_id
      );
    });
  }

  deletePedido(): void {
    this.pedidoService
      .deleteExistingPedido(this.pedidoId)
      .subscribe((pedido) => {
        this.pedidoService.showMessage(
          'Pedido excluído com sucesso!',
          'backsnack'
        );
        this.router.navigate(['/crud', 'pedido']);
      });
  }

  cancel(): void {
    this.router.navigate(['/crud', 'pedido']);
  }
}
