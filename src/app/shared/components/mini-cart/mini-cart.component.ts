import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Item } from '../../interfaces/item';

@Component({
  selector: 'app-mini-cart',
  templateUrl: './mini-cart.component.html',
  styleUrls: ['./mini-cart.component.css']
})
export class MiniCartComponent {
  private items: Item[] = [];
  constructor(private store: Store<{ cart: Item[] }>) {
    this.store.select('cart').subscribe(cart => {
      this.items = cart;
    })
  }
  getLenth() {
    return this.items.length;
  }


}
