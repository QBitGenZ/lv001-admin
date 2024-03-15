import PropTypes from 'prop-types';
import React from 'react';
import '../ProductTable/ProductModal.css';
export default function AcptModal({ setConfModal, modalmessage, }) {
  return (
    <div onClick={() => setConfModal(false)}>
      <img src='https://cdn-icons-png.flaticon.com/128/10419/10419271.png'></img>
      <h2>{modalmessage}</h2>
    </div>
  );
}

AcptModal.propTypes = {
  modalmessage: PropTypes.string,
  setConfModal: PropTypes.func,
};
