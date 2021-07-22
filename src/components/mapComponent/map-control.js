import 'leaflet/dist/leaflet.css';
import './map.scss';

import {minimap} from './controls/minimap'
import {mousePosition} from './controls/mousePosition'
import {dynamicMarker} from './controls/markers'
import {AwesomeMarkersIcon} from './controls/icons/famIcon'

const L =require ('leaflet');
const $=require('jquery')
const b =require('bootstrap')



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
minimap.addTo(map)


// scale control
new L.control.scale({imperial: false}).addTo(map);

//url wms
var geoserver_url='http://34.132.27.64:8080/geoserver/wms'

//perimetro

var perimetro = L.tileLayer.wms(geoserver_url, {
  layers: "yopal:r_perimetro",
  format: 'image/png',
  transparent: true
});


//terrenos
 var terrenos = L.tileLayer.wms(geoserver_url, {
  layers: "yopal:u_terreno",
  format:"image/png",
  transparent: true  
    
});  

//capas
var baseMap={
  'Estandar':standard_osm,
  'Carto': carto_light
}

var overlayMaps={
    'Perimetro': perimetro,
    'Terrenos':terrenos,
    'Marker':marcador
}
L.control.layers(baseMap, overlayMaps).addTo(map);

//wfs

var punto

function onClickMap(e){
  punto=e.latlng    
  $.getJSON(`http://34.132.27.64:8080/geoserver/yopal/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=yopal%3Au_terreno&maxFeatures=50&outputFormat=application%2Fjson&Filter=<Filter><Contains><PropertyName>geom</PropertyName><Point srsName="urn:ogc:def:crs:EPSG::4326"> <pos srsName="urn:x-ogc:def:crs:EPSG:4326">${punto.lat} ${punto.lng}</pos></Point></Contains></Filter>`)
  .then( (res)=>{  
    if(res.features[0].properties.gid!=null)
    var modal = new b.Modal(document.getElementById('myModal'))   
    document.getElementById('title').innerHTML='ID: '+res.features[0].properties.gid
    document.getElementById('codigo').innerHTML='<b>Codigo: </b>'+res.features[0].properties.codigo
    document.getElementById('shape').innerHTML='<b>Shape_area: </b>'+res.features[0].properties.shape_area
    modal.show()
    

  }).catch(error => console.log(error))
  
}

map.on('click',onClickMap)




