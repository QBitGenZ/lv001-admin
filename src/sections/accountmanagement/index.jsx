import React, { useState, useEffect, } from 'react';
import { faPlus, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import AccountTable from './AccountTable';
import Modal from '../../components/Modal';
import AddAccount from './components/AddAccount';
export default function AccountManagementSection() {
  const [showAdd, setShowAdd,] = useState(false);
  const handleClickAdd = () => setShowAdd(true);
  const [accounts, setAccounts,] = useState([]);
  useEffect(() => {
    loadAccount();
  }, []);
  const loadAccount= () => {
    fetch(`${process.env.REACT_APP_HOST_IP}/user`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => setAccounts(data))
      .catch((error) => alert(error));
  };

  return (
    <div id={'Notification-Section'}>
      <div className={'header'}>
        <div className={'quantity-block block1'}>
          <span>Tổng số tài khoản</span>
          <span className={'number'}>{accounts?.length}</span>
        </div>
        <div className={'add-block block1'} onClick={handleClickAdd}>
          <FontAwesomeIcon icon={faPlus} />
          <span className={'title'}>Thêm tài khoản</span>
        </div>
      </div>
      <div className={'body'}>
        <AccountTable accounts={accounts} loadAccount={loadAccount} />
      </div>
      {showAdd && (
        <Modal
          setShow={setShowAdd}
          title={'Thêm tài khoản'}
          body={<AddAccount setShowAdd={setShowAdd} loadAccount={loadAccount} />}
        />
      )}
    </div>
  );
}