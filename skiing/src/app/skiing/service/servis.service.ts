import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SkiResortName } from "../model/ski-resort-name";
import { SkiResort } from '../model/ski-resort';
import { Track } from '../model/track';
import { Weather } from '../model/weather';
import { SkiPassPrice } from '../model/ski-pass-price';
import { Reservation } from '../model/reservation';

const url = "http://localhost:3000/api/skiresorts";

@Injectable({
  providedIn: 'root'
})
export class ServisService {

  constructor(private http :HttpClient) { }

getName(){
	return this.http.get<Array<SkiResortName>>(url).pipe(map(res => {
		let retValue = new Array<SkiResortName>();
		res.forEach(i => retValue.push(new SkiResortName(i)));
		return retValue;
	}));
}

getSkiresorts(id: number){
	return this.http.get(url + "/" + id).pipe(map(res => new SkiResort(res)))

	// return this.http.get<Array<SkiResort>>(url + "/" + id).pipe(map(res => {
	// 	let retValue = new Array<SkiResort>();
	// 	res.forEach(i => retValue.push(new SkiResort(i)));
	// 	return retValue;
	// }));
}

getWeather(id: number){
	return this.http.get<Array<Weather>>(url + "/" + id + "/weather").pipe(map(res =>{
		let retValue = new Array<Weather>();
		res.forEach(i => retValue.push(new Weather(i)));
		return retValue;
	}))
}

getTracks(id: number, params?: any){
		let queryParams = {};
  	if(params){
  		queryParams = {
  			params : new HttpParams()
  				.set("sort", params.sort && params.sort.toString() || '')

  		}
  	}
	return this.http.get<Array<Track>>(url + "/" + id + "/tracks", queryParams).pipe(map(res => {
		let makeArray = new Array<Track>();
		res.forEach(i => makeArray.push(new Track(i)));
		return makeArray;
	}));
}

getSkipass(id: number){
	return this.http.get<Array<SkiPassPrice>>(url + "/" + id + "/skipass").pipe(map(res => {
		let makeArray = new Array<SkiPassPrice>();
		res.forEach(i => makeArray.push(new SkiPassPrice(i)));
		return makeArray;
	}))
}

reserve(reserve: Reservation){
	return this.http.post(url + "/" + reserve.mountain_id + "/skipass", reserve)
}

saveRes(reservation :Reservation){
	return this.http.post(url + "/" + reservation.mountain_id + "/skipass", reservation);
}


}
