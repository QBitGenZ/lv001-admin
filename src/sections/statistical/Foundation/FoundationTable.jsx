import React from 'react';
import '../Seller/Table/SellerTable.css';
import { foundations, } from './foundationfakedata.js';
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
        {foundations.map((foundation) => (
          <BuyerTableRow
            key={foundation.ID}
            NameOrg={foundation.NameOrg}
            ID={foundation.ID}
            SDT={foundation.SDT}
            Address={foundation.Address}
          />
        ))}
      </table>
    </div>
  );
}
