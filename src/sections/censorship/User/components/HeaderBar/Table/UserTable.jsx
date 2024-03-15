import React from 'react';
import '../../../../Posts/components/ProductTable/ProductTable.css';
import TableRow from './UserTableRow.jsx';
import { products, } from './fakedata.js';
export default function UserTable() {
  return (
    <div className={'User-Table'}>
      <table id='ProductTable'>
        <tr className='propdtabletr'>
          <th className='prodtabletdth prodtableth'>Nhà yêu cầu</th>
          <th className='prodtabletdth prodtableth'>Thời gian</th>
          <th className='prodtabletdth prodtableth'>Trạng thái</th>
        </tr>
        {products.map((product) => (
          <TableRow
            key={product.ID}
            user={product.user}
            created_at={product.created_at}
            status={product.status}
          />
        ))}
      </table>
    </div>
  );
}
