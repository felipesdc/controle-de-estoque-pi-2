import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
})
export class CrudComponent implements OnInit {
  public itemSelecionado = 'produto';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('item'));
  }

  navigateToProdutoCreate(): void {
    this.router.navigate(['/produto/create']);
  }

  navigateToPedidoCreate(): void {
    this.router.navigate(['/pedido/create']);
  }
}
