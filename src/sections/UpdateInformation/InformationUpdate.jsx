import PropTypes from 'prop-types';
import React, { useState, } from 'react';
import './InformationUpdate.css';
// import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
// import { faAngleUp, } from '@fortawesome/free-solid-svg-icons';
export default function InformationUpdate({ admin, }) {
  const [avatar, setInfor,] = useState([]);
  function changeInfor(e) {
    e.preventDefault();
    const form = new FormData();
    console.log(admin);
    console.log(avatar);
    form.append('id', admin.id);
    form.append('username', admin.username);
    form.append('email', admin.email);
    form.append('full_name', admin.full_name);
    form.append('is_philanthropist', admin.is_philanthropist);
    form.append('is_seller', admin.is_seller);
    form.append('phone', admin.phone);
    form.append('is_female', admin.is_female);
    form.append('birthday', admin.birthday);
    form.append('avatar', avatar);
    form.append('addresses', admin.addresses);
    form.append('status', admin.status);
    form.append('created_at', admin.created_at);
    form.append('description', admin.description);
    form.append('password', admin.password);
    fetch('http://127.0.0.1:8000/v1/user', {
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
      <div id={'UpdateForm'}>
        <form action='#'>
          {' '}
          <div className={'updatefieldblock'}>
            <label className={'updatefield_title'} htmlFor='name'>
              Họ tên
            </label>
            <br />
            <input
              type='text'
              id='name'
              name='name'
              className={'updatefield'}
              placeholder='Enter your name'
              onChange={(e) => setInfor(e.target.value)}
            />
          </div>
          <div className={'birthgen'}>
            <div className={'updatefieldblock birth'}>
              <label className={'updatefield_title'} htmlFor='phone'>
                Ngày sinh
              </label>
              <input
                type='date'
                id='phone'
                name='phone'
                className='updatefield'
                placeholder='Enter your phone number'
                onChange={(e) => setInfor(e.target.value)}
              />
            </div>
            <div className={'updatefieldblock gen'}></div>
            <div className={'updatefieldblock gen'}>
              <label className={'updatefield_title'} htmlFor='phone'>
                Giới tính
              </label>
              <select name='gender' className='updatefield'>
                <option value='Nam'>Nam</option>
                <option value='Nữ'>Nữ</option>
              </select>
            </div>
          </div>
          <div className={'updatefieldblock'}>
            <label className={'updatefield_title'} htmlFor='phone'>
              Số điện thoại
            </label>
            <input
              type='tel'
              id='phone'
              name='phone'
              className='updatefield'
              placeholder='Enter your phone number'
              onChange={(e) => setInfor(e.target.value)}
            />
          </div>
          <div className={'updatefieldblock'}>
            <label className={'updatefield_title'} htmlFor='email'>
              Email:
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className={'updatefield'}
              placeholder='Enter your email address'
              onChange={(e) => setInfor(e.target.value)}
            />
          </div>
          <br />
          <div className={'updatefieldblockbtn'}>
            <button type='submit' onClick={changeInfor} className={'submitbtn'}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

InformationUpdate.propTypes = {
  admin: PropTypes.object,
};
