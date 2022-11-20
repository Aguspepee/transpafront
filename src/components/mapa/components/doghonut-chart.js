import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Box } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Red', 'Blue'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19],
            backgroundColor: [
                '#43C6B7',
                '#DA6868',
            ],
            borderWidth: 1,
        },
    ],
};

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
            //position: 'top'
        },
        title: {
            display: true,
            text: 'Reparadas vs Abiertas',
        },
    },
};

export default function DoughnutChart() {
    return (

        <Box style={{ height: '180px', paddingRight: '13px' }}>
            <Doughnut data={data} options={options}/>
        </Box>

    );
}
