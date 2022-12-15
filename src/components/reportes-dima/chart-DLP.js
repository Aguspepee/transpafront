import { Line } from 'react-chartjs-2';
import { Box, Grid, Card, IconButton, Divider, Typography } from '@mui/material';
import { Chart, registerables } from 'chart.js';
import { useState, useEffect } from 'react';
import { colors_palette } from "../../utils/colors-palette";
import { segmentacionSettings } from "../../utils/segmentacion-settings";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { genericoXLS } from '../../utils/exports/generico-xls'
import { DLPValue } from '../../services/reportes-dima';
import { dateArray } from '../../utils/list';

//Chart.register(...registerables);

export const ChartDLP = ({start, end, ...props  }) => {
  const [results, setResults] = useState([])
  const settings = segmentacionSettings("mensual")

  useEffect(() => {
    const getData = async () => {
      const res = await DLPValue({ start: start, end: end })
      setResults(res.data)
    }
    getData()
  }, [])


  const data = {
    datasets:
      [{
        label: `DLP`,
        data: results,
        backgroundColor: colors_palette[5],
        borderColor: colors_palette[5],
        fill: false,
        parsing: {
          yAxisKey: 'data'
        },
      }]
  };

  const options = {
    animation: true,
    cornerRadius: 20,
    layout: { padding: 0 },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        fontSize: 2,
        labels: {
          padding: 5,
          boxWidth: 12,
          boxHeight: 6,
        }
      },
    },
    parsing: {
      xAxisKey: 'date',
    },
    scales: {
      x: {
        type: 'time',
        time: {
          parser: settings.parser,
          unit: settings.unit,
          format: settings.timeFormat,
          tooltipFormat: settings.tooltipFormat,
          displayFormats: settings.displayFormats
        },
      },
    },
  };

  return (
    <Card>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          //justifyContent: 'space-between',
          flexWrap: 'wrap',
          m: -1
        }}
        style={{ padding: "1em 1em 0.3em 1.4em" }}
      >
        <Grid
          container
          spacing={1}
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid item style={{ width: '85%' }}>
            <Typography
              sx={{ m: 1 }}
              variant="h6"
              style={{ fontSize: "1em" }}
            >
              {`DISPONIBILIDAD MEDIA ANUAL MOVIL DE SALIDAS DE LÍNEAS PROGRAMADAS (DLP)`}
            </Typography>
          </Grid>
          <Grid item>
            <Box sx={{ m: 1 }}>
              <IconButton
                //color=""
                variant="contained"
                size='small'
                onClick={() => { genericoXLS({ data: data.datasets }) }}
              >
                <FileDownloadIcon fontSize='inerhit' />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Divider />
      <Box
        sx={{
          height: 450,
          position: 'relative',
          padding: '0.5em 1em 1em 1em'
        }}
      >
        <Line
          data={data}
          options={options}

        />
      </Box>
    </Card>
  );
};
