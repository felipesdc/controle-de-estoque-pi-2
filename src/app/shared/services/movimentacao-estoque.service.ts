import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { MovimentacaoEstoque } from '../models/movimentacao-estoque.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovimentacaoEstoqueService {
  constructor(private snack: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, css: string): void {
    this.snack.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: [css],
    });
  }

  getMovimentacoesEstoque(): Observable<MovimentacaoEstoque[]> {
    return this.http.get<MovimentacaoEstoque[]>(
      `${environment.apiurl}/movimentacao-estoque`
    );
  }

  getMovimentacaoEstoque(
    movimento_id: number
  ): Observable<MovimentacaoEstoque> {
    return this.http.get<MovimentacaoEstoque>(
      `${environment.apiurl}/movimentacao-estoque/${movimento_id}`
    );
  }

  createNewMovimentacaoEstoque(
    movimentacaoEstoque: MovimentacaoEstoque
  ): Observable<MovimentacaoEstoque> {
    return this.http.post<MovimentacaoEstoque>(
      `${environment.apiurl}/movimentacao-estoque`,
      movimentacaoEstoque
    );
  }

  updateExistingMovimentacaoEstoque(
    movimentacaoEstoque: MovimentacaoEstoque,
    movimento_id: number
  ): Observable<MovimentacaoEstoque> {
    return this.http.put<MovimentacaoEstoque>(
      `${environment.apiurl}/movimentacao-estoque/${movimento_id}`,
      movimentacaoEstoque
    );
  }

  deleteExistingMovimentacaoEstoque(movimento_id: number): Observable<void> {
    return this.http.delete<void>(
      `${environment.apiurl}/movimentacao-estoque/${movimento_id}`
    );
  }
}
