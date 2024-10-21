import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from 'src/app/shared/services/produto.service';

@Component({
  selector: 'app-produto-delete',
  templateUrl: './produto-delete.component.html',
  styleUrls: ['./produto-delete.component.scss'],
})
export class ProdutoDeleteComponent implements OnInit {
  produtoId: string;

  produtoForm: UntypedFormGroup;

  get produtoFormControl() {
    return this.produtoForm.controls;
  }

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: UntypedFormBuilder
  ) {
    this.produtoForm = fb.group({
      nome: ['', Validators.required],
      preco: ['', Validators.required],
      quantidade: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.produtoId = this.route.snapshot.paramMap.get('produto_id');
    this.produtoService.getProduto(this.produtoId).subscribe((produto) => {
      this.produtoForm.controls['nome'].setValue(produto.produto_descricao);
      this.produtoForm.controls['preco'].setValue(produto.produto_preco_id);
      this.produtoForm.controls['quantidade'].setValue(
        produto.produto_quantidade_estoque
      );
    });
  }

  deleteProduto(): void {
    this.produtoService
      .deleteExistingProduto(this.produtoId)
      .subscribe((produto) => {
        this.produtoService.showMessage(
          'Produto excluído com sucesso!',
          'backsnack'
        );
        this.router.navigate(['/crud', 'produto']);
      });
  }

  cancel(): void {
    this.router.navigate(['/crud', 'produto']);
  }
}
