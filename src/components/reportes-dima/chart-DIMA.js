import { Line } from 'react-chartjs-2';
import { useRef } from 'react';
import { Box, Grid, Card, IconButton, Divider, Typography, LinearProgress } from '@mui/material';
import 'chartjs-adapter-moment';
import { Chart, registerables } from 'chart.js';
import { useState, useEffect } from 'react';
import { colors_palette } from "../../utils/colors-palette";
import { segmentacionSettings } from "../../utils/segmentacion-settings";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { genericoXLS } from '../../utils/exports/generico-xls';
import { DIMA } from '../../services/reportes-dima';
import CollapseDIMADetailTable from './chart-DIMA/chart-DIMA-detail-table';
Chart.register(...registerables);

export const ChartDIMA = ({ start, end, ...props }) => {
  const [results, setResults] = useState([])

  const settings = segmentacionSettings("mensual")
  const chartRef = useRef();
  const [loading, setLoading] = useState(true)
  const onClick = (event) => {
  }

  useEffect(() => {
    setLoading(true)
    try {
      const getData = async () => {
        const res = await DIMA({ start: start, end: end })
        setResults(res.data)
        setLoading(false)
      }
      getData()
    } catch (error) {
      console.log(error)
    }

  }, [])





  const data = {
    datasets:
      [{
        label: `DIMA`,
        data: results,
        backgroundColor: colors_palette[1],
        borderColor: colors_palette[1],
        fill: false,
        parsing: {
          yAxisKey: 'data'
        },
      },
      /* {
        label: `DIMA Anterior`,
        data: DIMA_historico,
        backgroundColor: colors_palette[2],
        borderColor: colors_palette[2],
        fill: false,
        parsing: {
          xAxisKey: 'date',
          yAxisKey: 'value'
        },
      }, */
      {
        label: `Valor Base ENRE (VB)`,
        data: [{ date: "01/2011", value: 99.943556 }, { date: "12/2015", value: 99.943556 }],
        backgroundColor: colors_palette[3],
        borderColor: colors_palette[3],
        borderWidth: 0.9,
        fill: false,
        pointStyle: 'triangle',
        parsing: {
          xAxisKey: 'date',
          yAxisKey: 'value'
        },
      },
      {
        label: `Valor Máximo ENRE (VM)`,
        data: [{ date: "01/2011", value: 99.977627 }, { date: "12/2015", value: 99.977627 }],
        backgroundColor: colors_palette[4],
        borderColor: colors_palette[4],
        borderWidth: 0.9,
        fill: false,
        pointStyle: 'triangle',
        parsing: {
          xAxisKey: 'date',
          yAxisKey: 'value'
        },
      }]

  };
  const options = {
    animation: true,
    cornerRadius: 20,
    layout: { padding: 0 },
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context) => {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y.toFixed(6);
            }
            return label;
          }
        }
      },
      legend: {
        position: 'top',
        fontSize: 2,
        labels: {
          padding: 5,
          boxWidth: 12,
          boxHeight: 6,
        },

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
        min: start,
        max: end
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
              {`DISPONIBILIDAD MEDIA ANUAL MÓVIL (DIMA)`}
              {loading && <LinearProgress />}

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

      <CollapseDIMADetailTable />
    </Card>
  );
};
