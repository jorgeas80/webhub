import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { TopnavbarComponent } from './components/topnavbar/topnavbar.component';
import { BottomnavbarComponent } from './components/bottomnavbar/bottomnavbar.component';
import { SeriestableComponent } from './components/seriestable/seriestable.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { OrderbyPipe } from './pipes/orderby.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { SeriestatusDirective } from './directives/seriestatus.directive';
import { StarratingComponent } from './components/starrating/starrating.component';
import { AppRoutingModule } from './app-routing.module';
import { MyseriesComponent } from './components/myseries/myseries.component';
import { MainComponent } from './components/main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    TopnavbarComponent,
    BottomnavbarComponent,
    SeriestableComponent,
    DatepickerComponent,
    OrderbyPipe,
    FilterPipe,
    SeriestatusDirective,
    StarratingComponent,
    MyseriesComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
