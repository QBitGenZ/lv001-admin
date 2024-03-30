import React, { useEffect, useState, } from 'react';
import HeaderBar from './components/HeaderBar/HeaderBar';
import './UserSection.css';
import UserTable from './components/HeaderBar/Table/UserTable';
export default function UserCencorSection() {
  const [charities, setCharity,] = useState([]);
  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
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
  };
  return (
    <div id={'UserSection'}>
      <div>
        <HeaderBar charities={charities} />
        <UserTable charities={charities} getUsers={getUser}/>
      </div>
    </div>
  );
}
