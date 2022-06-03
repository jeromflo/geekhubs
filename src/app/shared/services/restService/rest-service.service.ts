import * as actions from './../../redux/actions/alert.actions';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BodyRest } from '../../interfaces/bodyRest';
import { share } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AlertInterface } from '../../interfaces/alert';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private httpClient: HttpClient, private store: Store) { }

  public post(url: string, body: BodyRest): Observable<any> {
    this.cargando();
    return this.suscriptorFlow(this.httpClient.post(url, body));
  }

  private suscriptorFlow(subscriptor: Observable<any>) {
    let observable = subscriptor.pipe(share());
    observable.subscribe(data => {
      this.closeAlert();
    }, (error) => {
      error(error.toString());
    });
    return observable;
  }

  private cargando() {
    let alert: AlertInterface = {
      icon: 'info',
      timer: 1500,
      tittle: 'Cargando',
      timerProgressBar: true,
    }
    this.store.dispatch(actions.setAlert({ value: alert }));
  }
  closeAlert() {
    this.store.dispatch(actions.closeAlert());
  }
  error(error: string) {
    let alert: AlertInterface = {
      icon: 'error',
      timer: 1500,
      tittle: error,
      timerProgressBar: true,
    }
    this.store.dispatch(actions.setAlert({ value: alert }));
  }

}

