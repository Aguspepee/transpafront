import React, { useEffect, useRef, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, getElementAtEvent } from 'react-chartjs-2';
import { Box } from '@mui/system';
import { novedadesCantidades } from '../../../services/novedades';
import { codigos_lineas } from '../../../utils/codigos-lineas';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


export default function VerticalBarChart({ search, seleccionarTorresMapa, ...props }) {
  const [list, setList] = useState([])
  const chartRef = useRef();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await novedadesCantidades({ search })
        setList(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [search])

  const onClick = (event) => {
    const index = getElementAtEvent(chartRef.current, event)[0]?.element?.$context?.element?.$context?.raw;
    seleccionarTorresMapa(index?.novedad)
  }

  const data = {
    datasets: [
      {
        label: "Reparadas",
        data: list?.map((d) => { return ({ novedad: d._id, value: d.reparadas }) }),
        backgroundColor: '#43C6B7',
      },
      {
        label: "Abiertas",
        data: list?.map((d) => { return ({ novedad: d._id, value: d.abiertas }) }),
        backgroundColor: '#D6324A',
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
          afterTitle: (context) => {
            const body = codigos_lineas.filter((codigo_linea)=>codigo_linea?.codigo===context[0]?.label)
            return body[0]?.categoria;
          },
          beforeBody: (context) => {
            const body = codigos_lineas.filter((codigo_linea)=>codigo_linea?.codigo===context[0]?.label)
            return body[0]?.descripcion;
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
    responsive: true,
    parsing: {
      xAxisKey: 'novedad',
      yAxisKey: 'value'
    },
    scales: {
      x: {

        start: 0,
        stacked: true,

      },
      y: {
        min: 0,
        stacked: true,
      },
    },
  };

  return (
    <>
      <Box style={{ height: '180px', paddingRight: '13px' }}>
        <Bar
          ref={chartRef}
          options={options}
          data={data}
          onClick={onClick} />
      </Box>
    </>
  )
}
