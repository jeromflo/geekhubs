import * as actions from './../../../../shared/redux/actions/alert.actions';
import { AlertInterface } from './../../../../shared/interfaces/alert';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-section-main',
  templateUrl: './section-main.component.html',
  styleUrls: ['./section-main.component.css']
})
export class SectionMainComponent {

  constructor(private store: Store) { }

  addCart() {
    let alert: AlertInterface = {
      icon: 'success',
      timer: 1500,
      tittle: 'Añadido al carrito',
      timerProgressBar: true,
    }
    this.store.dispatch(actions.setAlert({ value: alert }));
  }

}
