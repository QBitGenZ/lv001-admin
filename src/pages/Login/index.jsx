// import React from 'react';
import React, { useState, } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Login.css';
import PropTypes from 'prop-types';
import Logins1 from './Logins1';
import Logins2 from './Logins2';
export default function Login({ setLogin, }) {
  const [activeComponent, setActiveComponent, ] = useState('Component1');
  return (
    <>
      {activeComponent === 'Component1' && <Logins1 activeComponent={activeComponent} setActiveComponent={setActiveComponent} />}
      {activeComponent === 'Component2' && <Logins2 setLogin={setLogin}/>}
      
    </>
  );
}

Login.propTypes = {
  setLogin: PropTypes.func,
};
