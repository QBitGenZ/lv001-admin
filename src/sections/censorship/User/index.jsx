import React, { useEffect, useState, } from 'react';
import HeaderBar from './components/HeaderBar/HeaderBar';
import './UserSection.css';
import UserTable from './components/HeaderBar/Table/UserTable';
export default function UserCencorSection() {
  const [charities, setCharity,] = useState([]);
  const [currentPage, setCurrentPage,] = useState(1);
  const [totalPage, setTotalPage,] = useState(0);
  useEffect(() => {
    getUser();
    getdaduyet();
    getbaocao();
    getchuaduyet();
    gettuchoi();
  }, [ currentPage,]);

  const getUser = async () => {
    fetch(`${process.env.REACT_APP_HOST_IP}/user?is_philanthropist=true&&page=${currentPage}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCharity(data?.data);
        setTotalPage(data?.meta?.total_pages);
      })
      .catch((error) => console.log(error));
  };
  const [chuaduyet, setchuaduyet,] = useState(0);
  const getchuaduyet = async () => {
    fetch(
      `${process.env.REACT_APP_HOST_IP}/statistics/count-event-by-status/?status=Chưa xác minh`,
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
      `${process.env.REACT_APP_HOST_IP}/statistics/count-user-by-status/?status=Đã duyệt`,
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
      `${process.env.REACT_APP_HOST_IP}/statistics/count-user-by-status/?status=Báo cáo`,
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
      `${process.env.REACT_APP_HOST_IP}/statistics/count-user-by-status/?status=Từ chối`,
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
    <div id={'UserSection'}>
      <div>
        <HeaderBar charities={charities} chuaduyet={chuaduyet} daduyet={daduyet} tuchoi={tuchoi} baocao={baocao} />
        <UserTable charities={charities} getUsers={getUser} totalPage={totalPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}/>
      </div>
    </div>
  );
}
