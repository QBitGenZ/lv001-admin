import React, { useState, } from 'react';
import './Notification.css';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faPen, faPlus, } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import { notifications, } from '../../../fakes/Notifications';
import { Modal, } from '../../../components';
import { AddNotification, } from './components';
import NotificationDetail from './components/NotificationDetail';
import EditNotification from './components/EditNotification';

export default function NotificationSection() {
  const [showAdd, setShowAdd,] = useState(false);

  const handleClickAdd = () => setShowAdd(true);

  return (
    <div id={'Notification-Section'}>
      <div className={'header'}>
        <div className={'quantity-block block'}>
          <span>Tổng số thông báo</span>
          <span className={'number'}>10</span>
        </div>
        <div className={'add-block block'} onClick={handleClickAdd}>
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
      {showAdd && <Modal setShow={setShowAdd} title={'Thêm thông báo'} body={<AddNotification/>}/>}
    </div>
  );
}

function NotificationItem({ notification, }) {
  const [showDetail, setShowDetail,] = useState(false);
  const [showEdit, setShowEdit,] = useState(false);

  return (
    <>
      {showDetail && <Modal setShow={setShowDetail} title={'Chi tiết thông báo'}
        body={<NotificationDetail title={notification.title}
          text={notification.text}
          create_at={notification.created_at}
          setShow={setShowDetail}/>}/>}

      {showEdit && <Modal setShow={setShowEdit} title={'Chi tiết thông báo'}
        body={<EditNotification oldText={notification.text} oldTitle={notification.title}/>}/>}

      <div className={'Notification-Item'} onClick={() => setShowDetail(true)}>
        <div className={'title-container'}>
          <div className={'title'}>{notification.title}</div>
          <div className={'create_at'}>{notification.created_at}</div>
        </div>
        <div className={'edit-container'} onClick={() => setShowEdit(true)}>
          <span>Chỉnh sửa</span>
          <FontAwesomeIcon icon={faPen}/>
        </div>
      </div>
    </>
  );
}

NotificationItem.propTypes = {
  notification: PropTypes.object.isRequired,
};