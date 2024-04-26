import React, { useState, useEffect, } from 'react';
import './HeaderBar.css';
import PropTypes from 'prop-types';
import DetailHeaderBar from './DetailHeaderBar';
export default function HeaderBar({ total, }) {
  const [chuaduyet, setchuaduyet,] = useState(0);
  useEffect(() => {
    getchuaduyet();
    getdaduyet();
    getbaocao();
    gettuchoi();
  }, []);
  const getchuaduyet = async () => {
    fetch(
      `${process.env.REACT_APP_HOST_IP}/statistics/count-product-by-status/?status=Chưa duyệt`,
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
        setchuaduyet(data?.data);
      })
      .catch((error) => console.log(error));
  };
  const [daduyet, setdaduyet,] = useState(0);
  const getdaduyet = async () => {
    fetch(
      `${process.env.REACT_APP_HOST_IP}/statistics/count-product-by-status/?status=Đã duyệt`,
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
        setdaduyet(data?.data);
      })
      .catch((error) => console.log(error));
  };
  const [baocao, setbaocao,] = useState(0);
  const getbaocao = async () => {
    fetch(
      `${process.env.REACT_APP_HOST_IP}/statistics/count-product-by-status/?status=Báo cáo`,
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
        setbaocao(data?.data);
      })
      .catch((error) => console.log(error));
  };
  const [tuchoi, settuchoi,] = useState(0);
  const gettuchoi = async () => {
    fetch(
      `${process.env.REACT_APP_HOST_IP}/statistics/count-product-by-status/?status=Từ chối`,
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
        settuchoi(data?.data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className={'HeaderBar'}>
      <div>
        <DetailHeaderBar
          title={'Tổng số sản phẩm'}
          number={total}
          color={'#6177FB'}
        />
      </div>
      <div>
        <DetailHeaderBar
          number={daduyet}
          title={'Sản phẩm đã duyệt'}
          color={'#46BEB0'}
        />
      </div>
      <div>
        <DetailHeaderBar
          number={chuaduyet}
          title={'Sản phẩm chưa duyệt'}
          color={'#E1E600'}
        />
      </div>
      <div>
        <DetailHeaderBar
          number={baocao}
          title={'Sản phẩm báo cáo'}
          color={'#FA9467'}
        />
      </div>
      <div>
        <DetailHeaderBar
          number={tuchoi}
          title={'Sản phẩm từ chối'}
          color={'#FE2F02'}
        />
      </div>
    </div>
  );
}

HeaderBar.propTypes = {
  total: PropTypes.number,
};
