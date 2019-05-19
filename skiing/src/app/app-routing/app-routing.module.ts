import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }     from '../core/home/home.component';
import { AboutComponent } from '../core/about/about.component';

const coreRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(coreRoutes)
  ],
  declarations: [],

  exports: [
  	RouterModule
  ]
})
export class AppRoutingModule { }
