import { Item } from './../../../../shared/interfaces/item';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { RestService } from 'src/app/shared/services/restService/rest-service.service';
import { environment } from 'src/environments/environment';
import { BodyRest } from 'src/app/shared/interfaces/bodyRest';
import { addCart } from 'src/app/shared/redux/actions/cart.actions';
import { down, up } from 'src/app/shared/redux/actions/pagination.actions';
import * as actionsDisabledButton from 'src/app/shared/redux/actions/disabledButton.actions';

@Component({
  selector: 'app-section-main',
  templateUrl: './section-main.component.html',
  styleUrls: ['./section-main.component.css']
})
export class SectionMainComponent {
  public items: Item[] = [];
  position: number = 0;
  disabledButton: true | null = null;
  constructor(private restService: RestService, private store: Store<{ pagination: number, disabledButton: boolean }>) {
    this.store.select('disabledButton').subscribe(disabledButton => {
      this.disabledButton = disabledButton ? true : null;
    })
    this.store.select('pagination').subscribe(pagination => {
      this.position = pagination
      const url = `${environment.urlApi}${environment.api.getItems}`;
      const body: BodyRest = {
        getItems: { cant: 6 }
      }
      this.store.dispatch(actionsDisabledButton.disabledButton())

      this.restService.post(url, body).subscribe(el => {
        this.items = el;
        this.store.dispatch(actionsDisabledButton.showButton())

      });
    })


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
