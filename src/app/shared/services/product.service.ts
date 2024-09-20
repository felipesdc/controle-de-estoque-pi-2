import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { IProduto } from '../models/iproduct.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private snack: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, css: string): void {
    this.snack.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: [css],
    });
  }

  createProduct(product: IProduto): Observable<IProduto> {
    return this.http.post<IProduto>(`${environment.apiurl}/produtos`, product);
  }

  readProduct(): Observable<IProduto[]> {
    return this.http.get<IProduto[]>(`${environment.apiurl}/produtos`);
  }

  readById(id: string): Observable<IProduto> {
    return this.http.get<IProduto>(`${environment.apiurl}/produtos/${id}`);
  }

  update(product: IProduto, id: string): Observable<IProduto> {
    return this.http.put<IProduto>(
      `${environment.apiurl}/produtos/${id}`,
      product
    );
  }

  delete(id: string): Observable<IProduto> {
    return this.http.delete<IProduto>(`${environment.apiurl}/produtos/${id}`);
  }
}
