import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';

import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { ServisService } from '../skiing/service/servis.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [HomeComponent, AboutComponent, NavbarComponent],

  exports: [
    NavbarComponent
  ],

  providers: [
  ServisService
  ]
})
export class CoreModule { }
