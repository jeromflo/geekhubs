import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Item } from 'src/app/shared/interfaces/item';
import { remove } from 'src/app/shared/redux/actions/cart.actions';

@Component({
  selector: 'app-section-cart',
  templateUrl: './section-cart.component.html',
  styleUrls: ['./section-cart.component.css']
})
export class SectionCartComponent {
  items: Item[] = []
  constructor(private router: Router, private store: Store<{ cart: Item[] }>) {
    this.store.select('cart').subscribe(cart => {
      this.items = cart;
      if (this.items.length === 0) {
        this.goBack();
      }
    })
  }


  deleteElement(item: Item) {
    this.store.dispatch(remove({ value: item.id }))
  }
  getCssButton() {
    return `  <span style="color:white"><i
                            class="fas fa-cart-arrow-down"></i></span>`
  }
  goBack() {
    if (this.items.length === 0) {
      this.router.navigate(['/mainPage']);
    }
  }
}

