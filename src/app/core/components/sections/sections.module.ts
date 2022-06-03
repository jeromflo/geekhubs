import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionBodyComponent } from './section-body/section-body.component';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { SectionMainComponent } from './section-main/section-main.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    SectionBodyComponent,
    SectionMainComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    LayoutsModule,
    SharedModule,
    CommonModule
  ], exports: []
})
export class SectionsModule { }
