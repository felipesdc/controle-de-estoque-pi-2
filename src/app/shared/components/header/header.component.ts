import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  visible: boolean = true;
  @Output() open: EventEmitter<boolean> = new EventEmitter();
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.visible = !this.visible;
    if (this.visible) {
      this.open.emit(true);
    } else {
      this.close.emit(false);
    }
  }
}
