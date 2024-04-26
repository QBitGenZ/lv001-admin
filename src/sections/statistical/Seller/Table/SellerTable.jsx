import React, { useEffect, useState, } from 'react';
import './SellerTable.css';
import SellerTableRow from './SellerTableRow.jsx';
import HeaderBar from '../../components/HeaderBar.jsx';
import { Pagination, } from '../../../../components/index.js';
export default function SellerTable() {
  const [sellers, setSeller,] = useState([]);
  const [currentPage, setCurrentPage,] = useState(1);
  const [totalPage, setTotalPage,] = useState(0);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_HOST_IP}/user?is_seller=true&&page=${currentPage}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setSeller(data?.data);
        setTotalPage(data?.meta?.total_pages);
      })
      .catch((error) => console.log(error));
  }, [currentPage,]);
  return (
    <>
      <HeaderBar title={'Tổng số người bán: '} number={sellers.length} />
      <div className={'Seller-Table'}>
        <table id='SellerTable'>
          <tr className='propdtabletr'>
            <th className='prodtabletdth prodtableth'>UID</th>
            <th className='prodtabletdth prodtableth prod'>Người bán</th>
            <th className='prodtabletdth prodtableth'>Giới tính</th>
            <th className='prodtabletdth prodtableth'>Tuổi</th>
          </tr>

          {sellers?.map((seller) => (
            <SellerTableRow
              key={seller.id}
              SellerName={seller?.full_name}
              UID={seller?.id}
              Gender={seller?.email}
              Age={seller?.phone}
            />
          ))}
        </table>
        <Pagination
          totalPage={totalPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  );
}
