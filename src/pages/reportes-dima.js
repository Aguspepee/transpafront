import { useState } from 'react';
import { DashboardLayout } from '../layout/layout';
import { Box, Container, Grid, Typography } from '@mui/material';
import { ChartDIMA } from '../components/reportes-dima/chart-DIMA';
import { ChartDLF } from '../components/reportes-dima/chart-DLF';
import { ChartDLP } from '../components/reportes-dima/chart-DLP';
import { ChartDTN } from '../components/reportes-dima/chart-DTN';
import { ChartDCF } from '../components/reportes-dima/chart-DCF';
import { dateArray } from '../utils/list';


function ReportesDIMA() {
  //const [results, setResults] = useState([])
  const [start, setStart] = useState(new Date(2011, 0, 1))
  const [end, setEnd] = useState(new Date(2022, 11, 1))

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
            <Typography variant="h5" gutterBottom>
              Determinación de Índices de Cálidad
            </Typography>
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
                <ChartDIMA start={start} end={end} />
              </Grid>
              <Grid
                item
                lg={12}
                md={12}
                xl={12}
                xs={12}
              >
                <ChartDLF start={start} end={end} />
              </Grid>
               <Grid
                item
                lg={12}
                md={12}
                xl={12}
                xs={12}
              >
                <ChartDLP start={start} end={end}  />
              </Grid> 
              <Grid
                item
                lg={12}
                md={12}
                xl={12}
                xs={12}
              >
                <ChartDTN start={start} end={end}  />
              </Grid> 
             <Grid
                item
                lg={12}
                md={12}
                xl={12}
                xs={12}
              >
                <ChartDCF start={start} end={end}  />
              </Grid> 
            </Grid>
          </Container>
        </Box>
      </DashboardLayout>
    </>
  )
}

export default ReportesDIMA;
