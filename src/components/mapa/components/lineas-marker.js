import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';

const violetIcon = new L.Icon({
    iconUrl:
        'https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-violet.png',
    shadowUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

const greyIcon = new L.Icon({
    iconUrl:
        'https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-grey.png',
    shadowUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

function LineasMarker({ piquete }) {
    const position = [-43, -65]
    return (

        <Marker icon={piquete?.novedades?.some(e => e.codigo_valorac.includes('LC05')) ? violetIcon : greyIcon} position={[-Number(piquete.latitud), -Number(piquete.longitud)]}>
            <Popup >
                {`Piquete ${piquete.piquete}`}
                {`${piquete.denominacion}`}
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                TIPO
                            </TableCell>
                            <TableCell>
                                FECHA
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {
                            piquete?.novedades?.map((novedad, index) => {
                                return (
                                    <TableRow key={index}>
                                        <TableCell>
                                            {novedad.codif_txt_cod}
                                        </TableCell>
                                        <TableCell>
                                            {novedad.fecha}
                                        </TableCell>
                                    </TableRow>
                                )

                            })
                        }

                    </TableBody>
                </Table>
            </Popup>
        </Marker>

    )
}

export default LineasMarker;