import React from 'react';
import './table.css';
import TableRow from './table_row.jsx';
import { products, } from './fakedata.js';
export default function ProductTable() {
  return (
    <div className={'Product-Table'}>
      <table>
        <tr>
          <th>Người đăng</th>
          <th>Tên sản phẩm</th>
          <th>Thời gian đăng tải</th>
          <th>Trạng thái</th>
        </tr>
        {products.map((product) => (
          <TableRow key={product.ID} product={product} />
        ))}
      </table>
    </div>
  );
}
