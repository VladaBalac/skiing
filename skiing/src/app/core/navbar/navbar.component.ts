import { Component, OnInit } from '@angular/core';

import { ServisService } from '../../skiing/service/servis.service';
import { SkiResortName } from '../../skiing/model/ski-resort-name';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	resortName :SkiResortName[];

  constructor(private servis :ServisService) { }

  ngOnInit() {
  	this.servis.getName().subscribe(res => this.resortName = res);
  }

}
