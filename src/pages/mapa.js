import { Box,  Grid } from '@mui/material';
import { DashboardLayout } from '../layout/layout';
import 'leaflet/dist/leaflet.css'
import { useEffect, useState, useMemo } from 'react';
import { lineasNovedadesGet } from '../services/piquetes';
import MapaLineas from '../components/mapa/mapa-lineas';
import NovedadesCard from '../components/mapa/novedades-card';
import DataCard from '../components/mapa/data-card';
import AnalisisCard from '../components/mapa/analisis-card';
import Draggable from 'react-draggable'; // The default

//Debounce para la busqueda
import { BehaviorSubject } from 'rxjs';
import { debounceTime, switchMap } from "rxjs/operators";


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
      map?.fitBounds(box, { duration: 2, animate:true } )
      

    }
  }

  const handleSearchChange = (value) => {
    setSearch(value)
  }

  //Debounce para la busqueda
  const searchParams$ = useMemo(() => new BehaviorSubject([]), []);

  useEffect(() => {
    searchParams$.next({ search: search });
  }, [search]);

  useEffect(() => {
    async function getList() {
      try {
        const res = await lineasNovedadesGet( {search: searchParams$.value.search} )
        setData(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    const res = searchParams$
      .pipe(debounceTime(500), switchMap(getList))
      .subscribe();
    return () => res.unsubscribe();

  }, [search.lineas, search.codigos])

  useEffect(() => {

        //Obtiene maxima y minima latitud y longitud:
        const top = -data.reduce((a, b) => Math.max(a, +b.latitud), 0) || 0
        const bottom = -data.reduce((a, b) => Math.min(a, +b.latitud), 90) || 0
        const left = -data.reduce((a, b) => Math.min(a, +b.longitud), 90) + 0.5 || 0
        const right = -data.reduce((a, b) => Math.max(a, +b.longitud), 0) || 0

        //Si no tiene ubicación, panea el mapa a una vista general. Sino, lo panea a la línea
        top === 0 ? panToPosition([[-42, -61], [-44, -75]]) : panToPosition([[top, left], [bottom, right]])
       
  }, [search.lineas, data[0]?.linea])

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
          
          <MapaLineas search={search} data={data} handleSetMap={handleSetMap} />
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