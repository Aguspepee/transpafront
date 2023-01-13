import { Line, getElementAtEvent } from 'react-chartjs-2';
import { useRef } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Grid, Card, IconButton, Divider, Typography, Collapse, LinearProgress } from '@mui/material';
import 'chartjs-adapter-moment';
import { Chart, registerables } from 'chart.js';
import { useState, useEffect } from 'react';
import { colors_palette } from "../../utils/colors-palette";
import { segmentacionSettings } from "../../utils/segmentacion-settings";
import { VOn } from '../../utils/list';
import { FAValue } from '../../services/reportes-dima';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
Chart.register(...registerables);

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const ChartFA = ({ start, end, ...props }) => {
  const [results, setResults] = useState([])
  const [expanded, setExpanded] = useState(false);
  const settings = segmentacionSettings("mensual")
  const chartRef = useRef();
  const [loading, setLoading] = useState(true)
  const onClick = (event) => {
    console.log(getElementAtEvent(chartRef.current, event));
  }

  useEffect(() => {
    setLoading(true)
    try {
      if (expanded) {
        const getData = async () => {
          const res = await FAValue({ start: start, end: end })
          setResults(res.data)
          setLoading(false)
        }
        getData()
      }
    } catch (error) {
      console.log(error)
    }
  }, [expanded])

  const handleExpandClick = () => {
    setExpanded(!expanded);
    setResults([])
  };

  const data = {
    datasets:
      [
        {
          label: `Factor de Afectación (FA)`,
          data: results,
          backgroundColor: colors_palette[6],
          borderColor: colors_palette[6],
          fill: false,
          parsing: {
            yAxisKey: 'data'
          },
        }
      ]
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
        style={{ padding: "1em 1em 1em 1.4em" }}
      >
        <Grid
          container
          spacing={1}
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid item style={{ width: '85%' }}>
            <Typography
              sx={{ m: 1, pt: 0.8 }}
              variant="h6"
              style={{ fontSize: "1em" }}
            >
              {`FACTOR DE AFECTACIÓN (FA)`}
              {loading && expanded && <LinearProgress />}
            </Typography>
          </Grid>
          <Grid item>
            <Box sx={{ m: 1 }}>
              {/* <IconButton
                //color=""
                variant="contained"
                size='small'
                onClick={() => { genericoXLS({ data: data.datasets }) }}
              >
                <FileDownloadIcon fontSize='inerhit' />
              </IconButton> */}
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                size="small"
              >
                <ExpandMoreIcon size="small" />
              </ExpandMore>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
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
      </Collapse>
    </Card>
  );
};
