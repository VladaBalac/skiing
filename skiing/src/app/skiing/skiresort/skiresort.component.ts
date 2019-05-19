import { Component, OnInit, Input } from '@angular/core';

import { SkiResort } from '../model/ski-resort';

@Component({
  selector: 'app-skiresort',
  templateUrl: './skiresort.component.html',
  styleUrls: ['./skiresort.component.css']
})
export class SkiresortComponent implements OnInit {


	@Input() ski : SkiResort; 

  constructor() { }

  ngOnInit() {
  }

}
