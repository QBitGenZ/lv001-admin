import PropTypes from 'prop-types';
import React, { useState, } from 'react';
import '../ProductTable/ProductModal.css';
import Modal from '../../../../../components/Modal';
import AcptModal from '../Modal/AcptModal';
import moment from 'moment';
export default function ProductModal({ product, }) {
  const [rejmodal, setRejModal,] = useState(false);
  const [acptmodal, setAcptModal,] = useState(false);
  const [status, setStatus,] = useState('HHGG');
  const setAcceptModal = () => {
    setAcptModal(true);
    setStatus('Từ chối');
    console.log(status);
    changeStatus;
  };

  const setRejectModal = () => {
    setRejModal(true);
    setStatus('Từ chối');
    console.log(status);
    changeStatus;
  };
  function changeStatus(e) {
    e.preventDefault();
    const form = new FormData();
    console.log(status);
    form.append('status', status);
    fetch('http://127.0.0.1:8000/v1/products/', {
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
                  src={`http://localhost:8000${image.src}`}
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
          <button
            name='Đã duyệt'
            onClick={setAcceptModal}
            className={'close acpt'}
          >
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
