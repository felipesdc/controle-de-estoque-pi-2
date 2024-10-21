import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
})
export class CrudComponent implements OnInit {
  public itemSelecionado = 'produto';

  constructor(private router: Router, private route: ActivatedRoute) {
    router.events.subscribe((val) => {
      console.log(val);
    });
  }

  ngOnInit(): void {}

  navigateToProdutoCreate(): void {
    this.router.navigate(['/produto/create']);
  }

  navigateToPedidoCreate(): void {
    this.router.navigate(['/pedido/create']);
  }
}
