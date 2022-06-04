import { Item } from './../../../../shared/interfaces/item';
import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { RestService } from 'src/app/shared/services/restService/rest-service.service';
import { environment } from 'src/environments/environment';
import { BodyRest } from 'src/app/shared/interfaces/bodyRest';
import { addCart } from 'src/app/shared/redux/actions/cart.actions';
import { down, up } from 'src/app/shared/redux/actions/pagination.actions';
import * as actionsDisabledButton from 'src/app/shared/redux/actions/disabledButton.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-section-main',
  templateUrl: './section-main.component.html',
  styleUrls: ['./section-main.component.css']
})
export class SectionMainComponent implements OnDestroy {
  public items: Item[] = [];
  position: number = 0;
  disabledButton: true | null = null;
  private susbcription: Subscription[] = [];
  constructor(private restService: RestService, private store: Store<{ pagination: number, disabledButton: boolean }>) {
    this.susbcription[0] = this.store.select('disabledButton').subscribe(disabledButton => {
      this.disabledButton = disabledButton ? true : null;
    })
    this.susbcription[1] = this.store.select('pagination').subscribe(pagination => {
      this.position = pagination
      const url = `${environment.urlApi}${environment.api.getItems}`;
      const body: BodyRest = {
        getItems: { cant: 6 }
      }
      this.store.dispatch(actionsDisabledButton.disabledButton())

      this.susbcription[3] = this.restService.post(url, body).subscribe(el => {
        this.items = el;
        this.store.dispatch(actionsDisabledButton.showButton())

      });
    })


  }
  ngOnDestroy(): void {

    this.susbcription.forEach(s => s.unsubscribe());
  }

  addCart(el: Item) {
    this.store.dispatch(addCart({ value: el }))
  }
  next() {
    this.store.dispatch(up());
  }
  back() {
    this.store.dispatch(down());

  }

}
