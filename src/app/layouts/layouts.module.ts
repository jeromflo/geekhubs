import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';



@NgModule({
  declarations: [
    LayoutHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [LayoutHeaderComponent]
})
export class LayoutsModule { }
