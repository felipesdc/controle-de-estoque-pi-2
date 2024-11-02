import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from '../crud/crud.component';
import { HomeComponent } from './home.component';

import { ProdutoCreateComponent } from '../crud/produto/produto-create/produto-create.component';
import { ProdutoDeleteComponent } from '../crud/produto/produto-delete/produto-delete.component';
import { ProdutoUpdateComponent } from '../crud/produto/produto-update/produto-update.component';

import { PedidoCreateComponent } from '../crud/pedido/pedido-create/pedido-create.component';
import { PedidoDeleteComponent } from '../crud/pedido/pedido-delete/pedido-delete.component';
import { PedidoUpdateComponent } from '../crud/pedido/pedido-update/pedido-update.component';

import { CategoriaCreateComponent } from '../crud/categoria/categoria-create/categoria-create.component';
import { CategoriaDeleteComponent } from '../crud/categoria/categoria-delete/categoria-delete.component';
import { CategoriaUpdateComponent } from '../crud/categoria/categoria-update/categoria-update.component';

import { EstadoPedidoCreateComponent } from '../crud/estado-pedido/estado-pedido-create/estado-pedido-create.component';
import { EstadoPedidoDeleteComponent } from '../crud/estado-pedido/estado-pedido-delete/estado-pedido-delete.component';
import { EstadoPedidoUpdateComponent } from '../crud/estado-pedido/estado-pedido-update/estado-pedido-update.component';

import { FornecedorCreateComponent } from '../crud/fornecedor/fornecedor-create/fornecedor-create.component';
import { FornecedorDeleteComponent } from '../crud/fornecedor/fornecedor-delete/fornecedor-delete.component';
import { FornecedorUpdateComponent } from '../crud/fornecedor/fornecedor-update/fornecedor-update.component';

import { HistoricoEstadoPedidoCreateComponent } from '../crud/historico-estado-pedido/historico-estado-pedido-create/historico-estado-pedido-create.component';
import { HistoricoEstadoPedidoDeleteComponent } from '../crud/historico-estado-pedido/historico-estado-pedido-delete/historico-estado-pedido-delete.component';
import { HistoricoEstadoPedidoUpdateComponent } from '../crud/historico-estado-pedido/historico-estado-pedido-update/historico-estado-pedido-update.component';

import { ItemPedidoCreateComponent } from '../crud/item-pedido/item-pedido-create/item-pedido-create.component';
import { ItemPedidoDeleteComponent } from '../crud/item-pedido/item-pedido-delete/item-pedido-delete.component';
import { ItemPedidoUpdateComponent } from '../crud/item-pedido/item-pedido-update/item-pedido-update.component';

import { MovimentacaoEstoqueCreateComponent } from '../crud/movimentacao-estoque/movimentacao-estoque-create/movimentacao-estoque-create.component';
import { MovimentacaoEstoqueDeleteComponent } from '../crud/movimentacao-estoque/movimentacao-estoque-delete/movimentacao-estoque-delete.component';
import { MovimentacaoEstoqueUpdateComponent } from '../crud/movimentacao-estoque/movimentacao-estoque-update/movimentacao-estoque-update.component';

import { PerfilCreateComponent } from '../crud/perfil/perfil-create/perfil-create.component';
import { PerfilDeleteComponent } from '../crud/perfil/perfil-delete/perfil-delete.component';
import { PerfilUpdateComponent } from '../crud/perfil/perfil-update/perfil-update.component';

import { PrecoCreateComponent } from '../crud/preco/preco-create/preco-create.component';
import { PrecoDeleteComponent } from '../crud/preco/preco-delete/preco-delete.component';
import { PrecoUpdateComponent } from '../crud/preco/preco-update/preco-update.component';

