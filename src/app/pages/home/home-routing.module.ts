import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from '../crud/crud.component';
import { ProdutoCreateComponent } from '../crud/produto/produto-create/produto-create.component';
import { ProdutoDeleteComponent } from '../crud/produto/product-delete/produto-delete.component';
import { ProdutoUpdateComponent } from '../crud/produto/produto-update/produto-update.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'crud', component: CrudComponent },
  { path: 'produto/create', component: ProdutoCreateComponent },
  { path: 'produto/update/:id', component: ProdutoUpdateComponent },
  { path: 'produto/delete/:id', component: ProdutoDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
