import 'leaflet-mouse-position/src/L.Control.MousePosition.css'
require('leaflet-mouse-position')

export var mousePosition= L.control.mousePosition({position: 'topright',emptyString:'Sin Posición'})
    
