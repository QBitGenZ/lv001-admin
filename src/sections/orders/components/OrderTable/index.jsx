import React from 'react';
import PropTypes from 'prop-types';
import OrderTableRow from '../OrderTableRow';

export default function OrderTable({ orders, loadOrder, }) {
  return (
    <div className={'User-Table'}>
      <table id='ProductTable'>
        <tr className='propdtabletr'>
          <th className='prodtabletdth prodtableth'>STT</th>
          <th className='prodtabletdth prodtableth'>Người tạo</th>
          <th className='prodtabletdth prodtableth'>Ngày tạo</th>
          <th className='prodtabletdth prodtableth'>Thanh toán</th>
          <th className='prodtabletdth prodtableth'>Trang thái</th>
        </tr>
        {orders?.map((order,index) => (
          <OrderTableRow
            key={order?.id}
            index={index}
            order={order}
            loadOrder={loadOrder}
          />
        ))}
      </table>
    </div>
  );
}
OrderTable.propTypes = {
  orders: PropTypes.array,
  loadOrder: PropTypes.func,
};
