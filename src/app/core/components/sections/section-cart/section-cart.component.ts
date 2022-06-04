import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/shared/interfaces/item';
import { remove } from 'src/app/shared/redux/actions/cart.actions';

@Component({
  selector: 'app-section-cart',
  templateUrl: './section-cart.component.html',
  styleUrls: ['./section-cart.component.css']
})
export class SectionCartComponent implements OnDestroy {
  items: Item[] = []
  private susbcription: Subscription[] = [];
  constructor(private router: Router, private store: Store<{ cart: Item[] }>) {
    this.susbcription[0] = this.store.select('cart').subscribe(cart => {
      this.items = cart;
      if (this.items.length === 0) {
        this.goBack();
      }
    })
  }

  ngOnDestroy(): void {

    this.susbcription.forEach(s => s.unsubscribe());
  }
  deleteElement(item: Item) {
    this.store.dispatch(remove({ value: item.id }))
  }

  private goBack() {
    if (this.items.length === 0) {
      this.router.navigate(['/mainPage']);
    }
  }
}

