import { GeolocationService } from './../services/geolocation.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// declare leaflet variable
import * as L from 'leaflet';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  // map variables
  map;
  lat;
  lng;
  mrkr1;

  // setting up marker
  markerIcon = L.icon({
    iconUrl: '../../assets/img/marker/678111-map-marker-512.png',
    iconSize:     [18, 20], // size of the icon
    iconAnchor:   [18, 18], // point of the icon which will correspond to marker's location
  });

  // search by term variables
  location$: Observable<any>;
  location;
  query;
  queryTerm;


  constructor(public geolocation: GeolocationService) { }

  ngOnInit() {
    this.onLoadMap();
  }

  onLoadMap() {
    this.map = L.map('map').setView([40.745905, -101.941724], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(this.map);
}

// take input addresses to map
onChoice(loc) {
  if (this.mrkr1) {
    this.map.removeLayer(this.mrkr1);
  }
  this.location = loc;
  this.lat = JSON.parse(loc.lat);
  this.lng = JSON.parse(loc.lon);
  const corner1 = L.latLng(loc.boundingbox[0], loc.boundingbox[2]),
  corner2 = L.latLng(loc.boundingbox[1], loc.boundingbox[3]),
  bounds = L.latLngBounds(corner1, corner2);
  // to enable Nominatim url icons on map
  // const nominatimIcon = new L.Icon({
  //   iconUrl : loc.icon
  // });
  // const actualIcon = nominatimIcon || this.markerIcon;
  const actualIcon = this.markerIcon;
  this.mrkr1 = new L.Marker([this.lat, this.lng], { icon : actualIcon }).addTo(this.map);
  this.map.fitBounds(bounds);
  this.map.panTo([this.lat, this.lng]);
  // this.map.setZoom(4);
  this.location$ = null;
  this.queryTerm = null;
  console.log(this.location.boundingbox);
  this.map.setMaxBounds(this.location.boundingbox);

}

// fn to enable search by term, does an async pipe to subscribe/unsubscribe whenever needed
onSearchPlace(q) {
  console.log(q);
  this.queryTerm = q;
  this.location$ = this.geolocation.nominatimLLookup(q);
  // const search = this.geolocation.nominatimLLookup(q).subscribe(
  //     x => {
  //       console.log(x);
  //       const list = x;

  //       // if (list.length === 1) {
  //       //     q = list[0].display_name;
  //       // }
  //     },
  //     error => console.log(error),
  //     () => search.unsubscribe()
  //   );
}

}
