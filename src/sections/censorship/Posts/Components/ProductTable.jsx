import React from 'react';
import './ProductTable.css';
import TableRow from './TableRow.jsx';
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
          <TableRow
            key={product.ID}
            user={product.user}
            product_name={product.product_name}
            created_at={product.created_at}
            status={product.status}
          />
        ))}
      </table>
    </div>
  );
}
