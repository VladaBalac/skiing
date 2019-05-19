import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// npm install angular-cli
// ng new project 
// cd 'project' // <-------------- Here , you missed this
// npm install 
// npm install  --save bootstrap 
// npm install --save @ng-bootstrap/ng-bootstrap

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { SkiresortComponent } from './skiresort/skiresort.component';
import { TabsComponent } from './tabs/tabs.component';
import { SkiingComponent } from './skiing.component';
import { WeatherComponent } from './weather/weather.component';
import { TracksComponent } from './tracks/tracks.component';
import { SkipassComponent } from './skipass/skipass.component';


import { SkiRouterModule } from './ski-router.module';

import { ServisService } from './service/servis.service';

@NgModule({
  imports: [
    CommonModule,
    SkiRouterModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot()
  ],

  declarations: [
  SkiresortComponent, 
  TabsComponent, 
  SkiingComponent,
  SkipassComponent,
  TracksComponent,
  WeatherComponent
  ],

  providers: [
  ServisService
  ]
})
export class SkiingModule { }
