import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss'],
  // template: `<p>{{ id }} - id</p>`
})
export class ProductAlertsComponent {
  @Input() product!: Product;
  @Input('link-id') id!: string;
  @Output() notify = new EventEmitter<string>()
}
