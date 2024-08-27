import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginCompanyComponent } from './login-company/login-company.component';
import { RegisterCompanyComponent } from './register-company/register-company.component';
import { AddStockComponent } from './add-stock/add-stock.component';

const routes: Routes = [
  {path:'login',component:LoginCompanyComponent},
  {path:'register',component:RegisterCompanyComponent},
  {path:'add-stock',component:AddStockComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
