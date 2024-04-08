import PropTypes from 'prop-types';
import React, { useState, } from 'react';
import Modal from '../../../../components/Modal';
import InfoTypeOPModal from './InfoUserModal';
import moment from 'moment';
export default function TypeOPTableRow({ charity, getUsers, }) {
  const [modal, setModal,] = useState(false);

  const toggleModal = () => {
    setModal(true);
  };
  console.log(charity);
  return (
    
    <>
      <tr onClick={toggleModal} className='ModalBtn propdtabletr'>
        <td className='prodtabletd prodtabletdth'>{charity?.name}</td>
        <td className='prodtabletd prodtabletdth'>{moment(charity?.created_at).format('HH:mm DD/MM/YYYY')}</td>
      </tr>
      {modal && (
        <Modal
          title={'Thông tin loại sản phẩm'}
          body={<InfoTypeOPModal setModal={setModal} charity={charity} getUsers={getUsers} />}
          setShow={setModal}
        />
      )}
    </>
  );
}

TypeOPTableRow.propTypes = {
  charity: PropTypes.object,
  getUsers: PropTypes.func,
};
