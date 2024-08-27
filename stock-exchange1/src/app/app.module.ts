import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginCompanyComponent } from './login-company/login-company.component';
import { RegisterCompanyComponent } from './register-company/register-company.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { ShowStockComponent } from './show-stock/show-stock.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginCompanyComponent,
    RegisterCompanyComponent,
    AddStockComponent,
    ShowStockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
