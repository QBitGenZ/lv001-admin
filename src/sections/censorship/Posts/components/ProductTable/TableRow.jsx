import PropTypes from 'prop-types';
import React, { useState, } from 'react';
import ProductModal from './ProductModal';
import Modal from '../../../../../components/Modal';
export default function TableRow({ user, product_name, created_at, status, }) {
  const [modal, setModal,] = useState(false);

  const toggleModal = () => {
    setModal(true);
  };
  return (
    <>
      <tr onClick={toggleModal} className='ModalBtn propdtabletr'>
        <td className='prodtabletd prodtabletdth'>{user}</td>
        <td className='prodtabletd prodtabletdth'>{product_name}</td>
        <td className='prodtabletd prodtabletdth'>{created_at}</td>
        <td className='prodtabletd prodtabletdth'>
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
      {modal && (
        <Modal
          title={'Kiểm duyệt sản phẩm'}
          body={<ProductModal setModal={setModal} />}
          setShowAdd={setModal}
        />
      )}
    </>
  );
}

TableRow.propTypes = {
  user: PropTypes.string,
  product_name: PropTypes.number,
  created_at: PropTypes.string,
  status: PropTypes.string,
};
