import { Component } from '@angular/core';
import { Stock } from '../models/stock';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrl: './add-stock.component.css'
})
export class AddStockComponent {
  s:Stock = new Stock();
  readCode(e:any){
    this.s.code = e.target.value;
  }
  readName(e:any){
    this.s.name = e.target.value;
  }
  readInitialPrice(e:any){
    this.s.initialPrice = e.target.value;
  }
  readFaceValue(e:any){
    this.s.faceValue = e.target.value;
  }

  addHandler(){
    alert("Stock added successfully")
  }
}

