import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FornecedoresComponent } from './fornecedores/fornecedores.component';
import { MovimentacoesComponent } from './movimentacoes/movimentacoes.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, MaterialModule],
  declarations: [
    HomeComponent,
    DashboardComponent,
    FornecedoresComponent,
    MovimentacoesComponent,
    ProdutosComponent,
    RelatoriosComponent,
  ],
})
export class HomeModule {}
