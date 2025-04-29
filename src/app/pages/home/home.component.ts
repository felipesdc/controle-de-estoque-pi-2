import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  childRouteActive = false;
  homeRouteActive = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.homeRouteActive = this.router.url === '/home';
    });
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.childRouteActive = this.router.url !== '/home';
      });
  }

  ngOnInit(): void {}
}
