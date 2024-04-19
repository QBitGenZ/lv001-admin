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
        setCharity(data);
        setTotalPage(data?.meta?.total_pages);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div id={'UserSection'}>
      <div>
        <HeaderBar charities={charities} />
        <UserTable charities={charities} getUsers={getUser} totalPage={totalPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}/>
      </div>
    </div>
  );
}
