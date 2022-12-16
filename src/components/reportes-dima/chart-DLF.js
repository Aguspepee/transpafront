import { Line, getElementAtEvent } from 'react-chartjs-2';
import { useRef } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Grid, Card, IconButton, Divider, Typography, Stack, Collapse, Tooltip } from '@mui/material';
import 'chartjs-adapter-moment';
import { Chart, registerables } from 'chart.js';
import { useState, useEffect } from 'react';
import { colors_palette } from "../../utils/colors-palette";
import { segmentacionSettings } from "../../utils/segmentacion-settings";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { genericoXLS } from '../../utils/exports/generico-xls'
import { DLFValue } from '../../services/reportes-dima';
import CollapseDLFDetailTable from './chart-DLF/chart-DLF-detail-table';
import HelpIcon from '@mui/icons-material/Help';
Chart.register(...registerables);


export const ChartDLF = ({ start, end, ...props }) => {
  const [results, setResults] = useState([])
  const settings = segmentacionSettings("mensual")
  const chartRef = useRef();
  const [selectedDate, setSelectedDate] = useState({ year: 2022, month: 12 })

  const onClick = (event) => {
    const index = getElementAtEvent(chartRef.current, event)[0]?.index;
    const date = results[index]?.date
    setSelectedDate({ year: date?.split("/")[1], month: date?.split("/")[0] })

  }
  useEffect(() => {
    const getData = async () => {
      const res = await DLFValue({ start: start, end: end })
      setResults(res.data)
    }
    getData()
  }, [])

  const data = {
    datasets:
      [{
        label: `DLF`,
        data: results,
        backgroundColor: colors_palette[1],
        borderColor: colors_palette[1],
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
              {`DISPONIBILIDAD MEDIA ANUAL MÓVIL DE SALIDAS DE LÍNEAS FORZADAS (DLF)`}
              <Tooltip title={
                `La disponibilidad media anual móvil de salidas de líneas forzadas (DLF) para un mes "i" se 
                calcula como uno menos el cociente entre la sumatoria del producto entre las horas forzadas 
                indisponibles de la línea “j” en el año móvil por la longitud de la línea “j” (l jif ) y la sumatoria 
                de las horas de cada mes del año móvil (H j) por la longitud total de las líneas en cada mes 
                (L j).`}
>
                <IconButton
                  variant="contained"
                  size='small'
                >
                  <HelpIcon fontSize='inerhit' />
                </IconButton>
              </Tooltip>
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
      <CollapseDLFDetailTable date={selectedDate} />
    </Card>
  );
};
