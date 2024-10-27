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
      produto_descricao: ['', Validators.required],
      produto_fornecedor_id: ['', Validators.required],
      produto_fornecedor: ['', Validators.required],
      produto_preco_id: ['', Validators.required],
      produto_preco: ['', Validators.required],
      produto_unidade_id: ['', Validators.required],
      produto_unidade: ['', Validators.required],
      produto_categoria_id: ['', Validators.required],
      produto_categoria: ['', Validators.required],
      produto_quantidade_estoque: ['', Validators.required],
      produto_data_validade: ['', Validators.required],
      produto_codigo_barras: ['', Validators.required],
      produto_estado: ['', Validators.required],
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
      this.router.navigate(['/crud', 'produto']);
      console.log(this.produto);
    });
  }

  cancel(): void {
    this.router.navigate(['/crud', 'produto']);
  }
}
