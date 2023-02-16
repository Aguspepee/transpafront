import { Polyline, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { useState } from 'react';


function PolylineLinea({ linea, coordinates, color, search, handleSearchChange, ...props }) {

    const [polylineWidth, setPolylineWidth] = useState(2);

    function handleMouseOver(e) {
        e.target.setStyle({
            weight: 5
        });
        setPolylineWidth(5)
        e.target.openPopup()
    }

    function handleMouseOut(e) {
        e.target.setStyle({
            weight: 1
        });
        setPolylineWidth(2)
        e.target.closePopup()
    }

    const handleClick = (e) => {
        handleSearchChange({ ...search, lineas: linea.linea, zonas: linea.zona })
    };

    

    return (
        <Polyline
            noClip={true}
            key={linea.linea}
            pathOptions={{ color: color, weight: polylineWidth }}
            positions={coordinates}
            eventHandlers={{
                click: handleClick,
                mouseover: handleMouseOver,
                mouseout: handleMouseOut
            }}
        >
           {/*  <Popup
                sticky
                opacity={2}
                
                //position={[-45,-35]}
            >
                
                {linea.linea}
            </Popup> */}
        </Polyline>
    )
}

export default PolylineLinea;