import { Component, Input } from '@angular/core';
import { Stock } from '../models/stock';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-show-stock',
  templateUrl: './show-stock.component.html',
  styleUrl: './show-stock.component.css'
})
export class ShowStockComponent {
  stocks:Array<Stock> = [];
  constructor(private ss:StockService){
    this.stocks = this.ss.Stock;
  }
  isEditable:boolean = false;
  editHandler(){
    this.isEditable = true;
  }
  cancelHandler(){
    this.isEditable = false;
  }
}
