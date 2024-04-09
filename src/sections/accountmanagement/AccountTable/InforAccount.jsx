import React from 'react';
import PropTypes from 'prop-types';
import '../accountmanagement.css';
export default function InforAccount({ account, setModal, loadAccount, }) {
  console.log(account);
  function deleteAccount(e) {
    e.preventDefault();
    const form = new FormData();
    fetch(`${process.env.REACT_APP_HOST_IP}/admin-user?username=${account?.username}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
      body: form,
    })
      .then((res) => res.json())
      .then(() => alert('Xóa tài khoản thành công'))
      .then(() => loadAccount())
      .then(() => setModal(false))
      .catch((error) => alert(error));
  }
  return (
    <div id={'account-container'}>
      <div className={'info-container'}>
        <table className={'infortable'}>
          <tr>
            <td colSpan={3} className='table-name'>
              Thông tin tài khoản
            </td>
          </tr>
          <tr>
            <td className={'th'}>Tên</td>
            <td>:</td>
            <td className={'th'}>{account?.full_name}</td>
          </tr>
          <tr>
            <td className={'th'}>Ngày sinh</td>
            <td>:</td>
            <td className={'th'}>{account?.birthday}</td>
          </tr>
          <tr>
            <td className={'th'}>Giới tính</td>
            <td>:</td>
            <td className={'th'}>{account?.is_female ? 'Nữ' : 'Nam'}</td>
          </tr>
          <tr>
            <td className={'th'}>Số điện thoại</td>
            <td>:</td>
            <td className={'th'}>{account?.phone}</td>
          </tr>
          <tr>
            <td className={'th'}>Email</td>
            <td>:</td>
            <td className={'th'}>{account?.email}</td>
          </tr>
          <tr>
            <td className={'th'}>Chức vụ</td>
            <td>:</td>
            <td className={'th'}>Admin</td>
          </tr>
        </table>
      </div>
      <div>
        <button className={'delete-button'} onClick={deleteAccount}>Xóa tài khoản</button>
      </div>
    </div>
  );
}

InforAccount.propTypes = {
  account: PropTypes.object,
  setModal: PropTypes.func,
  loadAccount: PropTypes.func,
};
