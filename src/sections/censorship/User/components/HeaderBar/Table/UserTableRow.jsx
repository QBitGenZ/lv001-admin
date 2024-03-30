import PropTypes from 'prop-types';
import React, { useState, } from 'react';
import Modal from '../../../../../../components/Modal';
import InfoUserModal from '../Modal/InfoUserModal';
import moment from 'moment';
export default function UserTableRow({ charity, getUsers, }) {
  const [modal, setModal,] = useState(false);

  const toggleModal = () => {
    setModal(true);
  };
  console.log(charity);
  return (
    
    <>
      <tr onClick={toggleModal} className='ModalBtn propdtabletr'>
        <td className='prodtabletd prodtabletdth'>{charity?.full_name}</td>
        <td className='prodtabletd prodtabletdth'>{moment(charity?.create_at).format('HH:mm DD/MM/YYYY')}</td>
        <td className='prodtabletd prodtabletdth'>
          <p
            className={
              charity.status == 'Đã duyệt'
                ? 'approved'
                : charity.status == 'Từ chối'
                  ? 'rejected'
                  : charity.status == 'Báo cáo'
                    ? 'reported'
                    : 'notapproved'
            }
          >
            {charity.status}
          </p>{' '}
        </td>
      </tr>
      {modal && (
        <Modal
          title={'Kiểm duyệt thông tin tổ chức từ thiện'}
          body={<InfoUserModal setModal={setModal} charity={charity} getUsers={getUsers} />}
          setShow={setModal}
        />
      )}
    </>
  );
}

UserTableRow.propTypes = {
  charity: PropTypes.object,
  getUsers: PropTypes.func,
};
