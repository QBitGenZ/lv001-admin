import React from 'react';
import PropTypes from 'prop-types';
import './ProductTable.css';
import TableRow from './TableRow.jsx';
export default function ProductTable({ products, }) {
  console.log(products);
  return (
    <div className={'Product-Table'}>
      <table id='ProductTable'>
        <tr className='propdtabletr'>
          <th className='prodtabletdth prodtableth'>Người đăng</th>
          <th className='prodtabletdth prodtableth'>Tên sản phẩm</th>
          <th className='prodtabletdth prodtableth'>Thời gian đăng tải</th>
          <th className='prodtabletdth prodtableth'>Trạng thái</th>
        </tr>
        {products?.map((product) => (
          <TableRow
            key={product?.id}
            product={product}
          />
        ))}
      </table>
    </div>
  );
}

ProductTable.propTypes = {
  products: PropTypes.array,
};
