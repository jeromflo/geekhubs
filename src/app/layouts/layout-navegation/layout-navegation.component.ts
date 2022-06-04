import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { down, up } from 'src/app/shared/redux/actions/pagination.actions';

@Component({
  selector: 'app-layout-navegation',
  templateUrl: './layout-navegation.component.html',
  styleUrls: ['./layout-navegation.component.css']
})
export class LayoutNavegationComponent implements OnDestroy {
  position: number = 0;
  disabledButton: true | null = null;
  private susbcription: Subscription[] = [];

  constructor(private store: Store<{ pagination: number, disabledButton: boolean }>) {
    this.susbcription[0] = this.store.select('pagination').subscribe(pagination => {
      this.position = pagination
    })
    this.susbcription[1] = this.store.select('disabledButton').subscribe(disabledButton => {
      this.disabledButton = disabledButton ? true : null;
    })
  }
  ngOnDestroy(): void {

    this.susbcription.forEach(s => s.unsubscribe());
  }
  next() {
    this.store.dispatch(up());
  }
  back() {
    this.store.dispatch(down());

  }
}
