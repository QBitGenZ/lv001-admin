import PropTypes from 'prop-types';
import React, { useState, } from 'react';
import '../ProductTable/ProductModal.css';
import Modal from '../../../../../components/Modal';
import AcptModal from '../Modal/AcptModal';
export default function ProductModal() {
  const [rejmodal, setRejModal,] = useState(false);
  const [acptmodal, setAcptModal,] = useState(false);

  const setAcceptModal=()=>{
    setAcptModal(true);
  };

  const setRejectModal=()=>{
    setRejModal(true);
  };

  return (
    <>
      <div id='myModal' className={'productmodal'}>
        <div className={'modalcontent'}>
          <p className='proname'>Hoa tay ZARA</p>
          <div className={'infoseller'}>
            <p className={'infouser'}>NTH Thanh </p>
            <p className={'infotime'}>20/10/2023 22:22pm</p>
          </div>
          <div className='infoimage'>
            <img src='https://static.zara.net/assets/public/2017/005f/19e347078944/f2246337528a/01011002303-e1/01011002303-e1.jpg?ts=1708599894972&w=824'></img>
            <img src='https://static.zara.net/assets/public/2017/005f/19e347078944/f2246337528a/01011002303-e1/01011002303-e1.jpg?ts=1708599894972&w=824'></img>
            <img src='https://static.zara.net/assets/public/2017/005f/19e347078944/f2246337528a/01011002303-e1/01011002303-e1.jpg?ts=1708599894972&w=824'></img>
          </div>
          <div>
            <table className='protable'>
              <tr className='inforow'>
                <th className='inforth'>Giới tính:</th>
                <td className='infocol'>Dành cho nữ</td>
              </tr>
              <tr className='inforow'>
                <th className='inforth'>Kích cỡ:</th>
                <td>Phù hợp mọi kích cỡ</td>
              </tr>
              <tr className='inforow'>
                <th className='inforth'>Giá:</th>
                <td>1.500.000 VND</td>
              </tr>
              <tr className='inforow'>
                <th className='inforth'>Mô tả sản phẩm: </th>
                <td>
                  <p className='spcontent'>
                    Hoa tay ZARA phiên bản mạ vàng sản xuất 2022. Sản phẩm chỉ
                    mới sử dụng 2 lần nên còn rất mới, độ mới khoảng 95%. Sản
                    phẩm chỉ mới sử dụng 2 lần nên còn rất mới, độ mới khoảng
                    95%. Nếu có thắc mắc hãy liên hệ trực tiếp tôi. Tôi còn rất
                    nhiều sản phẩm tốt, hãy xem gian hàng của tôi.
                  </p>
                </td>
              </tr>
            </table>
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
          title={'Kiểm duyệt sản phẩm'}
          body={<AcptModal setAcptModal={setAcptModal} modalmessage={'Đã duyệt sản phẩm thành công'} />}
          setShow={setAcptModal}
        />
      )}
      {rejmodal && (
        <Modal
          title={'Kiểm duyệt sản phẩm'}
          body={<AcptModal setAcptModal={setRejModal} modalmessage={'Đã từ chối sản phẩm'} />}
          setShow={setRejModal}
        />
      )}
    </>
  );
}

ProductModal.propTypes = {
  setModal: PropTypes.func,
};
