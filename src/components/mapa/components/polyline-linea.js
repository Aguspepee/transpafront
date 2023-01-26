import { Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { Tooltip } from 'react-leaflet';
import { useState } from 'react';


function PolylineLinea({ linea, coordinates, color, search, handleSearchChange, ...props }) {

    const [polylineWidth, setPolylineWidth] = useState(2);



    function handleMouseOver(e) {
        e.target.setStyle({
            weight: 5
        });
        setPolylineWidth(5)
    }

    function handleMouseOut(e) {
        e.target.setStyle({
            weight: 1
        });
        setPolylineWidth(2)
    }

    const handleClick = (e) => {
        handleSearchChange({ ...search, lineas: e.target?._tooltip?.options?.children[0], zonas: e.target?._tooltip?.options?.children[1] })
    };


    return (
        <Polyline
            noClip={true}
            key={linea.linea}
            pathOptions={{ color: color, weight: polylineWidth }}
            positions={coordinates}
            /* onMouseOver={()=>handleMouseOver}
            onMouseOut={handleMouseOut} */
            eventHandlers={{
                click: handleClick,
                mouseover: handleMouseOver,
                mouseout: handleMouseOut
            }}
        >
            <Tooltip sticky opacity={2}>
                {linea.linea}
            </Tooltip>
        </Polyline>
    )
}

export default PolylineLinea;