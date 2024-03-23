import React, { useEffect, useState, } from 'react';
import HeaderBar from './components/HeaderBar/HeaderBar';
import './UserSection.css';
import UserTable from './components/HeaderBar/Table/UserTable';
export default function UserCencorSection() {
  const [charities, setCharity,] = useState([]);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/v1/user?is_philanthropist=true', {
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
    <div id={'UserSection'}>
      <div>
        <HeaderBar charities={charities} />
        <UserTable charities={charities}/>
      </div>
    </div>
  );
}
