import { Injectable } from '@angular/core';
import { Stock } from '../models/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  ss:Array<Stock> = [];
  addToStock(s:Stock){
    this.ss.push(s);
  }
  get Stock(){
    return this.ss;
  }
  constructor() { }
}
