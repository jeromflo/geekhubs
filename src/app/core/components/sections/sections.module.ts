import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionBodyComponent } from './section-body/section-body.component';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutsModule } from 'src/app/layouts/layouts.module';



@NgModule({
  declarations: [
    SectionBodyComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    LayoutsModule,
    CommonModule
  ]
})
export class SectionsModule { }
