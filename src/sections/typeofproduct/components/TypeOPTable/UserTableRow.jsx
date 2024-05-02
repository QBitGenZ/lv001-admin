import PropTypes from 'prop-types';
import React, { useState, } from 'react';
import Modal from '../../../../components/Modal';
import moment from 'moment';
import EditTypeOP from '../EditTypeOP';
export default function TypeOPTableRow({ typeP, loadTypeP, index, }) {
  const [modal, setModal,] = useState(false);

  const toggleModal = () => {
    setModal(true);
  };
  return (
    
    <>
      <tr onClick={toggleModal} className='ModalBtn propdtabletr'>
        <td className='prodtabletd prodtabletdth'>{index}</td>
        <td className='prodtabletd prodtabletdth'>{typeP?.name}</td>
        <td className='prodtabletd prodtabletdth'>{moment(typeP.created_at).format('HH:mm DD/MM/YYYY')}</td>
      </tr>
      {modal && (
        <Modal
          title={'Chỉnh sửa loại sản phẩm'}
          body={<EditTypeOP setModal={setModal} typeP={typeP} loadTypeP={loadTypeP} />}
          setShow={setModal}
        />
      )}
    </>
  );
}

TypeOPTableRow.propTypes = {
  typeP: PropTypes.object,
  loadTypeP: PropTypes.func,
  index: PropTypes.number,
};
