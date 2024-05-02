import React, { useState, useEffect, } from 'react';
import { OrderTable, } from './components';
import { Pagination, } from '../../components';
export default function OrderManagementSection() {
  const [orders, setOrders,] = useState([]);
  const [currentPage, setCurrentPage,] = useState(1);
  const [totalPage, setTotalPage,] = useState(0);
  const [total, setTotal,] = useState(0);
  useEffect(() => {
    loadOrder();
  }, [currentPage,]);
  const loadOrder = () => {
    fetch(`${process.env.REACT_APP_HOST_IP}/orders/?page=${currentPage}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOrders(data?.data);
        setTotalPage(data?.meta?.total_pages);
        setTotal(data?.meta?.total);
      })
      .catch((error) => alert(error));
  };
  console.log(orders);
  const pagination = total > 0 ? true : false;
  return (
    <div id={'Notification-Section'}>
      <div className={'header'}>
        <div className={'quantity-block block1'}>
          <span>Tổng số hóa đơn</span>
          <span className={'number'}>{total}</span>
        </div>
      </div>
      <div className={'body'}>
        <OrderTable orders={orders} loadOrder={loadOrder} />
      </div>
      {pagination && (
        <Pagination
          totalPage={totalPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}
