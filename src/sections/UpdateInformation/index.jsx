import React, { useState, } from 'react';
import './UpdateInformation.css';
import Modal from '../../components/Modal';
import UpdateInforModal from './UpdateInforModal';
export default function UpdateInformation() {
  const [infor, setInfor,] = useState(false);
  const setInforModal = () => {
    setInfor(true);
  };
  return (
    <>
      <div id={'UpdateInformation'}>
        <div className={'container'}>
          <img
            src={process.env.PUBLIC_URL + 'assets/images/sidebar/avatar.png'}
            alt={'avatar'}
            className={'avatar-like'}
          />
          <div className={'small-container'}>
            <p className={'name'}>Christant</p>
            <p className={'position'}>Admin</p>
          </div>
          <div className={'button-container'}>
            <p className={'logout'}>Đăng xuất</p>
            <p className={'update'} onClick={setInforModal}>
              Chỉnh sửa thông tin
            </p>
          </div>
        </div>
        <div className={'info-container'}>
          <table>
            <tr className={'row'}>
              <td className={'th'}>Tên</td>
              <td>:</td>
              <td>Christant Solarionari</td>
            </tr>
            <tr>
              <td className={'th'}>Ngày sinh</td>
              <td>:</td>
              <td>16/11/2000</td>
            </tr>
            <tr>
              <td className={'th'}>Giới tính</td>
              <td>:</td>
              <td>Nam</td>
            </tr>
            <tr>
              <td className={'th'}>Số điện tdoại</td>
              <td>:</td>
              <td>012324241323</td>
            </tr>
            <tr>
              <td className={'th'}>Email</td>
              <td>:</td>
              <td>imchristant13@gmail.com</td>
            </tr>
            <tr>
              <td className={'th'}>Chức vụ</td>
              <td>:</td>
              <td>admin1</td>
            </tr>
          </table>
        </div>
      </div>
      {infor && (
        <Modal
          title={'Chỉnh sửa thông tin'}
          body={<UpdateInforModal setAcptModal={setInfor} />}
          setShow={setInfor}
        />
      )}
    </>
  );
}
