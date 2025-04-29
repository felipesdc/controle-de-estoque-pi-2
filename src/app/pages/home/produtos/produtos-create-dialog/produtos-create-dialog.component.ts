import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-produtos-create-dialog',
  templateUrl: './produtos-create-dialog.component.html',
  styleUrls: ['./produtos-create-dialog.component.scss'],
})
export class ProdutosCreateDialogComponent {
  produtoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ProdutosCreateDialogComponent>
  ) {
    this.produtoForm = this.fb.group({
      produto_nome: ['', Validators.required],
      produto_quantidade: [0, [Validators.required, Validators.min(0)]],
    });
  }

  onSave() {
    if (this.produtoForm.valid) {
      this.dialogRef.close(this.produtoForm.value);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
