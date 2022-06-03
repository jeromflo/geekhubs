import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LayoutHeaderComponent
  ],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [LayoutHeaderComponent]
})
export class LayoutsModule { }
