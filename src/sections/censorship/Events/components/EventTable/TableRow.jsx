import PropTypes from 'prop-types';
import React, { useState, } from 'react';
import EventModal from './EventModal';
import Modal from '../../../../../components/Modal';
import moment from 'moment';
export default function TableRow({ event, getEvents, }) {
  const [modal, setModal,] = useState(false);

  const toggleModal = () => {
    setModal(true);
  };
  return (
    <>
      <tr onClick={toggleModal} className='ModalBtn propdtabletr'>
        <td className='prodtabletd prodtabletdth'>{event?.user}</td>
        <td className='prodtabletd prodtabletdth'>{event?.name}</td>
        <td className='prodtabletd prodtabletdth'>{moment(event?.beginAt).format('HH:mm DD/MM/YYYY')}</td>
        <td className='prodtabletd prodtabletdth'>{moment(event?.endAt).format('HH:mm DD/MM/YYYY')}</td>
        <td className='prodtabletd prodtabletdth'>
          <p
            className={
              event.status == 'Đã duyệt'
                ? 'approved'
                : event.status == 'Từ chối'
                  ? 'rejected'
                  : event.status == 'Báo cáo'
                    ? 'reported'
                    : 'notapproved'
            }
          >
            {event.status}
          </p>{' '}
        </td>
      </tr>
      {modal && (
        <Modal
          title={'Kiểm duyệt sự kiện'}
          body={<EventModal setModal={setModal} event={event} getevents={getEvents}/>}
          setShow={setModal}
        />
      )}
    </>
  );
}

TableRow.propTypes = {
  event:PropTypes.object,
  getEvents: PropTypes.func,
};
