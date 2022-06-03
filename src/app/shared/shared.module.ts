import { ReduxModule } from './redux/redux.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingModule,
    ComponentsModule,
    ReduxModule
  ],
  exports: [ReduxModule, ComponentsModule, AppRoutingModule
  ]
})
export class SharedModule { }
