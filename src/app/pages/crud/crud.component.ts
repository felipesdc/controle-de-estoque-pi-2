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

  navigateToCategoriaCreate(): void {
    this.router.navigate(['/categoria/create']);
  }

  navigateToEstadoPedidoCreate(): void {
    this.router.navigate(['/estado-pedido/create']);
  }

  navigateToFornecedorCreate(): void {
    this.router.navigate(['/fornecedor/create']);
  }

  navigateToUsuarioCreate(): void {
    this.router.navigate(['/usuario/create']);
  }

  navigateToUnidadeCreate(): void {
    this.router.navigate(['/unidade/create']);
  }

  navigateToPerfilCreate(): void {
    this.router.navigate(['/perfil/create']);
  }

  navigateToPrecoCreate(): void {
    this.router.navigate(['/preco/create']);
  }

  navigateToMovimentacaoEstoqueCreate(): void {
    this.router.navigate(['/movimentacao-estoque/create']);
  }

  navigateToItemPedidoCreate(): void {
    this.router.navigate(['/item-pedido/create']);
  }

  navigateToHistoricoEstadoPedidoCreate(): void {
    this.router.navigate(['/historico-estado-pedido/create']);
  }
}
