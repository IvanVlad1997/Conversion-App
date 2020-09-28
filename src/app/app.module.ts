import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ConvComponent } from './conv/conv.component';

@NgModule({
  declarations: [
    AppComponent,
    ConvComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
