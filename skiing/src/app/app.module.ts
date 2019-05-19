import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { SkiingModule } from './skiing/skiing.module';
import { AppRoutingModule } from './app-routing/app-routing.module';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,


    AppRoutingModule,

    SkiingModule,
    CoreModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
