import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
})
export class CrudComponent implements OnInit {
  public itemSelecionado = 'produto';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap
      .pipe(map((params: ParamMap) => params.get('item')))
      .subscribe((item) => (this.itemSelecionado = item));
  }

  ngOnInit(): void {}

  navigateToProdutoCreate(): void {
    this.router.navigate(['/produto/create']);
  }

  navigateToPedidoCreate(): void {
    this.router.navigate(['/pedido/create']);
  }
}
