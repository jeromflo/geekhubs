import * as actions from './../../../../shared/redux/actions/alert.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AlertInterface } from 'src/app/shared/interfaces/alert';

@Component({
  selector: 'app-section-body',
  templateUrl: './section-body.component.html',
  styleUrls: ['./section-body.component.css']
})
export class SectionBodyComponent {

  constructor(private store: Store) { }

  sendAlert() {
    let alert: AlertInterface = {
      icon: 'success',
      timer: 1500,
      tittle: 'Cargando',
      timerProgressBar: true,

    }
    this.store.dispatch(actions.setAlert({ value: alert }));
  }

}
