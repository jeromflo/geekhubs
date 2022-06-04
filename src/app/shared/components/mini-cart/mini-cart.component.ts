import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Item } from '../../interfaces/item';
import { remove } from '../../redux/actions/cart.actions';

@Component({
  selector: 'app-mini-cart',
  templateUrl: './mini-cart.component.html',
  styleUrls: ['./mini-cart.component.css']
})
export class MiniCartComponent {
  public items: Item[] = [];
  constructor(private router: Router, private store: Store<{ cart: Item[] }>) {
    this.store.select('cart').subscribe(cart => {
      this.items = cart;
    })
  }
  getLenth() {
    return this.items.length;
  }
  verCarrito() {
    this.router.navigate(['/myCart']);
  }
  deleteElement(item: Item) {
    this.store.dispatch(remove({ value: item.id }))
  }
}
