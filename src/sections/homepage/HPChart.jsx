import { Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend, } from 'chart.js';
import React, { useState, useEffect, } from 'react';
import { Line, } from 'react-chartjs-2';
export default function HPChart() {
  const [chartdata, setChartData,] = useState([]);
  const [fromdate, setFromDate,] = useState('');
  const [todate, setToDate,] = useState('');
  useEffect(() => {
    loadStatis();
  }, []);
  const loadStatis = () => {
    console.log(fromdate);
    console.log(todate);
    fetch(
      `${process.env.REACT_APP_HOST_IP}/statistics/orders/?from_date=${fromdate}&to_date=${todate}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access')}`,
          Accept: 'application/json',
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setChartData(data.data);
      })
      .catch((error) => console.log(error));
  };
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
    labels: Object.keys(chartdata),
    datasets: [
      {
        label: 'Doanh thu',
        data: Object.values(chartdata),
        fill: true,
        backgroundColor: '#006AFF',
        pointBorderColor: 'black',
        color: 'pink',
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
    <>
      <div className={'container'}>
        <Line className={'chart-container'} data={data} options={options} />
        <div>
          <input
            className='datefrom'
            name='fromdate'
            type='date'
            onChange={(e) => {
              setFromDate(e.target.value);
              loadStatis();
            }}
          />
          <p className='datetodate'>TO</p>
          <input
            className='dateto'
            name='todate'
            type='date'
            onChange={(e) => {
              setToDate(e.target.value);
              loadStatis();
            }}
          />
        </div>
      </div>
    </>
  );
}
