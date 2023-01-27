import { LayerGroup, MapContainer, Polyline, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';
import { Tooltip } from 'react-leaflet';
import LineasMarker from './components/lineas-marker';
import { useState } from 'react';
import { colors_palette, colors_severity_minuciosa, colors_severity_terrestre } from '../../utils/colors-palette';
import PolylineLinea from './components/polyline-linea';

function MapaLineas({ data, lineas, handleSetMap, search, handleSearchChange, ...props }) {
    const [position, setPosition] = useState([-46, -60])
    let line = []

    
    //Obtiene el array de lineas
    data?.forEach(piquete => {
        if (!!piquete.latitud) {
            line.push([-Number(piquete?.latitud), -Number(piquete?.longitud)])
        }
    })

    //Obtiene el array de inspecciones
    let prevInsp = null;
    let lastPoint = null;
    const piquetes = data.reduce((acc, obj) => {

        if (prevInsp !== obj.inspecciones) {
            if (obj?.latitud) {
                acc.push({ insp: obj.inspecciones, coordinates: lastPoint ? [lastPoint, [-Number(obj?.latitud), -Number(obj?.longitud)]] : [[-Number(obj?.latitud), -Number(obj?.longitud)]] });
            }
        } else {
            if (obj?.latitud) {
                acc[acc.length - 1].coordinates.push([-Number(obj?.latitud), -Number(obj?.longitud)]);
            }
        }
        lastPoint = [-Number(obj?.latitud), -Number(obj?.longitud)];
        prevInsp = obj.inspecciones;
        return acc;
    }, []);

    return (
        <MapContainer
            center={position}
            zoom={6}
            scrollWheelZoom={true}
            style={{ "height": 'calc(100vh - 65px)', "width": "100%" }}
            ref={handleSetMap}
        //whenReady={handleSetMap}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LayerGroup>
            {
                lineas?.map((linea, index) => {
                    console.log(linea)
                    let coordinates = []
                    //Obtiene el array de lineas
                    linea?.piquetes?.forEach(piquete => {
                        if (!!piquete?.latitud) {
                            coordinates.push([-Number(piquete?.latitud), -Number(piquete?.longitud)])
                        }
                    })
                    return (
                        <PolylineLinea 
                        key={index} 
                        linea={linea} 
                        coordinates={coordinates} 
                        //color={colors_palette[index]} 
                        color="#848484" 
                        search={search} 
                        handleSearchChange={handleSearchChange} />
                    )
                })
            }
            </LayerGroup>
            <LayerGroup>
            {
                data?.map((piquete, index) => {
                    if (piquete.latitud) {
                        return (
                            <LineasMarker key={index} piquete={piquete} reparadas={search.reparadas} />)
                    }
                })
            }
            </LayerGroup>
            {/* <Polyline pathOptions={{ color: 'purple' }} positions={line} /> */}
            <LayerGroup>
            {piquetes?.map((line, index) => {
                let color
                if (search.inspecciones === 'PINT') {
                    color = colors_severity_terrestre[line.insp]
                } else if (search.inspecciones === 'PINM') {
                    color = colors_severity_minuciosa[line.insp]
                } else {
                    color = 'purple'
                }
                return (
                    <Polyline
                        key={index}
                        pathOptions={{ color: color, weight: 6 }}
                        positions={line.coordinates}>
                        <Tooltip sticky opacity={2}>
                            {line.insp === 0 ? 'Tramo sin inspeccionar' : 'Tramo inspeccionado'}
                        </Tooltip>
                    </Polyline>
                )
            })}
            </LayerGroup>



        </MapContainer>
    )
}

export default MapaLineas;