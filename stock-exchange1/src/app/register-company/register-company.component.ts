import { Component } from '@angular/core';

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrl: './register-company.component.css'
})
export class RegisterCompanyComponent {
  theme = localStorage.getItem('theme');
  constructor(){
  if(this.theme == 'light')
    this.theme = 'lightContainer'
  else  
    this.theme = 'darkContainer'
  }
}
