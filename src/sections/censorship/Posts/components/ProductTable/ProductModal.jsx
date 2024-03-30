import PropTypes from 'prop-types';
import React, { useState, } from 'react';
import '../ProductTable/ProductModal.css';
import Modal from '../../../../../components/Modal';
import AcptModal from '../Modal/AcptModal';
import moment from 'moment';
export default function ProductModal({ product, getProducts, setModal, }) {
  const [rejmodal, setRejModal,] = useState(false);
  const [acptmodal, setAcptModal,] = useState(false);
  const updateStatus = (status) => {
    const form = new FormData();
    form.append('status',status);
    fetch(`${process.env.REACT_APP_HOST_IP}/products/${product?.id}/`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
      body: form,
    })
      .then((res) => res.json())
      .then(() => getProducts())
      .catch((error) => console.log(error));
  };
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
              return (
                <img
                  key={image.src}
                  src={`${process.env.REACT_APP_IMAGE_HOST_IP}${image.src}`}
                  alt={image.alt}
                />
              );
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
                  <p className='spcontent'>{product?.description}</p>
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
  getProducts: PropTypes.func,
  product: PropTypes.object,
};
