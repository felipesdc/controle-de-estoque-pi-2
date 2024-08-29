import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { IProduto } from 'src/app/shared/models/iproduct.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
})
export class ProductCreateComponent implements OnInit {
  productForm: UntypedFormGroup;

  constructor(
    private productService: ProductService,
    private router: Router,
    private fb: UntypedFormBuilder
  ) {
    this.productForm = fb.group({
      nome: ['', Validators.required],
      preco: ['', Validators.required],
    });
  }

  get product(): IProduto {
    const product = this.productForm.value;
    return product;
  }

  get productFormControl() {
    return this.productForm.controls;
  }

  ngOnInit(): void {}

  createProduct(): void {
    this.productService.createProduct(this.product).subscribe(() => {
      this.productService.showMessage(
        'Produto criado com sucesso!',
        'backsnack'
      );
      this.router.navigate(['/crud']);
      console.log(this.product);
    });
  }

  cancel(): void {
    this.router.navigate(['/crud']);
  }
}
