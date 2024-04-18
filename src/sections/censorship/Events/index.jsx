import React, { useState, useEffect, } from 'react';
import './EventsSection.css';
import HeaderBar from './components/HeaderBar/HeaderBar';
import EventTable from './components/EventTable/EventTable';
export default function EventCenSorSection() {
  const [events, setEvent,] = useState([]);
  const [currentPage, setCurrentPage,] = useState(1);
  const [totalPage, setTotalPage,] = useState(0);
  useEffect(() => {
    getEvents();
  }, [currentPage,]);

  const getEvents = () => {
    fetch(`${process.env.REACT_APP_HOST_IP}/events/?page=${currentPage}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setEvent(data.data);
        setTotalPage(data?.meta?.total_pages);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div id={'ProductSection'}>
      <div>
        <HeaderBar events={events} />
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
