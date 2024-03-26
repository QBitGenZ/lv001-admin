import PropTypes from 'prop-types';
import React, { useState, } from 'react';
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
      <div>
        <form action='#'>
          {' '}
          <h2>Contact Form</h2>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            name='name'
            placeholder='Enter your name'
            onChange={(e) => setInfor(e.target.value)}
          />
          <label htmlFor='phone'>Phone Number:</label>
          <input
            type='tel'
            id='phone'
            name='phone'
            placeholder='Enter your phone number'
            onChange={(e) => setInfor(e.target.value)}
          />
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Enter your email address'
            onChange={(e) => setInfor(e.target.value)}
          />
          <button type='submit' onClick={changeInfor}>Submit</button>
        </form>
      </div>
    </>
  );
}

InformationUpdate.propTypes = {
  admin: PropTypes.object,
};
