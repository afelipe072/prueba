import 'leaflet/dist/leaflet.css';
import './map.scss';

import {minimap} from './controls/minimap'
import {mousePosition} from './controls/mousePosition'
import {dynamicMarker} from './controls/markers'
import {AwesomeMarkersIcon} from './controls/icons/famIcon'

const L =require ('leaflet');





import {carto_light,standard_osm} from './layers/control-layers'

export var map = L.map('map', {
    center: [5.3365126655931485, -72.3906578997171],
    zoom: 10,
    layers: [standard_osm]
});


//marker
const icono=AwesomeMarkersIcon('fa','bacterium','green')
const marcador= dynamicMarker(icono,[5.3365126655931485, -72.3906578997171],0)


//mouse-position
mousePosition.addTo(map)

//minimap
//new MiniMap(standard_osm_mm,{toggleDisplay:true}).addTo(map);
minimap.addTo(map)

//L.control.zoom({position: 'topright'}).addTo(map);

// scale control
new L.control.scale({imperial: false}).addTo(map);


//perimetro

var perimetro = L.tileLayer.wms("http://34.132.27.64:8080/geoserver/wms", {
  layers: "yopal:r_perimetro",
  format: 'image/png',
  transparent: true
});


//terrenos
var terrenos = L.tileLayer.wms("http://34.132.27.64:8080/geoserver/wfs", {
  layers: "yopal:u_terreno",
  format:"image/png",
  transparent: true,
    
});

//capas
var baseMap={
  'Estandar':standard_osm,
  'Carto': carto_light
}

var overlayMaps={
    'Perimetro': perimetro,
    'Terrenos': terrenos,
    'Marker':marcador
}
L.control.layers(baseMap, overlayMaps).addTo(map);


