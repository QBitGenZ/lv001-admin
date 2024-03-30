import React, { useEffect, useState, } from 'react';
import '../Seller/Table/SellerTable.css';
import BuyerTableRow from './BuyerTableRow.jsx';
import HeaderBar from '../components/HeaderBar.jsx';
export default function BuyerTable() {
  const [buyers, setBuyer,] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_HOST_IP}/user`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setBuyer(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <HeaderBar title={'Tổng số người bán: '} number={buyers?.length} />
      <div className={'Seller-Table'}>
        <table id='SellerTable'>
          <tr className='propdtabletr'>
            <th className='prodtabletdth prodtableth'>UID</th>
            <th className='prodtabletdth prodtableth prod'>Người mua</th>
            <th className='prodtabletdth prodtableth'>SDT</th>
            <th className='prodtabletdth prodtableth prod'>Địa chỉ</th>
          </tr>
          {buyers.map((buyer) => (
            <BuyerTableRow
              key={buyer.id}
              NameOrg={buyer.full_name}
              ID={buyer.id}
              SDT={buyer.phone}
              Address={buyer.email}
            />
          ))}
        </table>
      </div>
    </div>
  );
}
