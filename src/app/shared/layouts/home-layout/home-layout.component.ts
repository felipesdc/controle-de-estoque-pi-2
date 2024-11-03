import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss'],
})
export class HomeLayoutComponent implements OnInit {
  public opened = true;
  constructor() {}

  ngOnInit(): void {}

  public onOpen($event: boolean): void {
    this.opened = $event;
  }

  public onClose($event: any): void {
    this.opened = $event;
  }
}
