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
import { ProductService } from './shared/services/product.service';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { MaterialModule } from './shared/material/material.module';
import { ProductCreateComponent } from './pages/crud/product-create/product-create.component';
import { ProductUpdateComponent } from './shared/components/product/product-update/product-update.component';
import { HomeModule } from './pages/home/home.module';
import { ProductReadComponent } from './pages/crud/product-read/product-read.component';
import { ProductDeleteComponent } from './pages/crud/product-delete/product-delete.component';
import { SidenavComponent } from './shared/components/sidenav/sidenav.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';

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
    ProductCreateComponent,
    ProductUpdateComponent,
    ProductReadComponent,
    ProductDeleteComponent,
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
    ProductService,
    {
      provide: LOCALE_ID,
      useValue: 'pt-br',
    },
    provideHttpClient(withInterceptorsFromDi()),
  ],
})
export class AppModule {}
