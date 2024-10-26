import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/shared/models/categoria.model';
import { CategoriaService } from 'src/app/shared/services/categoria.service';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.scss'],
})
export class CategoriaCreateComponent implements OnInit {
  categoriaForm: UntypedFormGroup;

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private fb: UntypedFormBuilder
  ) {
    this.categoriaForm = fb.group({
      nome: ['', Validators.required],
      preco: ['', Validators.required],
      quantidade: ['', Validators.required],
    });
  }

  get categoria(): Categoria {
    const categoria = this.categoriaForm.value;
    return categoria;
  }

  get categoriaFormControl() {
    return this.categoriaForm.controls;
  }

  ngOnInit(): void {}

  createCategoria(): void {
    this.categoriaService.createNewCategoria(this.categoria).subscribe(() => {
      this.categoriaService.showMessage(
        'Categoria criado com sucesso!',
        'backsnack'
      );
      this.router.navigate(['/crud', 'categoria']);
      console.log(this.categoria);
    });
  }

  cancel(): void {
    this.router.navigate(['/crud', 'categoria']);
  }
}
