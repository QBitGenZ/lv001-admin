import PropTypes from 'prop-types';
import React, { } from 'react';
// import '../../../../Posts/components/ProductTable/ProductModal.css';
// import Modal from '../../../../../../components/Modal';
// import AcptModal from '../../../../Posts/components/Modal/AcptModal';
import moment from 'moment';
export default function InfoTypeOPModal({ charity, }) {
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
      </div>
    </>
  );
}

InfoTypeOPModal.propTypes = {
  setModal: PropTypes.func,
  charity: PropTypes.object,
  getUsers: PropTypes.func,
};
