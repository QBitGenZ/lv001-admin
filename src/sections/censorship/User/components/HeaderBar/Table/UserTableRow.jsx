import PropTypes from 'prop-types';
import React, { useState, } from 'react';
import Modal from '../../../../../../components/Modal';
import InfoUserModal from '../Modal/InfoUserModal';
export default function TableRow({ user, created_at, status, }) {
  const [modal, setModal,] = useState(false);

  const toggleModal = () => {
    setModal(true);
  };
  return (
    <>
      <tr onClick={toggleModal} className='ModalBtn propdtabletr'>
        <td className='prodtabletd prodtabletdth'>{user}</td>
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
          title={'Kiểm duyệt thông tin tổ chức từ thiện'}
          body={<InfoUserModal setModal={setModal}/>}
          setShow={setModal}
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
