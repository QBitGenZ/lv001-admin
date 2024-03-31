import React, { useState, } from 'react';
import './AddNotification.css';
import PropTypes from 'prop-types';

export default function AddNotification({ setShowAdd, loadNotif, }) {
  const [title, setTitle,] = useState();
  const [content, setContent,] = useState();
  function addNotification(e) {
    e.preventDefault();
    const form = new FormData();
    form.append('title', title);
    form.append('text', content);
    fetch(`${process.env.REACT_APP_HOST_IP}/notifications/`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },body:form,
    })
      .then((res) => res.json())
      .then(()=>alert('Thêm thông báo thành công'))
      .then(()=>setShowAdd(false))
      .then(()=>loadNotif())
      .catch((error) => alert(error));
  }

  return (
    <div id={'Add-Notification'}>
      <label>Tiêu đề</label>
      <textarea rows={4} onChange={(e)=>setTitle(e.target.value)} value={title}/>
      <label>Nội dung</label>
      <textarea rows={10} onChange={(e)=>setContent(e.target.value)} value={content}/>
      <div style={{
        float: 'right',
      }}>
        <button onClick={addNotification}>Lưu</button>
      </div>
    </div>
  );
}

AddNotification.propTypes = {
  setShowAdd: PropTypes.func,
  loadNotif: PropTypes.func,
};