import { Component, Input } from '@angular/core';
import { Stock } from '../models/stock';

@Component({
  selector: 'app-show-stock',
  templateUrl: './show-stock.component.html',
  styleUrl: './show-stock.component.css'
})
export class ShowStockComponent {
 @Input() stocks:Array<Stock> = [];
}
