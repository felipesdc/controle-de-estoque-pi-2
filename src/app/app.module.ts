import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeLayoutComponent } from './shared/layouts/home-layout/home-layout.component';
import { CommonModule } from '@angular/common';
import { CrudComponent } from './pages/crud/crud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { ProdutoService } from './shared/services/produto.service';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { MaterialModule } from './shared/material/material.module';
import { ProdutoCreateComponent } from './pages/crud/produto/produto-create/produto-create.component';
import { ProdutoUpdateComponent } from './pages/crud/produto/produto-update/produto-update.component';
import { HomeModule } from './pages/home/home.module';
import { ProdutoComponent } from './pages/crud/produto/produto.component';
import { ProdutoDeleteComponent } from './pages/crud/produto/produto-delete/produto-delete.component';
import { SidenavComponent } from './shared/components/sidenav/sidenav.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { CategoriaService } from './shared/services/categoria.service';
import { EstadoPedidoService } from './shared/services/estado-pedido.service';
import { FornecedorService } from './shared/services/fornecedor.service';
import { HistoricoEstadoPedidoService } from './shared/services/historico-estado-pedido.service';
import { ItemPedidoService } from './shared/services/item-pedido.service';
import { MovimentacaoEstoqueService } from './shared/services/movimentacao-estoque.service';
import { PedidoService } from './shared/services/pedido.service';
import { PerfilService } from './shared/services/perfil.service';
import { PrecoService } from './shared/services/preco.service';
import { UnidadeService } from './shared/services/unidade.service';
import { UsuarioService } from './shared/services/usuario.service';
import { PedidoCreateComponent } from './pages/crud/pedido/pedido-create/pedido-create.component';
import { PedidoUpdateComponent } from './pages/crud/pedido/pedido-update/pedido-update.component';
import { PedidoComponent } from './pages/crud/pedido/pedido.component';
import { PedidoDeleteComponent } from './pages/crud/pedido/pedido-delete/pedido-delete.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AppComponent,
    FooterComponent,
    SidenavComponent,
    HomeLayoutComponent,
    CrudComponent,
    ProdutoCreateComponent,
    ProdutoUpdateComponent,
    ProdutoComponent,
    ProdutoDeleteComponent,
    PedidoCreateComponent,
    PedidoUpdateComponent,
    PedidoComponent,
    PedidoDeleteComponent,
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CurrencyMaskModule,
  ],
  providers: [
    CategoriaService,
    EstadoPedidoService,
    FornecedorService,
    HistoricoEstadoPedidoService,
    ItemPedidoService,
    MovimentacaoEstoqueService,
    PedidoService,
    PerfilService,
    PrecoService,
    ProdutoService,
    UnidadeService,
    UsuarioService,
    {
      provide: LOCALE_ID,
      useValue: 'pt-br',
    },
    provideHttpClient(withInterceptorsFromDi()),
  ],
})
export class AppModule {}
