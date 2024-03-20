import React, { useEffect, } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faClose, } from '@fortawesome/free-solid-svg-icons';
import './Modal.css';

export default function Modal({ title, body, setShow, }) {

  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return(
    <div id={'Modal'}>
      <div className={'back-container'}></div>
      <div className={'main-container'}>
        <div className={'header'}>
          <div className={'title'}>{title}</div>
          <div className={'close-button'} onClick={() => setShow(false)}>
            <FontAwesomeIcon icon={faClose}/>
          </div>
        </div>
        <div className={'body'}>{body}</div>

      </div>
    </div>
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.object.isRequired,
  setShow: PropTypes.func.isRequired,
};