import React, { useEffect, useState, } from 'react';
import './Notification.css';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faPen, faPlus, } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { Modal, } from '../../../components';
import { AddNotification, } from './components';
import NotificationDetail from './components/NotificationDetail';
import EditNotification from './components/EditNotification';
import { Pagination, } from '../../../components';

export default function NotificationSection() {
  const [showAdd, setShowAdd,] = useState(false);
  const handleClickAdd = () => setShowAdd(true);
  const [notifs, setNotif, ] = useState([]);
  const [currentPage, setCurrentPage,] = useState(1);
  const [totalPage, setTotalPage,] = useState(0);
  useEffect(()=>{
    loadNotif();
  },[currentPage,]);
  const loadNotif = ()=>{
    fetch(`${process.env.REACT_APP_HOST_IP}/notifications/?page=${currentPage}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data)=>{
        setNotif(data.data);
        setTotalPage(data?.meta?.total_pages);
      })
      .catch((error) => alert(error));
  };

  return (
    <div id={'Notification-Section'}>
      <div className={'header'}>
        <div className={'quantity-block block'}>
          <span>Tổng số thông báo</span>
          <span className={'number'}>{notifs.length}</span>
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
        {notifs.map((notif) => <NotificationItem key={notif?.id} notification={notif} loadNotif={loadNotif}/>)}
      </div>
      <Pagination
        totalPage={totalPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
      {showAdd && <Modal setShow={setShowAdd} title={'Thêm thông báo'} body={<AddNotification setShowAdd={setShowAdd} loadNotif={loadNotif}/>}/>}
    </div>
  );
}

function NotificationItem({ notification, loadNotif, }) {
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
        body={<EditNotification notif={notification} setShowEdit={setShowEdit} loadNotif={loadNotif}/>}/>}

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
  loadNotif: PropTypes.func,
};