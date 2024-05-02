import React, { useState, useEffect, } from 'react';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faPlus, } from '@fortawesome/free-solid-svg-icons';
import { Modal, } from '../../components';
import AddTypeOP from './components/AddTypeOP';
import TypeOPTable from './components/TypeOPTable';
import './TypeOfProduct.css';
import { Pagination, } from '../../components';
export default function TypeOfProductSection() {
  const [showAdd, setShowAdd,] = useState(false);
  const handleClickAdd = () => setShowAdd(true);
  const [typePs, setTypePs,] = useState([]);
  const [currentPage, setCurrentPage,] = useState(1);
  const [totalPage, setTotalPage,] = useState(0);
  const [total, setTotal,] = useState(0);
  useEffect(() => {
    loadTypeP();
  }, [currentPage,]);
  const loadTypeP = () => {
    fetch(
      `${process.env.REACT_APP_HOST_IP}/products/types/?page=${currentPage}`,
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
        setTypePs(data.data);
        setTotalPage(data?.meta?.total_pages);
        setTotal(data?.meta?.total);
      })
      .catch((error) => alert(error));
  };
  const pagination = total > 0 ? true : false;
  return (
    <div id={'Notification-Section'}>
      <div className={'header'}>
        <div className={'quantity-block block1'}>
          <span>Tổng số loại sản phẩm</span>
          <span className={'number'}>{total}</span>
        </div>
        <div className={'add-block block1'} onClick={handleClickAdd}>
          <FontAwesomeIcon icon={faPlus} />
          <span className={'title'}>Thêm loại sản phẩm</span>
        </div>
      </div>
      <div className={'body'}>
        <TypeOPTable typePs={typePs} loadTypeP={loadTypeP} />
      </div>
      {pagination && (
        <Pagination
          totalPage={totalPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      )}

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
