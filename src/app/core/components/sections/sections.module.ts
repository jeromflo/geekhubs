import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionBodyComponent } from './section-body/section-body.component';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { SectionMainComponent } from './section-main/section-main.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { SectionCartComponent } from './section-cart/section-cart.component';



@NgModule({
  declarations: [
    SectionBodyComponent,
    SectionMainComponent,
    SectionCartComponent,
  ],
  imports: [
    CommonModule,
    LayoutsModule,
    SharedModule,
  ], exports: []
})
export class SectionsModule { }
