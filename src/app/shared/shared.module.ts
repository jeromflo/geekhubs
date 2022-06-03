import { AppRoutingModule } from './../app-routing.module';
import { ReduxModule } from './redux/redux.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingModule,

    ReduxModule
  ],
  exports: [ReduxModule, AppRoutingModule,
  ]
})
export class SharedModule { }
