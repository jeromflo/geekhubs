import { LayoutsModule } from './layouts/layouts.module';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    SharedModule,
    BrowserModule,
    HttpClientModule,
    CoreModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
