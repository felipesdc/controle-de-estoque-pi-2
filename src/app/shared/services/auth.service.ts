import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = new BehaviorSubject<boolean>(this.hasToken());

  constructor(
    private snack: MatSnackBar,
    private router: Router,
    private http: HttpClient
  ) {}

  showMessage(msg: string, css: string): void {
    this.snack.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: [css],
    });
  }

  login(username: string, password: string): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.http
        .post<{ token: string }>(`${environment.apiurl}/usuario/login`, {
          usuario_nome: username,
          usuario_password: password,
        })
        .subscribe({
          next: (response) => {
            localStorage.setItem('token', response.token);
            this.isAuthenticated.next(true);
            observer.next(true);
            observer.complete();
          },
          error: (error) => {
            this.showMessage('Usuário ou senha inválidos', 'msg-error');
            this.isAuthenticated.next(false);
            observer.next(false);
            observer.complete();
          },
        });
    });
  }

  logout(): void {
    localStorage.removeItem('token');
    this.isAuthenticated.next(false);
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): Observable<boolean> {
    return this.isAuthenticated.asObservable();
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }
}
