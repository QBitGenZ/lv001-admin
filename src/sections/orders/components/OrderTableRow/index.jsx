import PropTypes from 'prop-types';
import React, { useState, } from 'react';
import Modal from '../../../../components/Modal';
import moment from 'moment';
import InforOrder from '../InforOrder';
// import EditTypeOP from '../EditTypeOP';
export default function OrderTableRow({ order, loadOrder, index, }) {
  const [modal, setModal,] = useState(false);
  const toggleModal = () => {
    setModal(true);
  };
  console.log(order);
  const displayStatus = (status) => {
    if (status === true) {
      return 'Đã thanh toán';
    }
    return 'Chưa thanh toán';
  };
  return (
    <>
      <tr onClick={toggleModal} className='ModalBtn propdtabletr'>
        <td className='prodtabletd prodtabletdth'>{index}</td>
        <td className='prodtabletd prodtabletdth'>{order?.user}</td>
        <td className='prodtabletd prodtabletdth'>
          {moment(order?.created_at).format('HH:mm DD/MM/YYYY')}
        </td>
        <td className='prodtabletd prodtabletdth'>{displayStatus(order?.is_paid)}</td>
        <td className='prodtabletd prodtabletdth'>{order?.status}</td>
      </tr>
      {modal && (
        <Modal
          title={'Chi tiết đơn hàng'}
          body={
            <InforOrder
              setModal={setModal}
              order={order}
              loadOrder={loadOrder}
            />
          }
          setShow={setModal}
        />
      )}
    </>
  );
}
OrderTableRow.propTypes = {
  index: PropTypes.number,
  order: PropTypes.object,
  loadOrder: PropTypes.func,
};
