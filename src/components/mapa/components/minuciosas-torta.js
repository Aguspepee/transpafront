import { Doughnut } from 'react-chartjs-2';
import { Box, Typography } from '@mui/material';
import 'chartjs-adapter-moment';
import { Chart, registerables } from 'chart.js';
import { useState, useEffect } from 'react';
import { colors_severity_minuciosa } from "../../../utils/colors-palette";
import { cantidadInspecciones } from '../../../services/piquetes';
Chart.register(...registerables);


export const MinuciosasTorta = ({ search, ...props }) => {
  const [results, setResults] = useState([])
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const getData = async () => {
      const res = await cantidadInspecciones({ search, inspecciones: 'PINM' })
      setResults(res.data)
    }
    getData()
  }, [search])

  const data = {
    datasets: [
      {
        data: [...results.map((result) => result.cantidad),
        results[0] ? undefined : 50
        ],
        backgroundColor: [...results.map((result) => colors_severity_minuciosa[result._id]),
        results[0] ? undefined : '#f1f1f1'
        ],
        //borderColor: results.map((dato, index) => colors_palette[index]),
        //fill: true
      }
    ],
    labels: [...results.map((result) => result._id)
    ]

  }
  const total = data.datasets[0].data.reduce((accumulator, currentValue) => accumulator + (currentValue === undefined ? 0 : currentValue), 0)
  const inspeccionado = results.reduce((acc, cur) => acc + (cur.cantidad === undefined || cur._id === 0? 0 : cur.cantidad), 0)

  const options = {
    animation: true,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          footer: (ttItem) => {
            let sum = 0;
            let dataArr = ttItem[0].dataset.data;
            dataArr.map(data => {
              sum += Number(data ? data : 0);
            });
            let percentage = (ttItem[0].parsed * 100 / sum).toFixed(2) + '%';
            return `${percentage}`;
          }
        }
      },
      legend: {
        position: 'top',
        labels: {
          padding: 5,
          boxWidth: 12,
          boxHeight: 6,
        }
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <Box
      sx={{
        height: 150,
        width: "50%",
        padding: '0em 1.5em 0em 1.5em'
      }}
    >
      <Doughnut
        data={data}
        options={options}
      />
      <Typography variant="h4" sx={{ textAlign: 'center', padding: '0em 0em 0em 0em', color: "gray"}}>
        {`${Math.round(inspeccionado * 100 / total)}%`}
      </Typography>
      <Typography variant='h4' sx={{ textAlign: 'center', padding: '0em 0em 0em 0em', fontSize:"0.5em", color: "gray" }}>
        {`INSPECCIONADO`}
      </Typography>
    </Box>

  );
};
