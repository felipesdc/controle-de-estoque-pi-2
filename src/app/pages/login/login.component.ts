import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  usuario_login: string = '';
  usuario_password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService
      .login(this.usuario_login, this.usuario_password)
      .subscribe((success) => {
        if (success) {
          this.authService.showMessage('Autenticado com sucesso!', 'backsnack');
          this.router.navigate(['/home']);
        } else {
          this.errorMessage = 'Usuário ou senha inválidos!';
          this.authService.showMessage(this.errorMessage, 'backsnack');
        }
      });
  }
}
