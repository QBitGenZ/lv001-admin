import React from 'react';
import HeaderBar from './components/HeaderBar/HeaderBar';
import './UserSection.css';
import UserTable from './components/HeaderBar/Table/UserTable';
export default function UserCencorSection() {
  return (
    <div id={'UserSection'}>
      <div>
        <HeaderBar />
        <UserTable/>
      </div>
    </div>
  );
}
