// import React from 'react';
import React, { useState, useEffect, } from 'react';
import SmallContainerHP from './SmallContainerHP';
import HPChart from './HPChart';
export default function HomePageSection() {
  // const month = new Date().getMonth() + 1;
  const [buyers, setBuyer,] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_HOST_IP}/user`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setBuyer(data?.meta?.total);
      })
      .catch((error) => console.log(error));
  }, []);
  const [fund, setFund,] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_HOST_IP}/statistics/total-fund/`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setFund(data?.data);
      })
      .catch((error) => console.log(error));
  }, []);
  const [charities, setCharity,] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_HOST_IP}/user?is_philanthropist=true`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCharity(data?.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div id={'HomePageSection'}>
      <div className={'container'}>
        <SmallContainerHP
          title={'Tổng số người dùng'}
          newnumber={buyers}
          unit={'Người'}
        />
        <SmallContainerHP
          title={'Tổng số đơn vị từ thiện'}
          newnumber={charities?.length}
          unit={'Đơn vị'}
        />
        <SmallContainerHP
          title={'Quỹ từ thiện'}
          newnumber={fund}
          unit={'VNĐ'}
        />
      </div>
      <div className={'chart-container'}>
        <h2
          style={{
            margin: 0,
          }}
        >
          Doanh Thu Theo Tháng
        </h2>
        <HPChart className={'chart'} />
      </div>
    </div>
  );
}
