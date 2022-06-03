import { CarritoGuard } from './shared/guards/carrito.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionBodyComponent } from './core/components/sections/section-body/section-body.component';
import { SectionCartComponent } from './core/components/sections/section-cart/section-cart.component';
import { SectionMainComponent } from './core/components/sections/section-main/section-main.component';
import { NotFoundComponent } from './core/components/templates/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'mainPage', component: SectionBodyComponent, children: [
      { path: '', outlet: 'content-body', component: SectionMainComponent }]
  },
  {
    path: 'myCart', component: SectionBodyComponent, canActivate: [CarritoGuard], children: [
      { path: '', outlet: 'content-body', component: SectionCartComponent }]
  },

  { path: '', pathMatch: 'full', redirectTo: '/mainPage' },
  /*   { path: 'path', component: SectionBodyComponent },
   */
  { path: '**', component: NotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
