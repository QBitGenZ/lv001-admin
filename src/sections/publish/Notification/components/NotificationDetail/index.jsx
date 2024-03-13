import React from 'react';
import PropTypes from 'prop-types';
import './NotificationDetail.css';

export default function NotificationDetail({ title, create_at, text, setShow, }) {
  return (<div id={'Notification-Detail'}>
    <div className={'header'}>
      <div className={'title'}>
        {title}
      </div>
      <span className={'create-at'}>{create_at}</span>
    </div>
    <div className={'body'}>
      {text}
    </div>
    <div style={{
      float: 'right',
    }}>
      <button onClick={() => { setShow(false); }}>Đóng</button>
    </div>
  </div>);
}

NotificationDetail.propTypes = {
  title: PropTypes.string.isRequired,
  create_at: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  setShow: PropTypes.func.isRequired,
};