import { UnidadeCreateComponent } from '../crud/unidade/unidade-create/unidade-create.component';
import { UnidadeDeleteComponent } from '../crud/unidade/unidade-delete/unidade-delete.component';
import { UnidadeUpdateComponent } from '../crud/unidade/unidade-update/unidade-update.component';
import { UsuarioCreateComponent } from '../crud/usuario/usuario-create/usuario-create.component';
import { UsuarioDeleteComponent } from '../crud/usuario/usuario-delete/usuario-delete.component';
import { UsuarioUpdateComponent } from '../crud/usuario/usuario-update/usuario-update.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'crud/:item', component: CrudComponent },
  { path: 'produto/create', component: ProdutoCreateComponent },
  { path: 'produto/delete/:produto_id', component: ProdutoDeleteComponent },
  { path: 'produto/update/:produto_id', component: ProdutoUpdateComponent },
  { path: 'pedido/create', component: PedidoCreateComponent },
  { path: 'pedido/delete/:pedido_id', component: PedidoDeleteComponent },
  { path: 'pedido/update/:pedido_id', component: PedidoUpdateComponent },
  { path: 'categoria/create', component: CategoriaCreateComponent },
  {
    path: 'categoria/delete/:categoria_id',
    component: CategoriaDeleteComponent,
  },
  {
    path: 'categoria/update/:categoria_id',
    component: CategoriaUpdateComponent,
  },
  { path: 'estado-pedido/create', component: EstadoPedidoCreateComponent },
  {
    path: 'estado-pedido/delete/:estado_pedido_id',
    component: EstadoPedidoDeleteComponent,
  },
  {
    path: 'estado-pedido/update/:estado_pedido_id',
    component: EstadoPedidoUpdateComponent,
  },
  { path: 'fornecedor/create', component: FornecedorCreateComponent },
  {
    path: 'fornecedor/delete/:fornecedor_id',
    component: FornecedorDeleteComponent,
  },
  {
    path: 'fornecedor/update/:fornecedor_id',
    component: FornecedorUpdateComponent,
  },
  {
    path: 'historico-estado-pedido/create',
    component: HistoricoEstadoPedidoCreateComponent,
  },
  {
    path: 'historico-estado-pedido/delete/:historico_id',
    component: HistoricoEstadoPedidoDeleteComponent,
  },
  {
    path: 'historico-estado-pedido/update/:historico_id',
    component: HistoricoEstadoPedidoUpdateComponent,
  },

  { path: 'item-pedido/create', component: ItemPedidoCreateComponent },
  {
    path: 'item-pedido/delete/:produto_id',
    component: ItemPedidoDeleteComponent,
  },
  {
    path: 'item-pedido/update/:produto_id',
    component: ItemPedidoUpdateComponent,
  },
  {
    path: 'movimentacao-estoque/create',
    component: MovimentacaoEstoqueCreateComponent,
  },
  {
    path: 'movimentacao-estoque/delete/:movimento_id',
    component: MovimentacaoEstoqueDeleteComponent,
  },
  {
    path: 'movimentacao-estoque/update/:movimento_id',
    component: MovimentacaoEstoqueUpdateComponent,
  },
  { path: 'perfil/create', component: PerfilCreateComponent },
  { path: 'perfil/delete/:produto_id', component: PerfilDeleteComponent },
  { path: 'perfil/update/:produto_id', component: PerfilUpdateComponent },
  { path: 'preco/create', component: PrecoCreateComponent },
  { path: 'preco/delete/:preco_id', component: PrecoDeleteComponent },
  { path: 'preco/update/:preco_id', component: PrecoUpdateComponent },
  { path: 'unidade/create', component: UnidadeCreateComponent },
  { path: 'unidade/delete/:unidade_id', component: UnidadeDeleteComponent },
  { path: 'unidade/update/:unidade_id', component: UnidadeUpdateComponent },
  { path: 'usuario/create', component: UsuarioCreateComponent },
  { path: 'usuario/delete/:usuario_id', component: UsuarioDeleteComponent },
  { path: 'usuario/update/:usuario_id', component: UsuarioUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
