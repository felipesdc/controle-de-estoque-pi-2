import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'src/app/shared/services/categoria.service';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.scss'],
})
export class CategoriaDeleteComponent implements OnInit {
  categoriaId: string;

  categoriaForm: UntypedFormGroup;

  get categoriaFormControl() {
    return this.categoriaForm.controls;
  }

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: UntypedFormBuilder
  ) {
    this.categoriaForm = fb.group({
      categoria_descricao: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.categoriaId = this.route.snapshot.paramMap.get('categoria_id');
    this.categoriaService
      .getCategoria(this.categoriaId)
      .subscribe((categoria) => {
        this.categoriaForm.controls['categoria_descricao'].setValue(
          categoria.categoria_descricao
        );
      });
  }

  deleteCategoria(): void {
    this.categoriaService
      .deleteExistingCategoria(this.categoriaId)
      .subscribe((categoria) => {
        this.categoriaService.showMessage(
          'Categoria excluída com sucesso!',
          'backsnack'
        );
        this.router.navigate(['/crud', 'categoria']);
      });
  }

  cancel(): void {
    this.router.navigate(['/crud', 'categoria']);
  }
}
