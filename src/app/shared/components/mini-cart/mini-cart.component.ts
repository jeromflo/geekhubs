import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Item } from '../../interfaces/item';
import { remove } from '../../redux/actions/cart.actions';

@Component({
  selector: 'app-mini-cart',
  templateUrl: './mini-cart.component.html',
  styleUrls: ['./mini-cart.component.css']
})
export class MiniCartComponent implements OnDestroy {
  public items: Item[] = [];
  private susbcription: Subscription[] = [];

  constructor(private router: Router, private store: Store<{ cart: Item[] }>) {
    this.susbcription[0] = this.store.select('cart').subscribe(cart => {
      this.items = cart;
    })
  }
  ngOnDestroy(): void {

    this.susbcription.forEach(s => s.unsubscribe());
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
