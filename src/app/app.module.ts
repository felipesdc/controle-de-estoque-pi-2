import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideNativeDateAdapter } from '@angular/material/core';

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

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { MaterialModule } from './shared/material/material.module';
import { HomeModule } from './pages/home/home.module';
import { SidenavComponent } from './shared/components/sidenav/sidenav.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';

import { ProdutoComponent } from './pages/crud/produto/produto.component';
import { ProdutoCreateComponent } from './pages/crud/produto/produto-create/produto-create.component';
import { ProdutoUpdateComponent } from './pages/crud/produto/produto-update/produto-update.component';
import { ProdutoDeleteComponent } from './pages/crud/produto/produto-delete/produto-delete.component';
import { ProdutoService } from './shared/services/produto.service';

import { PedidoComponent } from './pages/crud/pedido/pedido.component';
import { PedidoCreateComponent } from './pages/crud/pedido/pedido-create/pedido-create.component';
import { PedidoUpdateComponent } from './pages/crud/pedido/pedido-update/pedido-update.component';
import { PedidoDeleteComponent } from './pages/crud/pedido/pedido-delete/pedido-delete.component';
import { PedidoService } from './shared/services/pedido.service';

import { CategoriaComponent } from './pages/crud/categoria/categoria.component';
import { CategoriaCreateComponent } from './pages/crud/categoria/categoria-create/categoria-create.component';
import { CategoriaUpdateComponent } from './pages/crud/categoria/categoria-update/categoria-update.component';
import { CategoriaDeleteComponent } from './pages/crud/categoria/categoria-delete/categoria-delete.component';
import { CategoriaService } from './shared/services/categoria.service';

import { EstadoPedidoCreateComponent } from './pages/crud/estado-pedido/estado-pedido-create/estado-pedido-create.component';
import { EstadoPedidoUpdateComponent } from './pages/crud/estado-pedido/estado-pedido-update/estado-pedido-update.component';
import { EstadoPedidoComponent } from './pages/crud/estado-pedido/estado-pedido.component';
import { EstadoPedidoDeleteComponent } from './pages/crud/estado-pedido/estado-pedido-delete/estado-pedido-delete.component';
import { EstadoPedidoService } from './shared/services/estado-pedido.service';

import { FornecedorCreateComponent } from './pages/crud/fornecedor/fornecedor-create/fornecedor-create.component';
import { FornecedorUpdateComponent } from './pages/crud/fornecedor/fornecedor-update/fornecedor-update.component';
import { FornecedorComponent } from './pages/crud/fornecedor/fornecedor.component';
import { FornecedorDeleteComponent } from './pages/crud/fornecedor/fornecedor-delete/fornecedor-delete.component';
import { FornecedorService } from './shared/services/fornecedor.service';

import { UsuarioCreateComponent } from './pages/crud/usuario/usuario-create/usuario-create.component';
import { UsuarioUpdateComponent } from './pages/crud/usuario/usuario-update/usuario-update.component';
import { UsuarioComponent } from './pages/crud/usuario/usuario.component';
import { UsuarioDeleteComponent } from './pages/crud/usuario/usuario-delete/usuario-delete.component';
import { UsuarioService } from './shared/services/usuario.service';

import { UnidadeCreateComponent } from './pages/crud/unidade/unidade-create/unidade-create.component';
import { UnidadeUpdateComponent } from './pages/crud/unidade/unidade-update/unidade-update.component';
import { UnidadeComponent } from './pages/crud/unidade/unidade.component';
import { UnidadeDeleteComponent } from './pages/crud/unidade/unidade-delete/unidade-delete.component';
import { UnidadeService } from './shared/services/unidade.service';

import { PerfilCreateComponent } from './pages/crud/perfil/perfil-create/perfil-create.component';
import { PerfilUpdateComponent } from './pages/crud/perfil/perfil-update/perfil-update.component';
import { PerfilComponent } from './pages/crud/perfil/perfil.component';
import { PerfilDeleteComponent } from './pages/crud/perfil/perfil-delete/perfil-delete.component';
import { PerfilService } from './shared/services/perfil.service';

