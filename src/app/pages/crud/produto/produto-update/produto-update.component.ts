import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from 'src/app/shared/services/produto.service';

@Component({
  selector: 'app-produto-update',
  templateUrl: './produto-update.component.html',
  styleUrls: ['./produto-update.component.scss'],
})
export class ProdutoUpdateComponent implements OnInit {
  produto_id: string;

  produtoForm: UntypedFormGroup;

  get produtoFormControl() {
    return this.produtoForm.controls;
  }

  constructor(
    private produtoService: ProdutoService,
    private fb: UntypedFormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.produtoForm = fb.group({
      produto_id: ['', Validators.required],
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

  ngOnInit(): void {
    this.produto_id = this.route.snapshot.paramMap.get('produto_id');
    this.produtoForm.controls['produto_id'].setValue(this.produto_id);
    this.produtoService.getProduto(this.produto_id).subscribe((produto) => {
      this.produtoForm.controls['produto_descricao'].setValue(
        produto.produto_descricao
      );
      this.produtoForm.controls['produto_fornecedor_id'].setValue(
        produto.produto_descricao
      );
      this.produtoForm.controls['produto_fornecedor'].setValue(
        produto.produto_fornecedor
      );
      this.produtoForm.controls['produto_preco_id'].setValue(
        produto.produto_preco_id
      );
      this.produtoForm.controls['produto_preco'].setValue(
        produto.produto_preco
      );
      this.produtoForm.controls['produto_unidade_id'].setValue(
        produto.produto_unidade_id
      );
      this.produtoForm.controls['produto_unidade'].setValue(
        produto.produto_unidade
      );
      this.produtoForm.controls['produto_categoria_id'].setValue(
        produto.produto_categoria_id
      );
      this.produtoForm.controls['produto_categoria'].setValue(
        produto.produto_categoria
      );
      this.produtoForm.controls['produto_quantidade_estoque'].setValue(
        produto.produto_quantidade_estoque
      );
      this.produtoForm.controls['produto_data_validade'].setValue(
        produto.produto_data_validade
      );
      this.produtoForm.controls['produto_codigo_barras'].setValue(
        produto.produto_codigo_barras
      );
      this.produtoForm.controls['produto_estado'].setValue(
        produto.produto_estado
      );
    });
  }

  updateProduto(): void {
    this.produtoService
      .updateExistingProduto(this.produtoForm.value, this.produto_id)
      .subscribe((produto) => {
        this.produtoService.showMessage(
          'Produto atualizado com sucesso!',
          'backsnack'
        );
        this.router.navigate(['/crud', 'produto']);
      });
  }

  cancel(): void {
    this.router.navigate(['/crud', 'produto']);
  }
}
