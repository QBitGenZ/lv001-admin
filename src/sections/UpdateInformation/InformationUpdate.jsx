import PropTypes from 'prop-types';
import React, { useState, } from 'react';
import './InformationUpdate.css';
// import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
// import { faAngleUp, } from '@fortawesome/free-solid-svg-icons';
export default function InformationUpdate({ admin, }) {
  const [full_name, setFullname,] = useState([]);
  const [birthday, setBirthday,] = useState([]);
  const [gender, setGender,] = useState([]);
  const [phone, setPhone,] = useState([]);
  const [email, setEmail,] = useState([]);
  function changeInfor(e) {
    e.preventDefault();
    const form = new FormData();
    console.log(admin);
    form.append('email', email);
    form.append('full_name', full_name);
    form.append('phone', phone);
    form.append('is_female', gender);
    form.append('birthday', birthday);
    fetch(`${process.env.REACT_APP_HOST_IP}/user`, {
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
              id='full_name'
              name='full_name'
              className={'updatefield'}
              placeholder='Enter your name'
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>
          <div className={'birthgen'}>
            <div className={'updatefieldblock birth'}>
              <label className={'updatefield_title'} htmlFor='phone'>
                Ngày sinh
              </label>
              <input
                type='date'
                id='birthday'
                name='birthday'
                className='updatefield'
                placeholder='Enter your phone number'
                onChange={(e) => setBirthday(e.target.value)}
              />
            </div>
            <div className={'updatefieldblock gen'}></div>
            <div className={'updatefieldblock gen'}>
              <label className={'updatefield_title'} htmlFor='phone'>
                Giới tính
              </label>
              <select
                name='gender'
                className='updatefield'
                onChange={(e) => setGender(e.target.value)}
              >
                <option value='true'>Nam</option>
                <option value='false'>Nữ</option>
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
              onChange={(e) => setPhone(e.target.value)}
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
              onChange={(e) => setEmail(e.target.value)}
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