import { PrecoCreateComponent } from './pages/crud/preco/preco-create/preco-create.component';
import { PrecoUpdateComponent } from './pages/crud/preco/preco-update/preco-update.component';
import { PrecoComponent } from './pages/crud/preco/preco.component';
import { PrecoDeleteComponent } from './pages/crud/preco/preco-delete/preco-delete.component';
import { PrecoService } from './shared/services/preco.service';

import { MovimentacaoEstoqueCreateComponent } from './pages/crud/movimentacao-estoque/movimentacao-estoque-create/movimentacao-estoque-create.component';
import { MovimentacaoEstoqueUpdateComponent } from './pages/crud/movimentacao-estoque/movimentacao-estoque-update/movimentacao-estoque-update.component';
import { MovimentacaoEstoqueComponent } from './pages/crud/movimentacao-estoque/movimentacao-estoque.component';
import { MovimentacaoEstoqueDeleteComponent } from './pages/crud/movimentacao-estoque/movimentacao-estoque-delete/movimentacao-estoque-delete.component';
import { MovimentacaoEstoqueService } from './shared/services/movimentacao-estoque.service';

import { ItemPedidoCreateComponent } from './pages/crud/item-pedido/item-pedido-create/item-pedido-create.component';
import { ItemPedidoUpdateComponent } from './pages/crud/item-pedido/item-pedido-update/item-pedido-update.component';
import { ItemPedidoComponent } from './pages/crud/item-pedido/item-pedido.component';
import { ItemPedidoDeleteComponent } from './pages/crud/item-pedido/item-pedido-delete/item-pedido-delete.component';
import { ItemPedidoService } from './shared/services/item-pedido.service';

import { HistoricoEstadoPedidoCreateComponent } from './pages/crud/historico-estado-pedido/historico-estado-pedido-create/historico-estado-pedido-create.component';
import { HistoricoEstadoPedidoUpdateComponent } from './pages/crud/historico-estado-pedido/historico-estado-pedido-update/historico-estado-pedido-update.component';
import { HistoricoEstadoPedidoComponent } from './pages/crud/historico-estado-pedido/historico-estado-pedido.component';
import { HistoricoEstadoPedidoDeleteComponent } from './pages/crud/historico-estado-pedido/historico-estado-pedido-delete/historico-estado-pedido-delete.component';
import { HistoricoEstadoPedidoService } from './shared/services/historico-estado-pedido.service';

import { AuthService } from './shared/services/auth.service';
import { AuthGuard } from './shared/guards/auth.guard';
import { LoginModule } from './pages/login/login.module';

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
    CategoriaCreateComponent,
    CategoriaUpdateComponent,
    CategoriaComponent,
    CategoriaDeleteComponent,
    EstadoPedidoCreateComponent,
    EstadoPedidoUpdateComponent,
    EstadoPedidoComponent,
    EstadoPedidoDeleteComponent,
    FornecedorCreateComponent,
    FornecedorUpdateComponent,
    FornecedorComponent,
    FornecedorDeleteComponent,
    UsuarioCreateComponent,
    UsuarioUpdateComponent,
    UsuarioComponent,
    UsuarioDeleteComponent,
    UnidadeCreateComponent,
    UnidadeUpdateComponent,
    UnidadeComponent,
    UnidadeDeleteComponent,
    PerfilCreateComponent,
    PerfilUpdateComponent,
    PerfilComponent,
    PerfilDeleteComponent,
    PrecoCreateComponent,
    PrecoUpdateComponent,
    PrecoComponent,
    PrecoDeleteComponent,
    MovimentacaoEstoqueCreateComponent,
    MovimentacaoEstoqueUpdateComponent,
    MovimentacaoEstoqueComponent,
    MovimentacaoEstoqueDeleteComponent,
    ItemPedidoCreateComponent,
    ItemPedidoUpdateComponent,
    ItemPedidoComponent,
    ItemPedidoDeleteComponent,
    HistoricoEstadoPedidoCreateComponent,
    HistoricoEstadoPedidoUpdateComponent,
    HistoricoEstadoPedidoComponent,
    HistoricoEstadoPedidoDeleteComponent,
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
    LoginModule,
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
    AuthService,
    AuthGuard,
    provideNativeDateAdapter(),
    {
      provide: LOCALE_ID,
      useValue: 'pt-br',
    },
    provideHttpClient(withInterceptorsFromDi()),
  ],
})
export class AppModule {}
