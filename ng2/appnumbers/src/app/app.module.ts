import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LegendComponent } from './legend/legend.component';
import { NumberslistComponent } from './numberslist/numberslist.component';

@NgModule({
  declarations: [
    AppComponent,
    LegendComponent,
    NumberslistComponent
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
