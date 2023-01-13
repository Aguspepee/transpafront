import { useState } from 'react';
import { DashboardLayout } from '../layout/layout';
import { Box, Container, Grid, Typography } from '@mui/material';
import { ChartDIMA } from '../components/reportes-dima/chart-DIMA';
import { ChartDLF } from '../components/reportes-dima/chart-DLF';
import { ChartDLP } from '../components/reportes-dima/chart-DLP';
import { ChartDTN } from '../components/reportes-dima/chart-DTN';
import { ChartDCF } from '../components/reportes-dima/chart-DCF';
import { dateArray } from '../utils/list';
import { ChartVPM } from '../components/reportes-dima/chart-VPM';
import { ChartFA } from '../components/reportes-dima/chart-FA';


function ReportesDIMA() {
  //const [results, setResults] = useState([])
  const [start, setStart] = useState(new Date(2011, 0, 1))
  //const [end, setEnd] = useState(new Date(2022, 10, 1))
  const [end, setEnd] = useState(new Date())

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
            <Typography variant="h5" gutterBottom>
              Índices de Cálidad según Resolución ENRE N° 552/2016
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
                <ChartDLP start={start} end={end} />
              </Grid>
              <Grid
                item
                lg={12}
                md={12}
                xl={12}
                xs={12}
              >
                <ChartDTN start={start} end={end} />
              </Grid>
              <Grid
                item
                lg={12}
                md={12}
                xl={12}
                xs={12}
              >
                <ChartDCF start={start} end={end} />
              </Grid>
            </Grid>
            <Typography variant="h5" gutterBottom style={{padding:"1em 1em 0em 0em"}}>
              Afectación de las sanciones por no alcanzar la calidad objetivo
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
                <ChartVPM start={start} end={end} />
              </Grid>
              <Grid
                item
                lg={12}
                md={12}
                xl={12}
                xs={12}
              >
                <ChartFA start={start} end={end} />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </DashboardLayout>
    </>
  )
}

export default ReportesDIMA;
