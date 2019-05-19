import { Component, OnInit, Input } from '@angular/core';

import { Weather } from '../model/weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

	@Input()  w: Weather;
	@Input() d: string[] ;


  constructor() { }

  ngOnInit() {
  }

}
