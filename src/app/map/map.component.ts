import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 31.247299;
  lng = 34.803421;
  constructor() {}

  ngOnInit() {
    Object.getOwnPropertyDescriptor(mapboxgl, 'accessToken').set(
      'pk.eyJ1Ijoic2FtZXJhdCIsImEiOiJjazJrM2ZlNzkwMWt3M2NvOWl4ZGIyOGx2In0.o_yXX99Q476UpOq6yiKtWA'
    );
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 17,
      center: [this.lng, this.lat]
    });
    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());
  }
}
