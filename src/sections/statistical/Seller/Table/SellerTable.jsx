import React, { useEffect, useState, } from 'react';
import './SellerTable.css';
import SellerTableRow from './SellerTableRow.jsx';
import HeaderBar from '../../components/HeaderBar.jsx';
export default function SellerTable() {
  const [sellers, setSeller,] = useState([]);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/v1/user?is_seller=true', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setSeller(data);
      })
      .catch((error) => console.log(error));
  }, []);
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
      </div>
    </>
  );
}
