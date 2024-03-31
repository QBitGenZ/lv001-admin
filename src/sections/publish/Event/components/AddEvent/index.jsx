import React, { useState, } from 'react';
import './AddEvent.css';
import moment from 'moment';

export default function AddEvent() {
  const [title, setTitle,] = useState();
  const [beginDate, setBeginDate,] = useState();
  const [endDate, setEndDate,] = useState();
  const [content, setContent,] = useState();
  function addEvent(e) {
    e.preventDefault();
    const form = new FormData();
    form.append('name', title);
    form.append('description', content);
    form.append('beginAt', changeTime(beginDate));
    form.append('endAt', changeTime(endDate));
    fetch(`${process.env.REACT_APP_HOST_IP}/events/`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
      body: form,
    })
      .then((res) => res.json())
      .catch((error) => alert(error));
  }

  function changeTime(time){
    const parsedDatetime = moment(time, 'YYYY-MM-T HH:mm:ss'); // Parse with iOS format
    const postgresDatetime = parsedDatetime.format('YYYY-MM-DD HH:mm:ss'); // Format for PostgreSQL
    return postgresDatetime;
  }

  return (
    <div id={'Add-Event'}>
      <table>
        <tr>
          <td colSpan={2}>
            <label>Tiêu đề</label>
            <input type={'text'} onChange={(e) => setTitle(e.target.value)} />
          </td>
        </tr>
        <tr>
          <td>
            <label>Từ</label>
            <input
              type={'datetime-local'}
              onChange={(e) => setBeginDate(e.target.value)}
            />
          </td>
          <td>
            <label>Đến</label>
            <input
              type={'datetime-local'}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <label>Mô tả sự kiện</label>
            <textarea cols={20} onChange={(e) => setContent(e.target.value)} />
          </td>
        </tr>
        <tr>
          <td
            colSpan={2}
            style={{
              textAlign: 'right',
            }}
          >
            <button onClick={addEvent}>Cập nhật</button>
          </td>
        </tr>
      </table>
    </div>
  );
}
