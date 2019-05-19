import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SkiingComponent } from '../skiing/skiing.component';

const skiResortRoutes: Routes = [
	{path: 'ski-resort/:rId', component: SkiingComponent}
]

@NgModule({
  imports: [
  	RouterModule.forChild(skiResortRoutes)
    
  ],
  declarations: [],

  exports: [
  	RouterModule
  ]

})
export class SkiRouterModule { }
