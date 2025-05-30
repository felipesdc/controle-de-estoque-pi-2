import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private sidenavService: SidenavService,
    public authService: AuthService
  ) {}

  toggleSidenav(): void {
    this.sidenavService.toggle();
  }

  get isAdmin(): boolean {
    return this.authService.isAdmin();
  }

  ngOnInit(): void {}
}
