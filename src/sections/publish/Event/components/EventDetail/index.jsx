import React from 'react';
import PropTypes from 'prop-types';
import './EventDetail.css';
import moment from 'moment';

export default function EventDetail({ event, setShow, }) {
  function changeDateLocal(time) {
    const parsedDatetime = moment(time, 'YYYY-MM-DD HH:mm:ss'); // Parse with PostgreSQL format
    const datetimeLocal = parsedDatetime.format('YYYY-MM-DD HH:mm:ss'); // Format for datetime-local input
    return datetimeLocal;
  }
  return (
    <div id={'Notification-Detail'}>
      <div className={'header'}>
        <div className={'title'}>{event?.name}</div>
        <div>
          <span className='eventtime'>From {changeDateLocal(event?.beginAt)} To {changeDateLocal(event?.endAt)}</span>
        </div>
        <span className={'create-at'}>{changeDateLocal(event?.created_at)}</span>
      </div>
      <div className={'body'}>{event?.description}</div>
      <div
        style={{
          float: 'right',
        }}
      >
        <button
          onClick={() => {
            setShow(false);
          }}
        >
          Đóng
        </button>
      </div>
    </div>
  );
}

EventDetail.propTypes = {
  event: PropTypes.object,
  setShow: PropTypes.func,
};
