import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnChanges {
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: 'cart - name',
    address: ''
  })
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder 
  ) {}

  onSubmit = (): void => {
    // Process checkout data here
    console.log("cart this", this);
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    
  }
}
