import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutNavegationComponent } from './layout-navegation/layout-navegation.component';



@NgModule({
  declarations: [
    LayoutHeaderComponent,
    LayoutNavegationComponent
  ],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [LayoutHeaderComponent, LayoutNavegationComponent]
})
export class LayoutsModule { }
