import React from 'react';
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

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

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
            text: 'Cantidad Mensual',
        },
    },
};

const labels = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul','Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [10, 0, 23, 54, 45, 75, 34,10, 0, 23, 54, 45],
            backgroundColor: '#43C6B7',
        },
    ],
};

export default function VerticalBarChart() {

    return (
        <>
            <Box style={{ height: '180px', paddingRight:'13px' }}>
                <Bar options={options} data={data} />
            </Box>
        </>
    )
}
