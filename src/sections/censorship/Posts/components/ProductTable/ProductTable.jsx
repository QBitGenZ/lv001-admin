import React from 'react';
import PropTypes from 'prop-types';
import './ProductTable.css';
import TableRow from './TableRow.jsx';
import { Pagination, } from '../../../../../components/index.js';
export default function ProductTable({
  products,
  getProducts,
  currentPage,
  totalPage,
  onPageChange,
  reload,
}) {
  // const kiemtra = () =>{
  //   if (total > 0) return true;
  //   return false;
  // };
  return (
    <div className={'Product-Table'}>
      <table id='ProductTable'>
        <tr className='propdtabletr'>
          <th className='prodtabletdth prodtableth'>STT</th>
          <th className='prodtabletdth prodtableth'>Người đăng</th>
          <th className='prodtabletdth prodtableth'>Tên sản phẩm</th>
          <th className='prodtabletdth prodtableth'>Thời gian đăng tải</th>
          <th className='prodtabletdth prodtableth'>Trạng thái</th>
        </tr>
        {products.map((product, index) => (
          <TableRow
            index={index + 1}
            reload={reload}
            key={product?.id}
            product={product}
            getProducts={getProducts}
          />
        ))}
      </table>
      { false && (
        <Pagination
          totalPage={totalPage}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      )}
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
  total: PropTypes.number,
};
