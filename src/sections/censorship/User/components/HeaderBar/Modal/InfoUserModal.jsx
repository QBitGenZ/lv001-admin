import PropTypes from 'prop-types';
import React, { useState, } from 'react';
import '../../../../Posts/components/ProductTable/ProductModal.css';
import Modal from '../../../../../../components/Modal';
import AcptModal from '../../../../Posts/components/Modal/AcptModal';
import moment from 'moment';
export default function InfoUserModal({ charity, }) {
  const [rejmodal, setRejModal,] = useState(false);
  const [acptmodal, setAcptModal,] = useState(false);

  const setAcceptModal = () => {
    setAcptModal(true);
    setStatus('Đã duyệt');
    changeStatus;
  };

  const setRejectModal = () => {
    setRejModal(true);
    setStatus('Từ chối');
    changeStatus;
  };
  const [status, setStatus,] = useState([]);
  function changeStatus(e) {
    e.preventDefault();
    const form = new FormData();
    console.log(status);
    form.append('status', status);
    fetch('http://127.0.0.1:8000/v1/user', {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
      body: form,
    })
      .then((res) => res.json())
      .catch((error) => console.log(error));
  }

  return (
    <>
      <div id='myModal' className={'productmodal'}>
        <div className={'modalcontent'}>
          <p className='proname'>{charity?.full_name}</p>
          <div className={'infoseller'}>
            <p className={'infouser'}>{charity?.full_name} </p>
            <p className={'infotime'}>
              {moment(charity?.create_at).format('HH:mm DD/MM/YYYY')}
            </p>
          </div>
          <div>
            <p className='spcontent1'>{charity?.description}</p>
          </div>
        </div>
        <div className={'modal-actions'}>
          <button onClick={setAcceptModal} className={'close acpt'}>
            Duyệt
          </button>
          <button onClick={setRejectModal} className={'close rej'}>
            Từ chối
          </button>
        </div>
      </div>
      {acptmodal && (
        <Modal
          title={'Kiểm duyệt tổ chức từ thiện'}
          body={
            <AcptModal
              setAcptModal={setAcptModal}
              modalmessage={'Đã duyệt tổ chức từ thiện thành công'}
            />
          }
          setShow={setAcptModal}
        />
      )}
      {rejmodal && (
        <Modal
          title={'Kiểm duyệt tổ chức từ thiện'}
          body={
            <AcptModal
              setAcptModal={setRejModal}
              modalmessage={'Đã từ chối tổ chức từ thiện'}
            />
          }
          setShow={setRejModal}
        />
      )}
    </>
  );
}

InfoUserModal.propTypes = {
  setModal: PropTypes.func,
  charity: PropTypes.object,
};
