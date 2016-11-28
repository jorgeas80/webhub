import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Comp1Component }   from './components/comp1/comp1.component';
import { Comp2Component }   from './components/comp2/comp2.component';

const appRoutes: Routes = [
    {path: 'comp1', component: Comp1Component},
    {path: 'comp2', component: Comp2Component},
    {path: '', redirectTo: '/comp1', pathMatch: 'full'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ],
})
export class AppRoutingModule { }
