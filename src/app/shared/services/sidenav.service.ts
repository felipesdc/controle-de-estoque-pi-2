import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  private sidenav?: MatSidenav;

  public setSidenav(sidenav: MatSidenav): void {
    this.sidenav = sidenav;
  }

  public toggle(): void {
    this.sidenav?.toggle();
  }

  public open(): void {
    this.sidenav?.open();
  }

  public close(): void {
    this.sidenav?.close();
  }
}
