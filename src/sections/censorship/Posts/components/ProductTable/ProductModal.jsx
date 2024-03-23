import PropTypes from 'prop-types';
import React, { useState, } from 'react';
import '../ProductTable/ProductModal.css';
import Modal from '../../../../../components/Modal';
import AcptModal from '../Modal/AcptModal';
import moment from 'moment';
export default function ProductModal({ product, }) {
  const [rejmodal, setRejModal,] = useState(false);
  const [acptmodal, setAcptModal,] = useState(false);

  const setAcceptModal = () => {
    setAcptModal(true);
  };

  const setRejectModal = () => {
    setRejModal(true);
  };

  return (
    <>
      <div id='myModal' className={'productmodal'}>
        <div className={'modalcontent'}>
          <p className='proname'>{product?.name}</p>
          <div className={'infoseller'}>
            <p className={'infouser'}>{product?.user}</p>
            <p className={'infotime'}>
              {moment(product?.create_at).format('HH:mm DD/MM/YYYY')}
            </p>
          </div>
          <div className='infoimage'>
            {product.product_image.map((image) => {
              return <img key={image.src} src={`http://localhost:8000${image.src}`} alt={image.alt}/>;
            })}
          </div>
          <div>
            <table className='protable'>
              <tr className='inforow'>
                <th className='inforth'>Kích cỡ:</th>
                <td>{product?.size}</td>
              </tr>
              <tr className='inforow'>
                <th className='inforth'>Giá:</th>
                <td>{product?.price}</td>
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
          body={
            <AcptModal
              setAcptModal={setAcptModal}
              modalmessage={'Đã duyệt sản phẩm thành công'}
            />
          }
          setShow={setAcptModal}
        />
      )}
      {rejmodal && (
        <Modal
          title={'Kiểm duyệt sản phẩm'}
          body={
            <AcptModal
              setAcptModal={setRejModal}
              modalmessage={'Đã từ chối sản phẩm'}
            />
          }
          setShow={setRejModal}
        />
      )}
    </>
  );
}

ProductModal.propTypes = {
  setModal: PropTypes.func,
  product: PropTypes.object,
};
