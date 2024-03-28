import PropTypes from 'prop-types';
import React, { useState, } from 'react';
import './InformationUpdate.css';
export default function ImageUpdateModal({ admin, }) {
  const [avatar, setAvatar,] = useState(null);
  function changeImage(e) {
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
    // form.append('birthday', admin.birthday);
    form.append('avatar', avatar);
    form.append('addresses', admin.addresses);
    form.append('status', admin.status);
    form.append('created_at', admin.created_at);
    form.append('description', admin.description||'?');
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
        <form>
          <label htmlFor='email'>Image: </label>
          <input className='imageload'
            type='file'
            id='avatar'
            name='avatar'
            placeholder='Choose your picture'
            onChange={(e) => setAvatar(e.target.files[0])}
          />
          <button className='submitbtn' type='submit' onClick={changeImage}>
            Submit
          </button>
        </form>
        <br/>
      </div>
    </>
  );
}

ImageUpdateModal.propTypes = {
  admin: PropTypes.object,
};
