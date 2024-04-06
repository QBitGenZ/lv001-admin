// import React from 'react';
import React, { useEffect, useState, } from 'react';
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
        setBuyer(data);
      })
      .catch((error) => console.log(error));
  }, []);
  const [sellers, setSeller,] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_HOST_IP}/user?is_seller=true`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setSeller(data);
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
        setCharity(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div id={'HomePageSection'}>
      <div className={'container'}>
        <SmallContainerHP
          title={'Tổng số người bán'}
          newnumber={sellers.length}
          unit={'Người'}
        />
        <SmallContainerHP
          title={'Tổng số người mua'}
          newnumber={buyers.length}
          unit={'Người'}
        />
        <SmallContainerHP
          title={'Tổng số đơn vị từ thiện'}
          newnumber={charities.length}
          unit={'Đơn vị'}
        />
      </div>
      <div className={'chart-container'}>
        <h2>Doanh Thu Theo Tháng</h2>
        <HPChart className={'chart'} />
      </div>
    </div>
  );
}
