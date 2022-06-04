import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AlertInterface } from '../../interfaces/alert';
import Swal from 'sweetalert2'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnDestroy {
  private susbcription: Subscription[] = [];

  constructor(private store: Store<{ alert: AlertInterface }>) {

    this.susbcription[0] = this.store.select('alert').subscribe((alert: AlertInterface) => {
      if (alert.close) {
        this.closeAlert();
      } else {
        this.simpleAlert(alert);
      }
    })
  }
  ngOnDestroy(): void {

    this.susbcription.forEach(s => s.unsubscribe());
  }
  simpleAlert(menssage: AlertInterface) {

    Swal.fire({
      position: 'center',
      icon: menssage.icon,
      title: menssage.tittle,
      timer: menssage.timer,
      showCancelButton: menssage.showCancelButton, // There won't be any cancel button
      showConfirmButton: menssage.showConfirmButton, // There won't be any confirm button
      timerProgressBar: menssage.timerProgressBar,//si tiene timer pone la barra de progreso
    });
  }
  closeAlert() {
    Swal.close();
  }

}
