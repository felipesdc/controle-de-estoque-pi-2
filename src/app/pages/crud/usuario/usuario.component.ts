import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-crud-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent implements OnInit {
  usuarios!: Usuario[];

  displayedColumns = [
    'usuario_id',
    'usuario_nome',
    'usuario_email',
    'usuario_password',
    'usuario_nome_completo',
    'usuario_inscricao',
    'usuario_perfil',
    'usuario_status',
    'usuario_action',
  ];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe((usuarios) => {
      this.usuarios = usuarios;
    });
  }
}
