import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Preco } from 'src/app/shared/models/preco.model';
import { PrecoService } from 'src/app/shared/services/preco.service';

@Component({
  selector: 'app-preco-create',
  templateUrl: './preco-create.component.html',
  styleUrls: ['./preco-create.component.scss'],
})
export class PrecoCreateComponent implements OnInit {
  precoForm: UntypedFormGroup;

  constructor(
    private precoService: PrecoService,
    private router: Router,
    private fb: UntypedFormBuilder
  ) {
    this.precoForm = fb.group({
      preco_compra: ['', Validators.required],
      preco_venda: ['', Validators.required],
      preco_data_inicial: ['', Validators.required],
      preco_data_final: ['', Validators.required],
    });
  }

  get preco(): Preco {
    const preco = this.precoForm.value;
    return preco;
  }

  get precoFormControl() {
    return this.precoForm.controls;
  }

  ngOnInit(): void {}

  createPreco(): void {
    this.precoService.createNewPreco(this.preco).subscribe(() => {
      this.precoService.showMessage('Preço criado com sucesso!', 'backsnack');
      this.router.navigate(['/crud', 'preco']);
    });
  }

  cancel(): void {
    this.router.navigate(['/crud', 'preco']);
  }
}
