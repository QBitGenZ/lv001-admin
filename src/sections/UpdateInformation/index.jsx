import React, { useEffect, useState, } from 'react';
import './UpdateInformation.css';
import Modal from '../../components/Modal';
import UpdateInforModal from './UpdateInforModal';
export default function UpdateInformation() {
  const [infor, setInfor,] = useState(false);
  const setInforModal = () => {
    setInfor(true);
  };
  function logout(e) {
    e.preventDefault();
    localStorage.clear('access');
    // window.location.href = '';
  }
  const [admin, setAdmin,] = useState([]);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/v1/info', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div id={'UpdateInformation'}>
        <div className={'container'}>
          <img
            src={`http://localhost:8000${admin.avatar}`}
            alt={'avatar'}
            className={'avatar-like'}
          />
          <div className={'small-container'}>
            <p className={'name'}>{admin?.full_name}</p>
            <p className={'position'}>Admin</p>
          </div>
          <div className={'button-container'}>
            <p className={'logout'} onClick={logout}>
              Đăng xuất
            </p>
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
              <td>{admin.email}</td>
            </tr>
            <tr>
              <td className={'th'}>Chức vụ</td>
              <td>:</td>
              <td>Admin</td>
            </tr>
          </table>
        </div>
      </div>
      {infor && (
        <Modal
          title={'Chỉnh sửa thông tin'}
          body={<UpdateInforModal setAcptModal={setInfor} admin={admin} />}
          setShow={setInfor}
        />
      )}
    </>
  );
}
