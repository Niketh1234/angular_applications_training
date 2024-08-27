import { Component } from '@angular/core';
import { Stock } from '../models/stock';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrl: './add-stock.component.css'
})
export class AddStockComponent {
  
  stocks:Array<Stock> = [];
  s:Stock = new Stock();
  addStockFunction(){
    this.stocks.push(this.s);
    this.s = new Stock();
  }
}
