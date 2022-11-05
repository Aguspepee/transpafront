import { useContext, useEffect, useState } from 'react';
import { DashboardLayout } from '../layout/layout';
import UserContext from '../context/userContext';
import { Box, Container, Grid } from '@mui/material';
import { InformesInspector } from '../components/dashboard/informes-inspector';
import FilterBar from '../components/dashboard/filter-bar';
import { EnsayosUnidadBarras } from '../components/dashboard/ensayos-unidad-barras';
import { EnsayosUnidadAcumulado } from '../components/dashboard/ensayos-unidad-acumulado';
import { SituacionInformesRemitados } from '../components/dashboard/situacion-informes-remitados';
import { Gaps } from '../components/dashboard/gaps';
import { ValorPartesCertificados } from '../components/dashboard/valor-partes-certificados';



function Dashboard() {
  const [user, setUser] = useContext(UserContext);
  const d = new Date(2022,7,4)
  //Cuando este la carga masiva, queda un anio de rango a partir de la fecha de hoy
/*   const d = new Date();
  d.setFullYear(d.getFullYear() - 1)
  d.setMonth(d.getMonth() + 1)
  d.setDate(1) */
  const [filters, setFilter] = useState({ contratos: [], operadores: [], fecha_inicio: d, fecha_fin: Date(), segmentacion: "diario", area:[], clientes: [] })

  const handleFiltersChange = (value) => {
    setFilter({
      ...filters,
      ...value
    })
  }


  //console.log(filters)
  return (
    <>
      <DashboardLayout>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 2
          }}
        >
          <Container maxWidth={false}>
            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                lg={12}
                md={12}
                xl={12}
                xs={12}
              >
                <FilterBar handleFiltersChange={handleFiltersChange} filters={filters} />
              </Grid>
              <Grid
                item
                lg={6}
                md={6}
                xl={6}
                xs={12}
              >
                <EnsayosUnidadBarras filters={filters} />
              </Grid>
              <Grid
                item
                lg={6}
                md={6}
                xl={6}
                xs={12}
              >
                <EnsayosUnidadAcumulado filters={filters} />
              </Grid>
              <Grid
                item
                lg={6}
                md={6}
                xl={6}
                xs={12}
              >
                <Gaps filters={filters} />
              </Grid>
              <Grid
                item
                lg={6}
                md={6}
                xl={6}
                xs={12}
              >
                <SituacionInformesRemitados filters={filters} />
              </Grid>
              <Grid
                item
                lg={12}
                md={12}
                xl={12}
                xs={12}
              >
                <ValorPartesCertificados filters={filters} />
              </Grid>
              <Grid
                item
                lg={12}
                md={12}
                xl={12}
                xs={12}
              >
                <InformesInspector filters={filters} />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </DashboardLayout>
    </>
  )
}

export default Dashboard;
