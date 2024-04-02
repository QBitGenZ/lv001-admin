import React, { useState, useEffect, } from 'react';
import './EventsSection.css';
import HeaderBar from './components/HeaderBar/HeaderBar';
import EventTable from './components/EventTable/EventTable';
export default function EventCenSorSection() {
  const [events, setEvent,] = useState([]);
  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = () => {
    fetch(`${process.env.REACT_APP_HOST_IP}/events/`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setEvent(data.data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div id={'ProductSection'}>
      <div>
        <HeaderBar events={events} />
        <EventTable events={events} getProducts={getEvents} />
      </div>
    </div>
  );
}
