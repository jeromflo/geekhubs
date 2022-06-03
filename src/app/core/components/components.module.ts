import { SectionsModule } from './sections/sections.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SectionsModule
  ],
  exports: [SectionsModule]
})
export class ComponentsModule { }
