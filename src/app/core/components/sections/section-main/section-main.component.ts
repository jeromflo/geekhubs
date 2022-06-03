import { Item } from './../../../../shared/interfaces/item';
import * as actions from './../../../../shared/redux/actions/alert.actions';
import { AlertInterface } from './../../../../shared/interfaces/alert';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RestService } from 'src/app/shared/services/restService/rest-service.service';
import { environment } from 'src/environments/environment';
import { BodyRest } from 'src/app/shared/interfaces/bodyRest';
import { addCart } from 'src/app/shared/redux/actions/cart.actions';

@Component({
  selector: 'app-section-main',
  templateUrl: './section-main.component.html',
  styleUrls: ['./section-main.component.css']
})
export class SectionMainComponent {
  public items: Item[] = [];
  constructor(private restService: RestService, private store: Store) {
    const url = `${environment.urlApi}${environment.api.getItems}`;
    const body: BodyRest = {
      getItems: { cant: 10 }
    }
    this.restService.post(url, body).subscribe(el => {
      console.log(el);

      this.items = el;

    });

  }

  addCart(el: Item) {
    /*  let alert: AlertInterface = {
       icon: 'success',
       timer: 1500,
       tittle: 'Añadido al carrito',
       timerProgressBar: true,
     }
     this.store.dispatch(actions.setAlert({ value: alert })); */
    this.store.dispatch(addCart({ value: el }))
  }

}
