import { useContext, useEffect, useState } from 'react';
import { DashboardLayout } from '../layout/layout';
import UserContext from '../context/userContext';
import { Box, Container, Grid, Typography } from '@mui/material';
import { ChartDIMA } from '../components/reportes-dima/chart-DIMA';
import { TableDCFConexiones } from '../components/reportes-dima/table-DCF-conexiones';
import { DIMA } from '../services/reportes-dima';
import { dateArray } from '../utils/list';
import { ChartDLF } from '../components/reportes-dima/chart-DLF';
import { ChartDLP } from '../components/reportes-dima/chart-DLP';
import { ChartDTN } from '../components/reportes-dima/chart-DTN';
import { ChartDCF } from '../components/reportes-dima/chart-DCF';

function ReportesDIMA() {
  const [results, setResults] = useState([])
  useEffect(() => {
    const dates = dateArray({ start: new Date(2011, 0, 1), end: new Date(2020, 0, 1) })
    
    const getData = async () => {
      const data = await Promise.all(
        dates.map(async (date) => {
          const res = await DIMA({ month: date.month, year: date.year })
          return { date: `${date.month}/${date.year}`, data: res.data }
        })
      )
      console.log(data)
      setResults(data)

    }
    getData()
  }, [])

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
            <Typography variant="subtitle1" gutterBottom>
              ANEXO I a Resolución ENRE N° 552/2016
            </Typography>
            {/*  <Typography variant="h6" gutterBottom>
             RÉGIMEN DE AFECTACIÓN DE SANCIONES POR CALIDAD OBJETIVO DEL SISTEMA DE TRANSPORTE EN ALTA TENSIÓN Y POR DISTRIBUCIÓN TRONCAL
            </Typography> */}
            <Typography variant="h5" gutterBottom>
              Determinación de Índices de Cálidad
            </Typography>
            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                lg={8}
                md={8}
                xl={8}
                xs={12}
              >
                <ChartDIMA results={results}/>
              </Grid>
              <Grid
                item
                lg={8}
                md={8}
                xl={8}
                xs={12}
              >
                <ChartDLF results={results}/>
              </Grid>
              <Grid
                item
                lg={8}
                md={8}
                xl={8}
                xs={12}
              >
                <ChartDLP results={results}/>
              </Grid>
              <Grid
                item
                lg={8}
                md={8}
                xl={8}
                xs={12}
              >
                <ChartDTN results={results}/>
              </Grid>
              <Grid
                item
                lg={8}
                md={8}
                xl={8}
                xs={12}
              >
                <ChartDCF results={results}/>
              </Grid>
              <Grid
                item
                lg={4}
                md={4}
                xl={4}
                xs={12}
              >
                <TableDCFConexiones results={results}/>
              </Grid>

            </Grid>
          </Container>
        </Box>
      </DashboardLayout>
    </>
  )
}

export default ReportesDIMA;
