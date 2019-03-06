import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlaceComponent } from '../place/place.component';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  notReady() {
    alert("This isn't quite ready yet!");
  }


}
