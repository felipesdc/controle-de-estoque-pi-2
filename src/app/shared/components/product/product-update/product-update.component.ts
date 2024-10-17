import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss'],
})
export class ProductUpdateComponent implements OnInit {
  productId: string;

  productForm: UntypedFormGroup;

  get productFormControl() {
    return this.productForm.controls;
  }

  constructor(
    private productService: ProductService,
    private fb: UntypedFormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.productForm = fb.group({
      nome: ['', Validators.required],
      preco: ['', Validators.required],
      quantidade: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.productService.readById(this.productId).subscribe((product) => {
      console.log(product);
      this.productForm.controls['nome'].setValue(product.produto_descricao);
      this.productForm.controls['preco'].setValue(product.produto_preco_id);
      this.productForm.controls['quantidade'].setValue(product.produto_quantidade_estoque);
    });
  }

  updateProduct(): void {
    this.productService
      .update(this.productForm.value, this.productId)
      .subscribe((product) => {
        this.productService.showMessage(
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
