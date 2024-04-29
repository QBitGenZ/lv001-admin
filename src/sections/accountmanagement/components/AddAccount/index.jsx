import React, { useState, } from 'react';
import PropTypes from 'prop-types';

export default function AddAccount({ setShowAdd, loadAccount, }) {
  const [username, setUsername,] = useState();
  const [email, setEmail,] = useState();
  const [phone, setPhone,] = useState();
  const [full_name, setFull_name,] = useState();
  const [password, setPassword,] = useState();
  function addNotification(e) {
    e.preventDefault();
    const form = new FormData();
    form.append('username', username);
    form.append('email', email);
    form.append('phone', phone);
    form.append('full_name', full_name);
    form.append('password', password);
    fetch(`${process.env.REACT_APP_HOST_IP}/admin-user`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
      body: form,
    })
      .then((res) => {
        if (res.status === 201) {
          alert('Thêm tài khoản thành công');
          loadAccount();
          setShowAdd(false);
        } else {
          return Promise.reject('Thêm tài khoản không thành công');
        }
      })
      .catch((error) => alert(error));
  }

  return (
    <div id={'Add-Account'}>
      <label>Tên tài khoản</label>
      <textarea
        rows={2}
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <label>Email</label>
      <textarea
        rows={2}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Số điện thoại</label>
      <textarea
        rows={2}
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
      />
      <label>Họ và tên</label>
      <textarea
        rows={2}
        onChange={(e) => setFull_name(e.target.value)}
        value={full_name}
      />
      <label>Mật khẩu</label>
      <input
        className={'input-password'}
        type='password'
        rows={2}
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <div
        style={{
          float: 'right',
        }}
      >
        <button onClick={addNotification}>Lưu</button>
      </div>
    </div>
  );
}

AddAccount.propTypes = {
  setShowAdd: PropTypes.func,
  loadAccount: PropTypes.func,
};
