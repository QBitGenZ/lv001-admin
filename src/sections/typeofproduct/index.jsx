import React, { useState, useEffect, } from 'react';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faPlus, } from '@fortawesome/free-solid-svg-icons';
import { Modal, } from '../../components';
import AddTypeOP from './components/AddTypeOP';
import TypeOPTable from './components/TypeOPTable';
import './TypeOfProduct.css';
export default function TypeOfProductSection() {
  const [showAdd, setShowAdd,] = useState(false);
  const handleClickAdd = () => setShowAdd(true);
  const [typePs, setTypePs,] = useState([]);
  useEffect(() => {
    loadTypeP();
  }, []);
  const loadTypeP = () => {
    fetch(`${process.env.REACT_APP_HOST_IP}/products/types/`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => setTypePs(data.data))
      .catch((error) => alert(error));
  };

  return (
    <div id={'Notification-Section'}>
      <div className={'header'}>
        <div className={'quantity-block block1'}>
          <span>Tổng số loại sản phẩm</span>
          <span className={'number'}>{typePs.length}</span>
        </div>
        <div className={'add-block block1'} onClick={handleClickAdd}>
          <FontAwesomeIcon icon={faPlus} />
          <span className={'title'}>Thêm loại sản phẩm</span>
        </div>
      </div>
      <div className={'body'}>
        <TypeOPTable typePs={typePs} loadTypeP={loadTypeP} />
      </div>
      {showAdd && (
        <Modal
          setShow={setShowAdd}
          title={'Thêm loại sản phẩm'}
          body={<AddTypeOP setShowAdd={setShowAdd} loadTypeP={loadTypeP} />}
        />
      )}
    </div>
  );
}

