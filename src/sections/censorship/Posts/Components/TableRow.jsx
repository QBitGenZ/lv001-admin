import PropTypes from 'prop-types';
import React from 'react';
export default function TableRow({ user, product_name, created_at, status, }) {
  return (
    <tr>
      <td>{user}</td>
      <td>{product_name}</td>
      <td>{created_at}</td>
      <td >
        <p className={status=='Đã duyệt'?'approved':status=='Từ chối'?'rejected':status=='Báo cáo'?'reported':'notapproved'}>{status}</p> </td>
    </tr>
  );
}

TableRow.propTypes = {
  user: PropTypes.string,
  product_name: PropTypes.number,
  created_at: PropTypes.string,
  status: PropTypes.string,
};