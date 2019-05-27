import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { forkJoin } from 'rxjs';

// import { Observable } from 'rxjs/Observable';
// import { Observable } from 'rxjs/Rx';

// Angular 6 changes this up a bit. forkJoin has been converted to a regular function so, instead of:

// import {Observable} from 'rxjs/Observable';
// ...
// return Observable.forkJoin(
//     this.http.get('someurl'),
//     this.http.get('someotherurl'));
// Use:

// import {forkJoin} from 'rxjs';
// ...
// return forkJoin(
//     this.http.get('someurl'),
//     this.http.get('someotherurl'));
// You can go to https://www.metaltoad.com/blog/angular-6-upgrading-api-calls-rxjs-6 for more explanation.

import { ServisService } from './service/servis.service';

import { SkiResort } from './model/ski-resort';
import { Track } from './model/track';
import { Weather } from './model/weather';
import { SkiPassPrice } from './model/ski-pass-price';

@Component({
  selector: 'app-skiing',
  templateUrl: './skiing.component.html',
  styleUrls: ['./skiing.component.css']
})
export class SkiingComponent implements OnInit {

	currentJustify = 'justified';

	skiResort: SkiResort;
	track: Track[];
	weather: Weather[];
	skipasPrice: SkiPassPrice[];
	daniUNedelji = ['Ponedeljak', 'Utorak', 'Sreda', 'Cetvrtak', 'Petak', 'Subota', 'Nedelja'];

  constructor(private servis: ServisService, private r: ActivatedRoute) { }

  ngOnInit() {
  	this.r.params.subscribe(par => {
  		let id = parseInt(par['rId']);
  		forkJoin(
  			this.servis.getSkiresorts(id),
  			this.servis.getTracks(id),
  			this.servis.getWeather(id),
  			this.servis.getSkipass(id)
  			).subscribe(res => {
  				this.skiResort = res[0];
  				this.track = res[1];
  				this.weather = res[2];
  				this.skipasPrice = res[3]
  			}, err => {
  				console.log("error: ", err)
  			});
  	});
  }

  sortTrack(sort){
  	this.servis.getTracks(this.skiResort._id, sort).subscribe(res => this.track = res);
  }

  newRes(reservation){
  	reservation.mountain_id = this.skiResort._id;
  	this.servis.saveRes(reservation).subscribe(res => {
  		window.alert("Reservation successful!")
  	}), err => {
  		window.alert("Error: " + err);
  	}
  }

}
