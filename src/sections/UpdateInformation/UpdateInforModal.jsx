import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import Modal from '../../components/Modal';
import ImageUpdateModal from './ImageUpdateModal';
import InformationUpdate from './InformationUpdate';
export default function UpdateInforModal({ admin, }) {
  const [image, setImage,] = useState(false);
  const [info, setInfo,] = useState(false);
  function si() {
    setImage(true);
  }
  function sil(){
    setInfo(true);
  }
  return (
    <>
      <div className={'Avatara'}>
        <p className={'updatetitle'}>Ảnh đại diện</p>
        <img
          src={`http://localhost:8000${admin.avatar}`}
          alt={'avatar'}
          className={'avatar-likee'}
        />
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
            <td>{admin?.brithday}</td>
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
        <p className={'updateaction'} onClick={sil}>chỉnh sửa</p>
      </div>
      {image && (
        <Modal
          title={'Chỉnh sửa ảnh đại diện'}
          body={<ImageUpdateModal admin={admin}/>}
          setShow={setImage}
        />
      )}
      {info && (
        <Modal
          title={'Chỉnh sửa thông tin'}
          body={<InformationUpdate admin={admin}/>}
          setShow={setInfo}
        />
      )}
    </>
  );
}

UpdateInforModal.propTypes = {
  admin: PropTypes.object,
};
