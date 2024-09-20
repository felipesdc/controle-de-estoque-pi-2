import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss'],
})
export class ProductDeleteComponent implements OnInit {
  productId: string;

  productForm: UntypedFormGroup;

  get productFormControl() {
    return this.productForm.controls;
  }

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: UntypedFormBuilder
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
      this.productForm.controls['nome'].setValue(product.nome);
      this.productForm.controls['preco'].setValue(product.preco);
      this.productForm.controls['quantidade'].setValue(product.quantidade);
    });
  }

  deleteProduct(): void {
    this.productService.delete(this.productId).subscribe((product) => {
      this.productService.showMessage(
        'Produto excluído com sucesso!',
        'backsnack'
      );
      this.router.navigate(['/crud']);
    });
  }

  cancel(): void {
    this.router.navigate(['/crud']);
  }
}
