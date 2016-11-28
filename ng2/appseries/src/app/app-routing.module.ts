import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyseriesComponent } from './components/myseries/myseries.component';
import { MainComponent } from './components/main/main.component';

const appRoutes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'mis-series', component: MyseriesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
