import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.scss'],
})
export class UsuarioCreateComponent implements OnInit {
  usuarioForm: UntypedFormGroup;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private fb: UntypedFormBuilder
  ) {
    this.usuarioForm = fb.group({
      usuario_nome: ['', Validators.required],
      usuario_email: ['', Validators.required],
      usuario_password: ['', Validators.required],
      usuario_nome_completo: ['', Validators.required],
      usuario_inscricao: ['', Validators.required],
      usuario_perfil_id: ['', Validators.required],
      usuario_perfil: ['', Validators.required],
      usuario_status: ['', Validators.required],
    });
  }

  get usuario(): Usuario {
    const usuario = this.usuarioForm.value;
    return usuario;
  }

  get usuarioFormControl() {
    return this.usuarioForm.controls;
  }

  ngOnInit(): void {}

  createUsuario(): void {
    this.usuarioService.createNewUsuario(this.usuario).subscribe(() => {
      this.usuarioService.showMessage(
        'Usuário criado com sucesso!',
        'backsnack'
      );
      this.router.navigate(['/crud', 'usuario']);
    });
  }

  cancel(): void {
    this.router.navigate(['/crud', 'usuario']);
  }
}
