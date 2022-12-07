import { Line, getElementAtEvent } from 'react-chartjs-2';
import { useRef } from 'react';
import { Box, Grid, Card, IconButton, Divider, Typography } from '@mui/material';
import 'chartjs-adapter-moment';
import { Chart, registerables } from 'chart.js';
import { useState, useEffect } from 'react';
import { colors_palette } from "../../utils/colors-palette";
import { segmentacionSettings } from "../../utils/segmentacion-settings";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { genericoXLS } from '../../utils/exports/generico-xls'

Chart.register(...registerables);

export const ChartDLP = ({ results, ...props }) => {

  const settings = segmentacionSettings("mensual")
  const chartRef = useRef();
  const onClick = (event) => {
    console.log(getElementAtEvent(chartRef.current, event));
  }

  const data = {
    datasets:
      [
      {
        label: `DLP`,
        data: results,
        backgroundColor: colors_palette[3],
        borderColor: colors_palette[3],
        fill: false,
        parsing: {
          yAxisKey: 'data.DLP'
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
    <Card {...props}>
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
          ref={chartRef}
          data={data}
          options={options}
          onClick={onClick}
        />
      </Box>
    </Card>
  );
};
