import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService
      .login(this.username, this.password)
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
