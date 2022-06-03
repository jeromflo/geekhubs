import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { StoreModule } from '@ngrx/store';
import { alertReducer } from './reducers/alert.reducer';
import { cartReducer } from './reducers/cart.reducer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreModule.forRoot({
      alert: alertReducer,
      cart: cartReducer
    },

      {})
  ]
})
export class ReduxModule { }
