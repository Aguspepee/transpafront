import { Box, Button, Card, CardContent, CardHeader, Divider, Grid, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { DashboardLayout } from '../layout/layout';
import { MapContainer, TileLayer, LayerGroup, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from "react-leaflet-markercluster";
import 'leaflet/dist/leaflet.css'
import { useEffect, useState } from 'react';
import { lineasNovedadesGet, piquetesGetAll } from '../services/piquetes';
import L from 'leaflet';

const violetIcon = new L.Icon({
  iconUrl:
    'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function Mapa() {
  const [data, setData] = useState([])
  const position = [-43, -65]
  useEffect(() => {
    async function getList() {
      try {
        const res = await lineasNovedadesGet({ zonas: ['ZO1'], lineas: ['FUPM2'] })
        setData(res.data)
        console.log(res.data)

      } catch (error) {
        console.log(error)
      }
    }
    getList()
  }, [])
  return (
    <>
      <DashboardLayout>
        <Box style={{
          position: 'relative'

        }}>
          <Grid
            container
            spacing={3}
            style={{
              position: 'absolute',
              padding: '1em 1em 1em 1em',
              top: 0,
              right: 0,
              zIndex: 1000,
              width: "30%"
            }}
          >
            <Grid
              item
              lg={12}
              md={12}
              xl={12}
              xs={12}
            >
              <Card>
                <CardHeader title="Filtros" />
                <Divider />
                <CardContent>
                  HOLAAAA
                  <Button onClick={() => console.log("hola")}>HoLA</Button>
                </CardContent>

              </Card>
            </Grid>
            <Grid
              item
              lg={12}
              md={12}
              xl={12}
              xs={12}
            >
              <Card>
                <CardHeader title="Novedades" />
                <Divider />
                <CardContent>
                  HOLAAAA
                </CardContent>

              </Card>
            </Grid>
          </Grid>

          <MapContainer center={position} zoom={7} scrollWheelZoom={true} style={{ "height": 'calc(100vh - 65px)', "width": "100%" }}>


            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {
              data.map((piquete, index) => {
                //console.log("LAT"+ piquete["Latitud (Y)"] + "LONG"+ Number(piquete["Longitud (x)"]))
                if (piquete.latitud) {

                  return (
                    <Marker icon={violetIcon} key={index} position={[-Number(piquete.latitud), -Number(piquete.longitud)]}>
                      <Popup>
                        {`Piquete ${piquete.piquete}`}
                        <Table>
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
                              piquete.novedades.map((novedad) => {
                                return (
                                  <TableRow>
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
                    </Marker>)
                }
              })
            }
          </MapContainer>
        </Box>

      </DashboardLayout>
    </>
  )
}

export default Mapa;