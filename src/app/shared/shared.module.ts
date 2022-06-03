import { ReduxModule } from './redux/redux.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReduxModule
  ],
  exports: [ReduxModule]
})
export class SharedModule { }
