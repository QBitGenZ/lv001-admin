import React, { useState, } from 'react';
import PropTypes from 'prop-types';

export default function Login({ setLogin, }) {
  const [username, setUsername,] = useState('');
  const [password, setPassword,] = useState('');
  function logine(e) {
    e.preventDefault();
    const form = new FormData();
    form.append('username', username);
    form.append('password', password);
    console.log(username);
    console.log(password);
    fetch('http://127.0.0.1:8000/v1/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: form,
    })
      .then((res) => {
        if (res.status === 200) return res.json();
        else return Promise.reject('Không đúng thông tin đăng nhập') ;
      })
      .then((data) => {
        console.log(data);
        localStorage.setItem('access', data?.access);
        setLogin(true);
        console.log(data);
      })
      .catch((error) => alert(error));
  }
  return (
    <>
      <div>
        <img
          src={process.env.PUBLIC_URL + 'assets/images/sidebar/logo.png'}
          alt={'logo'}
        />
      </div>
      <p>TRUY CẬP VÀO TÀI KHOẢN CỦA BẠN</p>
      <div>
        <form>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            type='text'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button onClick={logine}>Login</button>
        </form>
      </div>
    </>
  );
}

Login.propTypes = {
  setLogin: PropTypes.func,
};
