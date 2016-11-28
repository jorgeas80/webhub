import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClickmeComponent } from './components/clickme/clickme.component';
import { Clickme2Component } from './components/clickme2/clickme2.component';
import { KeyupComponent } from './components/keyup/keyup.component';
import { KeyupenterComponent } from './components/keyupenter/keyupenter.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickmeComponent,
    Clickme2Component,
    KeyupComponent,
    KeyupenterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
