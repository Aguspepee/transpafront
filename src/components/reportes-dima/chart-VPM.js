import { Line, getElementAtEvent } from 'react-chartjs-2';
import { useRef } from 'react';
import { Box, Grid, Card, IconButton, Divider, Typography } from '@mui/material';
import 'chartjs-adapter-moment';
import { Chart, registerables } from 'chart.js';
import { useState, useEffect } from 'react';
import { colors_palette } from "../../utils/colors-palette";
import { segmentacionSettings } from "../../utils/segmentacion-settings";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { genericoXLS } from '../../utils/exports/generico-xls';
import { VOn } from '../../utils/list';

Chart.register(...registerables);


export const ChartVPM = ({ start, end, ...props }) => {
  const [results, setResults] = useState([])
  const settings = segmentacionSettings("mensual")
  const chartRef = useRef();
  const onClick = (event) => {
    console.log(getElementAtEvent(chartRef.current, event));
  }

   useEffect(() => {
    const getData = async () => {
      //const res = await DIMA({ start: start, end: end })
      //setResults(res.data)
    }
    getData()
  }, [])

  const data = {
    datasets:
      [
/*         {
        label: `DIMA`,
        data: results,
        backgroundColor: colors_palette[1],
        borderColor: colors_palette[1],
        fill: false,
        parsing: {
          yAxisKey: 'data'
        },
      }, */
      {
        label: `VOn`,
        data: VOn,
        borderWidth: 0.9,
        backgroundColor: colors_palette[2],
        borderColor: colors_palette[2],
        fill: false,
        pointStyle: 'triangle',
        parsing: {
          xAxisKey: 'date',
          yAxisKey: 'value'
        },
      },
      {
        label: `VB ENRE`,
        data: [{date:"01/2011", value:99.943556},{date:"12/2015", value:99.943556}],
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
        label: `VM ENRE`,
        data: [{date:"01/2011", value:99.977627},{date:"12/2015", value:99.977627}],
        backgroundColor: colors_palette[4],
        borderColor: colors_palette[4],
        borderWidth: 0.9,
        fill: false,
        pointStyle: 'triangle',
        parsing: {
          xAxisKey: 'date',
          yAxisKey: 'value'
        },
      },
    ]

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
          boxHeight: 4,
          usePointStyle: true,

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
              {`VALOR PROMEDIO MÓVILO (VPM)`}
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
