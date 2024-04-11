import React, { useState, useEffect, } from 'react';
import PropTypes from 'prop-types';
import './ProductTable.css';
import TableRow from './TableRow.jsx';
export default function ProductTable({ products, getProducts, meta, }) {
  const [currentPage, setCurrentPage,] = useState(1);
  const [totalPages, setTotalPages,] = useState(1);
  useEffect(() => {
    setTotalPages(meta?.total);
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderProducts = () => {
    const startIndex = (currentPage - 1) * meta.limit;
    const endIndex = currentPage * meta.limit;
    const displayedProducts = products.slice(startIndex, endIndex);
    return displayedProducts.map((product) => (
      <TableRow key={product?.id} product={product} getProducts={getProducts} />
    ));
  };

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button key={i} onClick={() => handlePageChange(i)}>
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className={'Product-Table'}>
      <table id='ProductTable'>
        <tr className='propdtabletr'>
          <th className='prodtabletdth prodtableth'>Người đăng</th>
          <th className='prodtabletdth prodtableth'>Tên sản phẩm</th>
          <th className='prodtabletdth prodtableth'>Thời gian đăng tải</th>
          <th className='prodtabletdth prodtableth'>Trạng thái</th>
        </tr>
        {renderProducts()}
      </table>
      <div>{renderPagination()}</div>
    </div>
  );
}

ProductTable.propTypes = {
  meta: PropTypes.object,
  products: PropTypes.array,
  getProducts: PropTypes.func,
};
