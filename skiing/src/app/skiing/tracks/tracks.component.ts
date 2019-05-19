import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Track } from '../model/track';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {

	@Input() t: Track[];
	@Output() javiSort = new EventEmitter();
	sortirati: string;

  constructor() { }

  ngOnInit() {
  }

  updateSort(){
  	this.javiSort.emit({"sort": this.sortirati});
  }

}
