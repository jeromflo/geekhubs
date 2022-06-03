import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { MiniCartComponent } from './mini-cart/mini-cart.component';



@NgModule({
  declarations: [
    CardsComponent,
    MiniCartComponent
  ],
  imports: [
    CommonModule,

  ], exports: [MiniCartComponent, CardsComponent]
})
export class ComponentsModule { }
