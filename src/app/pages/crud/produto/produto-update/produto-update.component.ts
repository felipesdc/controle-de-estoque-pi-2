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
      nome: ['', Validators.required],
      preco: ['', Validators.required],
      quantidade: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.produto_id = this.route.snapshot.paramMap.get('id');
    this.produtoService.getProduto(this.produto_id).subscribe((produto) => {
      console.log(produto);
      this.produtoForm.controls['nome'].setValue(produto.produto_descricao);
      this.produtoForm.controls['preco'].setValue(produto.produto_preco_id);
      this.produtoForm.controls['quantidade'].setValue(
        produto.produto_quantidade_estoque
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
        this.router.navigate(['/crud']);
      });
  }

  cancel(): void {
    this.router.navigate(['/crud']);
  }
}
