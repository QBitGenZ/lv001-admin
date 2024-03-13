import React from 'react';
import './Notification.css';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faPen, faPlus, } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import { notifications, } from '../../../fakes/Notifications';

export default function NotificationSection() {
  return (
    <div id={'Notification-Section'}>
      <div className={'header'}>
        <div className={'quantity-block block'}>
          <span>Tổng số thông báo</span>
          <span className={'number'}>10</span>
        </div>
        <div className={'add-block block'}>
          <FontAwesomeIcon icon={faPlus}/>
          <span className={'title'}>Thêm thông báo mới</span>
        </div>
        <input className={'block search-input'} type={'text'} style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}assets/images/publish/search-icon.png)`,
        }} placeholder={'Tìm kiếm...'}/>
      </div>
      <div className={'body'}>
        {notifications.map((value) => <NotificationItem key={value.id} notification={value}/>)}
      </div>
    </div>
  );
}

function NotificationItem({ notification, }) {
  return (
    <div className={'Notification-Item'}>
      <div className={'title-container'}>
        <div className={'title'}>{notification.title}</div>
        <div className={'create_at'}>{notification.created_at}</div>
      </div>
      <div className={'edit-container'}>
        <span>Chỉnh sửa</span>
        <FontAwesomeIcon icon={faPen}/>
      </div>
    </div>
  );
}

NotificationItem.propTypes = {
  notification: PropTypes.object.isRequired,
};