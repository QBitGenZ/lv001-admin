import PropTypes from 'prop-types';
import React, { useState, } from 'react';
import ProductModal from './ProductModal';
export default function TableRow({ user, product_name, created_at, status, }) {
  const [modal, setModal,] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <tr onClick={toggleModal} className='ModalBtn'>
        <td>{user}</td>
        <td>{product_name}</td>
        <td>{created_at}</td>
        <td>
          <p
            className={
              status == 'Đã duyệt'
                ? 'approved'
                : status == 'Từ chối'
                  ? 'rejected'
                  : status == 'Báo cáo'
                    ? 'reported'
                    : 'notapproved'
            }
          >
            {status}
          </p>{' '}
        </td>
      </tr>
      {modal && (<ProductModal toggleModal={toggleModal}/>)}
    </>
  );
}

TableRow.propTypes = {
  user: PropTypes.string,
  product_name: PropTypes.number,
  created_at: PropTypes.string,
  status: PropTypes.string,
};
