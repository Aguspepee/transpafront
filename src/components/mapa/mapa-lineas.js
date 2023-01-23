import { MapContainer, Polyline, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';
import { useMapEvents, Marker, Popup, useMap } from 'react-leaflet';
import LineasMarker from './components/lineas-marker';
import { useState } from 'react';





function MapaLineas({ data, handleSetMap, search, ...props }) {
    const [position, setPosition] = useState([-43, -65])
    let line = []
    
    data?.forEach(piquete => {
        if (!!piquete.latitud) {
            line.push ([-Number(piquete?.latitud), -Number(piquete?.longitud)])
        }
    })

    return (
        <MapContainer
            center={position}
            zoom={7}
            scrollWheelZoom={true}
            style={{ "height": 'calc(100vh - 65px)', "width": "100%" }}
            ref={handleSetMap}
        //whenReady={handleSetMap}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
             {
                data?.map((piquete, index) => {
                    if (piquete.latitud) {
                        return (
                            <LineasMarker key={index} piquete={piquete} reparadas={search.reparadas}/>)
                    }
                })
            } 
            <Polyline pathOptions={{ color: 'purple' }} positions={line} />

        </MapContainer>
    )
}

export default MapaLineas;