import React from 'react';
import './SellerTable.css';
import SellerTableRow from './SellerTableRow.jsx';
import { sellers, } from './fakeSeller.js';
export default function SellerTable() {
  return (
    <div className={'Seller-Table'}>
      <table id='SellerTable'>
        <tr className='propdtabletr'>
          <th className='prodtabletdth prodtableth prod'>Người bán</th>
          <th className='prodtabletdth prodtableth'>UID</th>
          <th className='prodtabletdth prodtableth'>Giới tính</th>
          <th className='prodtabletdth prodtableth'>Tuổi</th>
        </tr>
        {sellers.map((seller) => (
          <SellerTableRow
            key={seller.UID}
            SellerName={seller.SellerName}
            UID={seller.UID}
            Gender={seller.Gender}
            Age={seller.Age}
          />
        ))}
      </table>
    </div>
  );
}
