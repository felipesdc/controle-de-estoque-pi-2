import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidoService } from 'src/app/shared/services/pedido.service';

@Component({
  selector: 'app-pedido-update',
  templateUrl: './pedido-update.component.html',
  styleUrls: ['./pedido-update.component.scss'],
})
export class PedidoUpdateComponent implements OnInit {
  pedido_id: string;

  pedidoForm: UntypedFormGroup;

  get pedidoFormControl() {
    return this.pedidoForm.controls;
  }

  constructor(
    private pedidoService: PedidoService,
    private fb: UntypedFormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.pedidoForm = fb.group({
      nome: ['', Validators.required],
      preco: ['', Validators.required],
      quantidade: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.pedido_id = this.route.snapshot.paramMap.get('pedido_id');
    this.pedidoService.getPedido(this.pedido_id).subscribe((pedido) => {
      console.log(pedido);
      this.pedidoForm.controls['nome'].setValue(pedido.pedido_observacao);
      this.pedidoForm.controls['preco'].setValue(pedido.pedido_total);
      this.pedidoForm.controls['quantidade'].setValue(
        pedido.pedido_fornecedor_id
      );
    });
  }

  updatePedido(): void {
    this.pedidoService
      .updateExistingPedido(this.pedidoForm.value, this.pedido_id)
      .subscribe((pedido) => {
        this.pedidoService.showMessage(
          'Pedido atualizado com sucesso!',
          'backsnack'
        );
        this.router.navigate(['/crud']);
      });
  }

  cancel(): void {
    this.router.navigate(['/crud']);
  }
}
