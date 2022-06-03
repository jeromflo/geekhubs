import { ComponentsModule } from './../shared/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    ComponentsModule,
    CommonModule
  ],
  exports: [ComponentsModule]
})
export class CoreModule { }
