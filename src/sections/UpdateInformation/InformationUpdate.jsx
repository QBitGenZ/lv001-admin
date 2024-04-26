import PropTypes from 'prop-types';
import React, { useState, } from 'react';
import './InformationUpdate.css';
import { getByAltText, } from '@testing-library/react';
// import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
// import { faAngleUp, } from '@fortawesome/free-solid-svg-icons';
export default function InformationUpdate({ admin, getInfo, }) {
  const [full_name, setFullname,] = useState(admin?.full_name);
  const [birthday, setBirthday,] = useState(admin?.birthday);
  const [gender, setGender,] = useState(admin.is_female);
  const [phone, setPhone,] = useState(admin?.phone);
  const [email, setEmail,] = useState(admin?.email);
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
      .then((res) => {
        if (res.status === 200){
          alert('Chỉnh sửa thông tin thành công');
          getInfo();
        }
        else return Promise.reject('Thông tin không hợp lệ');
      })
      .catch((error) => alert(error));
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
              value={full_name}
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
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
              />
            </div>
            <div className={'updatefieldblock gen'}></div>
            <div className={'updatefieldblock gen'}>
              <label
                className={'updatefield_title'}
                value={getByAltText}
                htmlFor='phone'
              >
                Giới tính
              </label>
              <select
                name='gender'
                value={gender}
                className='updatefield'
                onChange={(e) => setGender(e.target.value)}
              >
                <option value='false'>Nam</option>
                <option value='true'>Nữ</option>
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
              value={phone}
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
              className='updatefield'
              value={email}
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
  getInfo: PropTypes.func,
};
