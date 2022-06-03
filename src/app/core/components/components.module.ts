import { TemplatesModule } from './templates/templates.module';
import { SectionsModule } from './sections/sections.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SectionsModule,
    TemplatesModule
  ],
  exports: []
})
export class ComponentsModule { }
