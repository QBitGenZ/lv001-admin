import React from 'react';
import PropTypes from 'prop-types';
export default function Logins1({ activeComponent, setActiveComponent, }) {
  const handleComponentChange = () => {
    setActiveComponent(
      activeComponent === 'Component1' ? 'Component2' : 'Component1'
    );
  };
  return (
    <div className='container loginini'>
      <div className='row spacelogin'></div>
      <div className='row'>
        <div className='col-2'></div>
        <div className='col-4'>
          <img
            className='sunflower'
            src={process.env.PUBLIC_URL + 'assets/images/login/sunflower.jpg'}
          ></img>
        </div>
        <div className='col-4 align-self-center'>
          <div>
            <img
              className='logologin'
              src={process.env.PUBLIC_URL + 'assets/images/sidebar/logo.png'}
              alt={'logo'}
            />
          </div>
          <p className='dangnhap' onClick={handleComponentChange}>
            ĐĂNG NHẬP
          </p>
        </div>
        <div className='col-2'></div>
      </div>
    </div>
  );
}

Logins1.propTypes = {
  activeComponent: PropTypes.string,
  setActiveComponent: PropTypes.func,
};
