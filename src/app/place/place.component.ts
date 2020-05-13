import { environment } from 'src/environments/environment';
import { GeolocationService } from './../services/geolocation.service';
import { Component, OnInit } from '@angular/core';
// declare leaflet variable
import * as L from 'leaflet';
// leaflet fullscreen
import '../../../node_modules/leaflet.fullscreen/Control.FullScreen.js';
import 'leaflet.fullscreen';

import { Observable } from 'rxjs';
import { PopulationService } from '../services/population.service';

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
    iconSize: [18, 20], // size of the icon
    iconAnchor: [18, 18], // point of the icon which will correspond to marker's location
  });

  // search by term variables
  location$: Observable<any>;
  location;
  query;
  queryTerm;
  // population
  pops;


  constructor(private geolocation: GeolocationService, private popService: PopulationService) { }

  ngOnInit() {
    this.onLoadMap();
  }

  onLoadMap() {
    this.map = L.map('map').setView([40.745905, -101.941724], 2);
    L.tileLayer(environment.TITLE_LAYER_URL, {
      attribution: `© <a href=${environment.ATTRIBUTION_URL}>OpenStreetMap</a> contributors`
    }).addTo(this.map);
    L.control.fullscreen({
      position: 'topleft', // change the position of the button can be topleft, topright, bottomright or bottomleft, defaut topleft
      title: 'Show me the fullscreen !', // change the title of the button, default Full Screen
      titleCancel: 'Exit fullscreen mode', // change the title of the button when fullscreen is on, default Exit Full Screen
      content: null, // change the content of the button, can be HTML, default null
      forceSeparateButton: true, // force seperate button to detach from zoom buttons, default false
      forcePseudoFullscreen: true, // force use of pseudo full screen even if full screen API is available, default false
      fullscreenElement: false // Dom element to render in full screen, false by default, fallback to map._container
    }).addTo(this.map);
    this.map.on('enterFullscreen', () => this.map.invalidateSize());
    this.map.on('exitFullscreen', () => this.map.invalidateSize());
    this.map.on('click', (e) => {
      if (this.mrkr1) {
        this.map.removeLayer(this.mrkr1);
      }
      this.map.setZoom(7);
      this.mrkr1 = new L.Marker(e.latlng, { icon: this.markerIcon }).addTo(this.map);
      this.map.panTo([e.latlng.lat, e.latlng.lng]);

    });
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
    this.mrkr1 = new L.Marker([this.lat, this.lng], { icon: actualIcon }).addTo(this.map);
    this.map.fitBounds(bounds);
    this.map.panTo([this.lat, this.lng]);
    this.location$ = null;
    this.queryTerm = null;
    this.map.setMaxBounds(this.location.boundingbox);
    const t = this.location.display_name.split(' ').splice(-1);
    // this.popService.getCountryPopulation(t).subscribe(
    //   d => {
    //     console.log(d);
    //     this.pops = d.rank;
    //   },
    //   error => console.log(error)
    // );
  }

  // fn to enable search by term, does an async pipe to subscribe/unsubscribe whenever needed
  onSearchPlace(q) {
    console.log(q);
    this.queryTerm = q;
    this.location$ = this.geolocation.nominatimLLookup(q);
  }

}
