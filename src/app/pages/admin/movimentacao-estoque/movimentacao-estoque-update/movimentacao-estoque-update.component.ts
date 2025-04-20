import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MovimentacaoEstoqueService } from 'src/app/shared/services/movimentacao-estoque.service';

@Component({
  selector: 'app-movimentacao-estoque-update',
  templateUrl: './movimentacao-estoque-update.component.html',
  styleUrls: ['./movimentacao-estoque-update.component.scss'],
})
export class MovimentacaoEstoqueUpdateComponent implements OnInit {
  movimento_id: string;

  movimentacaoEstoqueForm: UntypedFormGroup;

  get movimentacaoEstoqueFormControl() {
    return this.movimentacaoEstoqueForm.controls;
  }

  constructor(
    private movimentacaoEstoqueService: MovimentacaoEstoqueService,
    private fb: UntypedFormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.movimentacaoEstoqueForm = fb.group({
      movimento_id: ['', Validators.required],
      movimento_produto_id: ['', Validators.required],
      movimento_produto: ['', Validators.required],
      movimento_quantidade: ['', Validators.required],
      movimento_tipo: ['', Validators.required],
      movimento_data: ['', Validators.required],
      movimento_observacao: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.movimento_id = this.route.snapshot.paramMap.get('movimento_id');
    this.movimentacaoEstoqueForm.controls['movimento_id'].setValue(
      this.movimento_id
    );
    this.movimentacaoEstoqueService
      .getMovimentacaoEstoque(this.movimento_id)
      .subscribe((movimentacaoEstoque) => {
        this.movimentacaoEstoqueForm.controls['movimento_produto_id'].setValue(
          movimentacaoEstoque.movimento_produto_id
        );
        this.movimentacaoEstoqueForm.controls['movimento_produto'].setValue(
          movimentacaoEstoque.movimento_produto
        );
        this.movimentacaoEstoqueForm.controls['movimento_quantidade'].setValue(
          movimentacaoEstoque.movimento_quantidade
        );
        this.movimentacaoEstoqueForm.controls['movimento_tipo'].setValue(
          movimentacaoEstoque.movimento_tipo
        );
        this.movimentacaoEstoqueForm.controls['movimento_data'].setValue(
          movimentacaoEstoque.movimento_data
        );
        this.movimentacaoEstoqueForm.controls['movimento_observacao'].setValue(
          movimentacaoEstoque.movimento_observacao
        );
      });
  }

  updateMovimentacaoEstoque(): void {
    this.movimentacaoEstoqueService
      .updateExistingMovimentacaoEstoque(
        this.movimentacaoEstoqueForm.value,
        this.movimento_id
      )
      .subscribe((movimentacaoEstoque) => {
        this.movimentacaoEstoqueService.showMessage(
          'Movimentação de Estoque atualizada com sucesso!',
          'backsnack'
        );
        this.router.navigate(['admin', 'movimentacao-estoque']);
      });
  }

  cancel(): void {
    this.router.navigate(['admin', 'movimentacao-estoque']);
  }
}
