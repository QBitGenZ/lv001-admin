import React, { useState, } from 'react';
import './Event.css';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faPen, faPlus, } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import { notifications, } from '../../../fakes/Notifications';
import { Modal, } from '../../../components';
import { AddEvent, } from './components';

export default function EventSection() {
  const [showAdd, setShowAdd, ] = useState(false);

  return (
    <div id={'Event-Section'}>
      <div className={'header'}>
        <div className={'quantity-block block'}>
          <span>Tổng số sự kiện</span>
          <span className={'number'}>10</span>
        </div>
        <div className={'add-block block'} onClick={()=>setShowAdd(true)}>
          <FontAwesomeIcon icon={faPlus}/>
          <span className={'title'}>Thêm sự kiện mới</span>
        </div>
      </div>
      <div className={'body'}>
        {notifications.map((value) => <EventItem key={value.id} event={value}/>)}
      </div>
      {showAdd && <Modal setShow={setShowAdd} title={'Thêm sự kiện'} body={<AddEvent/>}/> }
    </div>
  );
}

function EventItem({ event, }) {
  return (
    <div className={'Event-Item'}>
      <div className={'title-container'}>
        <img
          src={process.env.PUBLIC_URL + 'assets/images/publish/event-con.png'}
          alt={'Event icon'}
          style={{
            display: 'inline-block',
            float: 'left',
            width: '5%',
          }}
        />
        <div className={'title'}>{event.title}</div>
        <div className={'create_at'}>{event.created_at}</div>
      </div>
      <div className={'edit-container'}>
        <span>Chỉnh sửa</span>
        <FontAwesomeIcon icon={faPen} />
      </div>
    </div>
  );
}

EventItem.propTypes = {
  event: PropTypes.object.isRequired,
};