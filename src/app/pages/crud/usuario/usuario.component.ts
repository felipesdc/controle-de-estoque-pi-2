import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/shared/models/perfil.model';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { PerfilService } from 'src/app/shared/services/perfil.service';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-crud-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent implements OnInit {
  usuarios!: Usuario[];
  perfis!: Perfil[];

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

  constructor(
    private usuarioService: UsuarioService,
    private perfilService: PerfilService
  ) {}

  ngOnInit(): void {
    this.perfilService.getPerfis().subscribe((perfis) => {
      this.perfis = perfis;
    });
    let listagemUsuarios: Usuario[];
    this.usuarioService.getUsuarios().subscribe((usuarios) => {
      listagemUsuarios = usuarios.map((usuario) => {
        let usuario_perfil = this.perfis.find(
          (perfil) => perfil.perfil_id === usuario.usuario_perfil_id
        ).perfil_nome;
        return { ...usuario, usuario_perfil };
      });
      this.usuarios = listagemUsuarios;
    });
  }
}
