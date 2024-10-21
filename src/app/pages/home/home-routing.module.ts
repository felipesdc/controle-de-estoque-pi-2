import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from '../crud/crud.component';
import { ProdutoCreateComponent } from '../crud/produto/produto-create/produto-create.component';
import { ProdutoDeleteComponent } from '../crud/produto/produto-delete/produto-delete.component';
import { ProdutoUpdateComponent } from '../crud/produto/produto-update/produto-update.component';
import { HomeComponent } from './home.component';
import { PedidoCreateComponent } from '../crud/pedido/pedido-create/pedido-create.component';
import { PedidoDeleteComponent } from '../crud/pedido/pedido-delete/pedido-delete.component';
import { PedidoUpdateComponent } from '../crud/pedido/pedido-update/pedido-update.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'crud/:item', component: CrudComponent },
  { path: 'produto/create', component: ProdutoCreateComponent },
  { path: 'produto/update/:produto_id', component: ProdutoUpdateComponent },
  { path: 'produto/delete/:produto_id', component: ProdutoDeleteComponent },
  { path: 'pedido/create/', component: PedidoCreateComponent },
  { path: 'pedido/delete/:pedido_id', component: PedidoDeleteComponent },
  { path: 'pedido/update/:pedido_id', component: PedidoUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
