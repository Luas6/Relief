import { Component } from '@angular/core';
import * as L from 'leaflet';
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent {
  private map: L.Map | undefined;

  private initMap(): void {
    this.map = L.map('map', {
      center: [43.18226508304043, -0.24947973149451266], // Coordenadas especificadas
      zoom: 14
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    const iconRetinaUrl = 'assets/img/map/marker-icon-2x.png';
    const iconUrl = 'assets/img/map/marker-icon.png';
    const shadowUrl = 'assets/img/map/marker-shadow.png';

    L.Marker.prototype.options.icon = L.icon({
      iconRetinaUrl,
      iconUrl,
      shadowUrl,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });

    const marker = L.marker([43.18226508304043, -0.24947973149451266]);
    marker.addTo(this.map).bindPopup('Relief pose de carrelage et sols souples').openPopup();
  }

  ngAfterViewInit(): void {
    this.initMap();
  }
}
