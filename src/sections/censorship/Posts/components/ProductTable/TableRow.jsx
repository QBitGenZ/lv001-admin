import PropTypes from 'prop-types';
import React, { useState, } from 'react';
import ProductModal from './ProductModal';
import Modal from '../../../../../components/Modal';
import moment from 'moment';
export default function TableRow({ product, }) {
  const [modal, setModal,] = useState(false);

  const toggleModal = () => {
    setModal(true);
  };
  return (
    <>
      <tr onClick={toggleModal} className='ModalBtn propdtabletr'>
        <td className='prodtabletd prodtabletdth'>{product?.user}</td>
        <td className='prodtabletd prodtabletdth'>{product?.name}</td>
        <td className='prodtabletd prodtabletdth'>{moment(product?.create_at).format('HH:mm DD/MM/YYYY')}</td>
        <td className='prodtabletd prodtabletdth'>
          <p
            className={
              product.status == 'Đã duyệt'
                ? 'approved'
                : product.status == 'Từ chối'
                  ? 'rejected'
                  : product.status == 'Báo cáo'
                    ? 'reported'
                    : 'notapproved'
            }
          >
            {product.status}
          </p>{' '}
        </td>
      </tr>
      {modal && (
        <Modal
          title={'Kiểm duyệt sản phẩm'}
          body={<ProductModal setModal={setModal} product={product}/>}
          setShow={setModal}
        />
      )}
    </>
  );
}

TableRow.propTypes = {
  product:PropTypes.object,
};
