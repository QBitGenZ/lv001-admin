import PropTypes from 'prop-types';
import React from 'react';
import '../ProductTable/ProductModal.css';
export default function RejModal({ setConfModal, }) {
  return (
    <div onClick={() => setConfModal(false)}>
      <img src='./huongduong.png'></img>
      <h2>Đã từ chối sản phẩm</h2>
    </div>
  );
}

RejModal.propTypes = {
  content: PropTypes.string,
  setConfModal: PropTypes.func,
};
