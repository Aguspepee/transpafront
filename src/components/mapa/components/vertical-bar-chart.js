import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Box } from '@mui/system';
import { novedadesCantidades } from '../../../services/novedades';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


export default function VerticalBarChart({ search, ...props }) {
    const [list, setList] = useState([])
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
    console.log(list)
    const data = {
        datasets: [
            {
                label: "Reparadas",
                data: list?.map((d) => {return({ novedad: d._id, value: d.reparadas })}),
                backgroundColor: '#43C6B7',
            },
            {
                label: "Abiertas",
                data: list?.map((d) => {return({ novedad: d._id, value: d.abiertas })}),
                backgroundColor: '#D6324A',
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
            
            start:0,
            stacked: true,
    
          },
          y: {
            min: 0,
            stacked: true,
          },
        },
      };

    console.log(data)
    return (
        <>
            <Box style={{ height: '180px', paddingRight: '13px' }}>
                <Bar options={options} data={data} />
            </Box>
        </>
    )
}
