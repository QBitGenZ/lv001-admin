import React, { useState, useEffect, } from 'react';
import './Event.css';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faPen, } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import EventDetail from './components/EventDetail/index.jsx';
import { Modal, } from '../../../components';
import moment from 'moment';
import { AddEvent, EditEvent, } from './components';
import { Pagination, } from '../../../components';

export default function EventSection() {
  const [showAdd, setShowAdd,] = useState(false);
  const [events, setEvent,] = useState([]);
  const [currentPage, setCurrentPage,] = useState(1);
  const [totalPage, setTotalPage,] = useState(0);
  const [search, setSearch,] = useState('');
  useEffect(() => {
    if (search.length != 0) {
      searchEvent();
    } else {
      loadEvent();
    }
  }, [currentPage,search,]);

  const loadEvent = () => {
    fetch(`${process.env.REACT_APP_HOST_IP}/events/?page=${currentPage}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setEvent(data.data);
        setTotalPage(data?.meta?.total_pages);
      })
      .catch((error) => console.log(error));
  };
  const searchEvent = () => {
    fetch(
      `${process.env.REACT_APP_HOST_IP}/events/search/?page=${currentPage}&keyword=${search}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access')}`,
          Accept: 'application/json',
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setEvent(data.data);
        setTotalPage(data?.meta?.total_pages);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div id={'Event-Section'}>
      <div className={'header'}>
        <div className={'quantity-block block'}>
          <span>Tổng số sự kiện</span>
          <span className={'number'}>{events.length}</span>
        </div>
        <input
          className={'block search-input'}
          type={'text'}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}assets/images/publish/search-icon.png)`,
          }}
          placeholder={'Tìm kiếm...'}
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* <div className={'add-block block'} onClick={() => setShowAdd(true)}>
          <FontAwesomeIcon icon={faPlus} />
          <span className={'title'}>Thêm sự kiện mới</span>
        </div> */}
      </div>
      <div className={'body'}>
        {events.map((event) => (
          <EventItem key={event?.id} event={event} loadEvent={loadEvent} />
        ))}
      </div>
      <Pagination
        totalPage={totalPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
      {showAdd && (
        <Modal
          setShow={setShowAdd}
          title={'Thêm sự kiện'}
          body={<AddEvent setShowAdd={setShowAdd} loadEvent={loadEvent} />}
        />
      )}
    </div>
  );
}

function EventItem({ event, loadEvent, }) {
  const [showDetail, setShowDetail,] = useState(false);
  function changeDateLocal(time) {
    const parsedDatetime = moment(time, 'YYYY-MM-DD HH:mm:ss'); // Parse with PostgreSQL format
    const datetimeLocal = parsedDatetime.format('YYYY-MM-DD HH:mm:ss'); // Format for datetime-local input
    return datetimeLocal;
  }
  const [showEdit, setShowEdit,] = useState(false);
  return (
    <>
      {showDetail && (
        <Modal
          setShow={setShowDetail}
          title={'Chi tiết thông báo'}
          body={<EventDetail event={event} setShow={setShowDetail} />}
        />
      )}
      <div className={'Event-Item'} onClick={() => setShowDetail(true)}>
        <div className={'title-container'}>
          {/* <img
          src={process.env.PUBLIC_URL + 'assets/images/publish/event-con.png'}
          alt={'Event icon'}
          style={{
            display: 'inline-block',
            float: 'left',
            width: '5%',
          }}
        /> */}
          <div className={'title'}>{event?.name}</div>
          <div className={'create_at'}>
            {changeDateLocal(event?.created_at)}
          </div>
        </div>
        <div className={'edit-container'} onClick={() => setShowEdit(true)}>
          <span>Chỉnh sửa</span>
          <FontAwesomeIcon icon={faPen} />
        </div>
        {showEdit && (
          <Modal
            setShow={setShowEdit}
            title={'Chỉnh sửa sự kiện'}
            body={
              <EditEvent
                event={event}
                setShowEdit={setShowEdit}
                loadEvent={loadEvent}
              />
            }
          />
        )}
      </div>
    </>
  );
}

EventItem.propTypes = {
  event: PropTypes.object.isRequired,
  loadEvent: PropTypes.func,
};
