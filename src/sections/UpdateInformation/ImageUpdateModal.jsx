import PropTypes from 'prop-types';
import React, { useState, } from 'react';
import './InformationUpdate.css';
export default function ImageUpdateModal({ admin, getInfo, }) {
  const [avatar, setAvatar,] = useState(null);
  function changeImage(e) {
    e.preventDefault();
    const form = new FormData();
    console.log(admin);
    console.log(avatar);
    form.append('avatar', avatar);
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

    getInfo();
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
  getInfo: PropTypes.func,
};
