import { Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend, } from 'chart.js';
import React from 'react';
import { Line, } from 'react-chartjs-2';
export default function HPChart() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const data = {
    labels: ['Jan', 'Mar', 'May', 'July', 'Oct',],
    datasets: [
      {
        label: 'Iphone sales',
        data: [400, 1000, 4000, 800, 1500,],
        fill: true,
        backgroundColor: '#006AFF',
        pointBorderColor: 'black',
        color: 'pink',
        pointBorderWidth: 5,
        pointRadius: 8,
        tension: 0.4,
      },
      {
        label: 'Iphone sales',
        data: [500, 1000, 5000, 800, 2500,],
        fill: true,
        backgroundColor: '#006AFF',
        pointBorderColor: 'black',
        pointBorderWidth: 5,
        pointRadius: 8,
        tension: 0.4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    layout: {
      padding: {
        bottom: 100,
      },
    },
    scales: {
      y: {
        ticks: {
          color: 'black',
          font: {
            size: 18,
          },
        },
        grid: {
          color: '#243240',
        },
      },
      x: {
        ticks: {
          color: 'black',
          font: {
            size: 18,
          },
        },
      },
    },
  };
  return (
    <div className={'container'}>
      <Line className={'chart-container'} data={data} options={options} />
    </div>
  );
}
