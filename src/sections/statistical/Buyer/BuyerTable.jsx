import React from 'react';
import '../Seller/Table/SellerTable.css';
import { buyers, } from './buyerfakedata.js';
import BuyerTableRow from './BuyerTableRow.jsx';
export default function BuyerTable() {
  return (
    <div className={'Seller-Table'}>
      <table id='SellerTable'>
        <tr className='propdtabletr'>
          <th className='prodtabletdth prodtableth'>UID</th>
          <th className='prodtabletdth prodtableth prod'>Người mua</th>
          <th className='prodtabletdth prodtableth'>SDT</th>
          <th className='prodtabletdth prodtableth prod'>Địa điểm</th>
        </tr>
        {buyers.map((buyer) => (
          <BuyerTableRow
            key={buyer.ID}
            NameOrg={buyer.NameOrg}
            ID={buyer.ID}
            SDT={buyer.SDT}
            Address={buyer.Address}
          />
        ))}
      </table>
    </div>
  );
}
