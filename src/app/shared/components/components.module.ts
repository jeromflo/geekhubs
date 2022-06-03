import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { MiniCartComponent } from './mini-cart/mini-cart.component';
import { AlertComponent } from './alert/alert.component';



@NgModule({
  declarations: [
    CardsComponent,
    MiniCartComponent,
    AlertComponent,
  ],
  imports: [
    CommonModule,

  ], exports: [MiniCartComponent, CardsComponent, AlertComponent]
})
export class ComponentsModule { }
