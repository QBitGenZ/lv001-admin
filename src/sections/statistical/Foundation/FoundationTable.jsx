import React, { useEffect, useState, } from 'react';
import '../Seller/Table/SellerTable.css';
import BuyerTableRow from '../Buyer/BuyerTableRow';
import HeaderBar from '../components/HeaderBar';
export default function FoundationTable() {
  const [charities, setCharity,] = useState([]);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/v1/user?is_philanthropist=true', {
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
  }, []);
  return (
    <>
      <HeaderBar title={'Tổng số người bán: '} number={charities?.length} />
      <div className={'Seller-Table'}>
        <table id='SellerTable'>
          <tr className='propdtabletr'>
            <th className='prodtabletdth prodtableth'>UID</th>
            <th className='prodtabletdth prodtableth prod'>Đơn vị từ thiện</th>
            <th className='prodtabletdth prodtableth'>SDT</th>
            <th className='prodtabletdth prodtableth prod'>Địa chỉ</th>
          </tr>
          {charities.map((charity) => (
            <BuyerTableRow
              key={charity.id}
              NameOrg={charity.full_name}
              ID={charity.id}
              SDT={charity.phone}
              Address={charity.email}
            />
          ))}
        </table>
      </div>
    </>
  );
}
