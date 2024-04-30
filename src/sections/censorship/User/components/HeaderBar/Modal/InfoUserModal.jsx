import PropTypes from 'prop-types';
import React, { useState, } from 'react';
import '../../../../Posts/components/ProductTable/ProductModal.css';
import Modal from '../../../../../../components/Modal';
import AcptModal from '../../../../Posts/components/Modal/AcptModal';
import moment from 'moment';
export default function InfoUserModal({ charity, getUsers, setModal, reload, }) {
  const [rejmodal, setRejModal,] = useState(false);
  const [acptmodal, setAcptModal,] = useState(false);

  const setAcceptModal = () => {
    setAcptModal(true);
    updateStatus('Đã duyệt');
    setModal(false);
  };

  const setRejectModal = () => {
    setRejModal(true);
    updateStatus('Từ chối');
    setModal(false);
  };
  const updateStatus = (status) => {
    const form = new FormData();
    form.append('status', status);
    fetch(`${process.env.REACT_APP_HOST_IP}/status/${charity?.username}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
      body: form,
    })
      .then((res) => {
        if (res.status === 200) {
          alert('Kiểm duyệt tổ chức từ thiên thành công');
          reload();
          getUsers();
        } else {
          Promise.reject('Kiểm duyệt tổ chức từ thiện không thành công');
        }
      })
      .catch((error) => console.log(error));
  };

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
  getUsers: PropTypes.func,
  reload: PropTypes.func,
};
