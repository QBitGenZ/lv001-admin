import PropTypes from 'prop-types';
import React from 'react';
export default function ProductModal({ toggleModal, }) {
  return (
    <div>
      <div id='myModal' className='modal'>
        <div className='modal-content'>
          <span className='close'>&times;</span>
          <p>Thông tin sản phẩm</p>
          <p>Tên sản phẩm: Hoa tay ZARA</p>
          <p>Người bán: NTH Thanh (20/10/2023 22:22pm)</p>
          <p>Giới tính: Dành cho nữ</p>
          <p>Kích cỡ: Phù hợp mọi kích cỡ</p>
          <p>Giá: 1.500.000 VND</p>
          <p>Mô tả sản phẩm:</p>
          <p>Hoa tay ZARA phiên bản mạ vàng sản xuất 2022.</p>
          <p>
            Sản phẩm chỉ mới sử dụng 2 lần nên còn rất mới, độ mới khoảng 95%.
          </p>
          <p>Nếu có thắc mắc hãy liên hệ trực tiếp tôi.</p>
          <p>Tôi còn rất nhiều sản phẩm tốt, hãy xem gian hàng của tôi.</p>
          <div className='modal-actions'>
            <button onClick={toggleModal} className='btn close'>
              Duyệt
            </button>
            <button onClick={toggleModal} className='btn close'>
              Từ chối
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductModal.propTypes = {
  toggleModal: PropTypes.string,
};
