import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { MiniCartComponent } from './mini-cart/mini-cart.component';
import { AlertComponent } from './alert/alert.component';
import { CardsGroupsComponent } from './cards-groups/cards-groups.component';



@NgModule({
  declarations: [
    CardsComponent,
    MiniCartComponent,
    AlertComponent,
    CardsGroupsComponent,
  ],
  imports: [
    CommonModule,

  ], exports: [MiniCartComponent, CardsComponent, AlertComponent, CardsGroupsComponent]
})
export class ComponentsModule { }
