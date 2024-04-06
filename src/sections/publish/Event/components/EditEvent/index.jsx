import React, { useState, } from 'react';
import './AddEvent.css';
import PropTypes from 'prop-types';
import moment from 'moment';
export default function EditEvent({ event, setShowEdit, loadEvent, }) {
  console.log(event);
  const [title, setTitle,] = useState(event?.name);
  const [beginDate, setBeginDate,] = useState(event?.beginAt);
  const [endDate, setEndDate,] = useState(event?.endAt);
  const [content, setContent,] = useState(event?.description);
  function editEvent(e) {
    e.preventDefault();
    const form = new FormData();
    form.append('name', title);
    form.append('description', content);
    form.append('beginAt', changeTime(beginDate));
    form.append('endAt', changeTime(endDate));
    fetch(`${process.env.REACT_APP_HOST_IP}/events/${event?.id}/`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
      body: form,
    })
      .then((res) => res.json())
      .then(()=>alert('Cập nhật sự kiện thành công'))
      .then(() => setShowEdit(false))
      .then(() => loadEvent())
      .catch((error) => alert(error));
  }
  function changeTime(time) {
    const parsedDatetime = moment(time, 'YYYY-MM-T HH:mm:ss'); // Parse with iOS format
    const postgresDatetime = parsedDatetime.format('YYYY-MM-DD HH:mm:ss'); // Format for PostgreSQL
    return postgresDatetime;
  }
  function changeDateLocal(time) {
    const parsedDatetime = moment(time, 'YYYY-MM-DD HH:mm:ss'); // Parse with PostgreSQL format
    const datetimeLocal = parsedDatetime.format('YYYY-MM-DD HH:mm:ss'); // Format for datetime-local input
    return datetimeLocal;
  }
  return (
    <div id={'Add-Event'}>
      <table>
        <tr>
          <td colSpan={2}>
            <label>Tiêu đề</label>
            <input
              type={'text'}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>Từ</label>
            <input
              type={'datetime-local'}
              value={changeDateLocal(event?.beginAt)}
              onChange={(e) => setBeginDate(e.target.value)}
            />
          </td>
          <td>
            <label>Đến</label>
            <input
              type={'datetime-local'}
              value={changeDateLocal(event?.endAt)}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <label>Đơn vị từ thiện</label>
            <textarea
              cols={20}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td
            colSpan={2}
            style={{
              textAlign: 'right',
            }}
          >
            <button onClick={editEvent}>Cập nhật</button>
          </td>
        </tr>
      </table>
    </div>
  );
}

EditEvent.propTypes = {
  event: PropTypes.object,
  setShowEdit: PropTypes.func,
  loadEvent: PropTypes.func,
};
