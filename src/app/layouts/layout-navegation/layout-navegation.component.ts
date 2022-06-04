import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { down, up } from 'src/app/shared/redux/actions/pagination.actions';

@Component({
  selector: 'app-layout-navegation',
  templateUrl: './layout-navegation.component.html',
  styleUrls: ['./layout-navegation.component.css']
})
export class LayoutNavegationComponent {
  position: number = 0;
  disabledButton: true | null = null;
  constructor(private store: Store<{ pagination: number, disabledButton: boolean }>) {
    this.store.select('pagination').subscribe(pagination => {
      this.position = pagination
    })
    this.store.select('disabledButton').subscribe(disabledButton => {
      this.disabledButton = disabledButton ? true : null;
    })
  }

  next() {
    this.store.dispatch(up());
  }
  back() {
    this.store.dispatch(down());

  }
}
