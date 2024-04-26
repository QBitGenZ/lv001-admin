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
  const [total, setTotal, ] = useState(0);
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
        setTotal(data?.meta?.total);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div id={'ProductSection'}>
      <div>
        <HeaderBar total={total} />
        <Filter setApproval={setApproval} setStatus={setStatus} status={status} approval={approval}/>
        <EventTable
          events={events}
          getEvents={getEvents}
          totalPage={totalPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
