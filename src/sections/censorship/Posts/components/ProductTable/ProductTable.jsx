import React from 'react';
import PropTypes from 'prop-types';
import './ProductTable.css';
import TableRow from './TableRow.jsx';
import { Pagination, } from '../../../../../components/index.js';
export default function ProductTable({ products, getProducts, currentPage, totalPage, onPageChange, reload, }) {

  return (
    <div className={'Product-Table'}>
      <table id='ProductTable'>
        <tr className='propdtabletr'>
          <th className='prodtabletdth prodtableth'>Người đăng</th>
          <th className='prodtabletdth prodtableth'>Tên sản phẩm</th>
          <th className='prodtabletdth prodtableth'>Thời gian đăng tải</th>
          <th className='prodtabletdth prodtableth'>Trạng thái</th>
        </tr>
        {products.map((product) => (
          <TableRow
            reload={reload}
            key={product?.id}
            product={product}
            getProducts={getProducts}
          />
        ))}
      </table>
      <Pagination
        totalPage={totalPage}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </div>
  );
}

ProductTable.propTypes = {
  meta: PropTypes.object,
  products: PropTypes.array,
  getProducts: PropTypes.func,
  currentPage: PropTypes.number,
  totalPage: PropTypes.number,
  onPageChange: PropTypes.func,
  reload: PropTypes.func,
};
