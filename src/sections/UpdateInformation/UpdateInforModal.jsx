import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import Modal from '../../components/Modal';
import ImageUpdateModal from './ImageUpdateModal';
import InformationUpdate from './InformationUpdate';
export default function UpdateInforModal({ admin, getInfo, }) {
  const [image, setImage,] = useState(false);
  const [info, setInfo,] = useState(false);
  function si() {
    setImage(true);
  }
  function sil() {
    setInfo(true);
  }

  const getInfoAgain = () => {
    getInfo();
    setImage(false);
    setInfo(false);
  };

  return (
    <>
      <div className={'Avatara'}>
        <p className={'updatetitle'}>Ảnh đại diện</p>
        <div className={'circle-image'}>
          <img
            src={`${process.env.REACT_APP_IMAGE_HOST_IP}${admin.avatar}`}
            alt={'avatar'}
          />
        </div>

        <p className={'updateaction'} onClick={si}>
          chỉnh sửa
        </p>
      </div>
      <div className={'Infora'}>
        <p className={'updatetitle'}>Thông tin</p>
        <table>
          <tr className={'row'}>
            <td className={'th'}>Tên</td>
            <td>:</td>
            <td>{admin?.full_name}</td>
          </tr>
          <tr>
            <td className={'th'}>Ngày sinh</td>
            <td>:</td>
            <td>{admin?.birthday}</td>
          </tr>
          <tr>
            <td className={'th'}>Giới tính</td>
            <td>:</td>
            <td>{admin?.is_female ? 'Nữ' : 'Nam'}</td>
          </tr>
          <tr>
            <td className={'th'}>Số điện tdoại</td>
            <td>:</td>
            <td>{admin?.phone}</td>
          </tr>
          <tr>
            <td className={'th'}>Email</td>
            <td>:</td>
            <td>{admin?.email}</td>
          </tr>
          <tr>
            <td className={'th'}>Chức vụ</td>
            <td>:</td>
            <td>Admin</td>
          </tr>
        </table>
        <p className={'updateaction'} onClick={sil}>
          chỉnh sửa
        </p>
      </div>
      {image && (
        <Modal
          title={'Chỉnh sửa ảnh đại diện'}
          body={<ImageUpdateModal admin={admin} getInfo={getInfoAgain} />}
          setShow={setImage}
        />
      )}
      {info && (
        <Modal
          title={'Chỉnh sửa thông tin'}
          body={<InformationUpdate admin={admin} getInfo={getInfoAgain} />}
          setShow={setInfo}
        />
      )}
    </>
  );
}

UpdateInforModal.propTypes = {
  admin: PropTypes.object,
  getInfo: PropTypes.func,
};
