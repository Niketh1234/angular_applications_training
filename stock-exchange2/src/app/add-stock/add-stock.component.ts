import { Component } from '@angular/core';
import { Stock } from '../models/stock';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrl: './add-stock.component.css'
})
export class AddStockComponent {
  s:Stock = new Stock();
  constructor(private ss:StockService) {
  
  }
  addStockFunction(){
    this.ss.addToStock(this.s)
    this.s = new Stock();
  }
}
