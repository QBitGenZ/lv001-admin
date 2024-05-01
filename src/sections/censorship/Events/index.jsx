import React, { useState, useEffect, } from 'react';
import './EventsSection.css';
import HeaderBar from './components/HeaderBar/HeaderBar';
import EventTable from './components/EventTable/EventTable';
import Filter from './components/Filter';
export default function EventCenSorSection() {
  const [events, setEvent,] = useState([]);
  const [currentPage, setCurrentPage,] = useState(1);
  const [totalPage, setTotalPage,] = useState(0);
  const [status, setStatus,] = useState('all');
  const [approval, setApproval,] = useState('all');
  // const [total, setTotal, ] = useState(0);
  useEffect(() => {
    getEvents();
  }, [currentPage, status, approval, ]);

  const getEvents = () => {
    fetch(`${process.env.REACT_APP_HOST_IP}/events/?page=${currentPage}&status=${status}&approval=${approval}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setEvent(data?.data);
        setTotalPage(data?.meta?.total_pages);
        // setTotal(data?.meta?.total);
      })
      .catch((error) => console.log(error));
  };
  const [chuaduyet, setchuaduyet,] = useState(0);
  useEffect(() => {
    getchuaduyet();
    getdaduyet();
    getbaocao();
    gettuchoi();
  }, []);
  const getchuaduyet = async () => {
    fetch(
      `${process.env.REACT_APP_HOST_IP}/statistics/count-event-by-status/?status=Chưa duyệt`,
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
      `${process.env.REACT_APP_HOST_IP}/statistics/count-event-by-status/?status=Đã duyệt`,
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
      `${process.env.REACT_APP_HOST_IP}/statistics/count-event-by-status/?status=Báo cáo`,
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
      `${process.env.REACT_APP_HOST_IP}/statistics/count-event-by-status/?status=Từ chối`,
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
  const reload = () => {
    getbaocao();
    getchuaduyet();
    getdaduyet();
    gettuchoi();
  };
  return (
    <div id={'ProductSection'}>
      <div>
        <HeaderBar total={chuaduyet+daduyet+tuchoi+baocao} chuaduyet={chuaduyet} daduyet={daduyet} tuchoi={tuchoi} baocao={baocao} />
        <Filter setApproval={setApproval} setStatus={setStatus} status={status} approval={approval}/>
        <EventTable
          events={events}
          getEvents={getEvents}
          totalPage={totalPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          reload={reload}
        />
      </div>
    </div>
  );
}
