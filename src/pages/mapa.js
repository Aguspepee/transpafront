import { Box, Button, Card, Grid } from '@mui/material';
import { DashboardLayout } from '../layout/layout';
import 'leaflet/dist/leaflet.css'
import { useEffect, useState } from 'react';
import { lineasNovedadesGet } from '../services/piquetes';
import MapaLineas from '../components/mapa/mapa-lineas';
import FilterCard from '../components/mapa/filter-card';
import NovedadesCard from '../components/mapa/novedades-card';
import DataCard from '../components/mapa/data-card';
import { useMapEvents, Marker, Popup, useMap } from 'react-leaflet';
import AnalisisCard from '../components/mapa/analisis-card';
import Draggable from 'react-draggable';

function Mapa() {
  const [data, setData] = useState([])
  const [search, setSearch] = useState({ reparadas: false, historico: false })
  const [map, setMap] = useState(null);

  const handleSetMap = (value) => {
    setMap(value)
  }

  const flyToPosition = (position) => {
    map.flyTo(position, 16)
  }

  const panToPosition = (box) => {
    if (box.toString() !== [[0, -90], [-90, 0]].toString()) {
      map?.fitBounds(box)
    }
  }

  const handleSearchChange = (value) => {
    setSearch(value)
  }

  useEffect(() => {
    async function getList() {
      try {
        const res = await lineasNovedadesGet({ search })

        //Obtiene maxima y minima latitud y longitud:
        const top = -res.data.reduce((a, b) => Math.max(a, +b.latitud), 0) || 0
        const bottom = -res.data.reduce((a, b) => Math.min(a, +b.latitud), 90) || 0
        const left = -res.data.reduce((a, b) => Math.min(a, +b.longitud), 90) + 0.5 || 0
        const right = -res.data.reduce((a, b) => Math.max(a, +b.longitud), 0) || 0

        //Si no tiene ubicación, panea el mapa a una vista general. Sino, lo panea a la línea
        top === 0 ? panToPosition([[-42, -61], [-44, -75]]) : panToPosition([[top, left], [bottom, right]])
        setData(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getList()
  }, [search.lineas, search.codigos])

  return (
    <>
      <DashboardLayout>
        <Box style={{
          position: 'relative'
        }}>
         
          <Grid
            container
            spacing={1}
            style={{
              position: 'absolute',
              padding: '1em 1em 1em 1em',
              top: 0,
              left: 40,
              zIndex: 1000,
              width: "69%"
            }}
          >
            <Grid
              item
              lg={12}
              md={12}
              xl={12}
              xs={12}
            >
              <DataCard search={search} handleSearchChange={handleSearchChange} data={data} />
            </Grid>
            {/*             <Grid
              item
              lg={5}
              md={5}
              xl={5}
              xs={12}
            >
              <FilterCard search={search} handleSearchChange={handleSearchChange} />
            </Grid> */}
          </Grid>
          <Grid
            container
            spacing={1}
            style={{
              position: 'absolute',
              padding: '1em 1em 1em 1em',
              top: 0,
              right: 15,
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
              <AnalisisCard search={search} handleSearchChange={handleSearchChange} />
            </Grid>
          </Grid>
          
          <MapaLineas data={data} handleSetMap={handleSetMap} />
          <Grid
            container
            spacing={3}
            style={{
              position: 'absolute',
              padding: '1em 1em 1em 1em',
              bottom: 0,
              left: 10,
              zIndex: 1000,
              width: "100%"
            }}
          >
            <Grid
              item
              lg={12}
              md={12}
              xl={12}
              xs={12}
            >
              <NovedadesCard search={search} handleSearchChange={handleSearchChange} flyToPosition={flyToPosition} />
            </Grid>
          </Grid>
          
        </Box>
      </DashboardLayout>
    </>
  )
}

export default Mapa;