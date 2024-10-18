import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Produto } from 'src/app/shared/models/produto.model';
import { ProdutoService } from 'src/app/shared/services/produto.service';

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.scss'],
})
export class ProdutoCreateComponent implements OnInit {
  produtoForm: UntypedFormGroup;

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private fb: UntypedFormBuilder
  ) {
    this.produtoForm = fb.group({
      nome: ['', Validators.required],
      preco: ['', Validators.required],
      quantidade: ['', Validators.required],
    });
  }

  get produto(): Produto {
    const produto = this.produtoForm.value;
    return produto;
  }

  get produtoFormControl() {
    return this.produtoForm.controls;
  }

  ngOnInit(): void {}

  createProduto(): void {
    this.produtoService.createNewProduto(this.produto).subscribe(() => {
      this.produtoService.showMessage(
        'Produto criado com sucesso!',
        'backsnack'
      );
      this.router.navigate(['/crud']);
      console.log(this.produto);
    });
  }

  cancel(): void {
    this.router.navigate(['/crud']);
  }
}
