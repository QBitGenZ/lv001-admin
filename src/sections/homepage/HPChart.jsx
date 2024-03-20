import { useState, } from 'react';
import React from 'react';
import Chart from 'react-apexcharts';
export default function HPChart() {
  const [state,] = useState({
    options: {
      chart: {
        id: 'basic-bar',
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998,],
      },
    },
    series: [
      {
        name: 'series-1',
        data: [34, 55, 45, 47, 47, 60, 70, 91,],
      },
      {
        name: 'series-2',
        data: [30, 40, 45, 50, 70, 60, 70, 51,],
      },
    ],
  });
  return (
    <div className={'chart-container'}>
      <Chart
        options={state.options}
        series={state.series}
        className={'myChart'}
        type='area'
        width='500'
      />
    </div>
  );
}
