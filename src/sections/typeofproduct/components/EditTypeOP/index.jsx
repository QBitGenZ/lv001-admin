import React, { useState, } from 'react';
import './AddNotification.css';
import PropTypes from 'prop-types';

export default function EditTypeOP({ notif, setShowEdit, loadNotif, }) {
  const [title, setTitle, ] = useState(notif?.title);
  const [text, setText, ] = useState(notif?.text);
  function editNotif(e) {
    e.preventDefault();
    const form = new FormData();
    form.append('title', title);
    form.append('text', text);
    fetch(`${process.env.REACT_APP_HOST_IP}/notifications/${notif?.id}/`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
      body: form,
    })
      .then((res) => res.json())
      .then(()=>alert('Cập nhật thông báo thành công'))
      .then(()=>setShowEdit(false))
      .then(() => loadNotif())
      .catch((error) => alert(error));
  }
  return (
    <div id={'Add-Notification'}>
      <label>Tiêu đề</label>
      <textarea rows={4} value={title} onChange={(e)=>setTitle(e.target.value)}/>
      <label>Nội dung</label>
      <textarea rows={10} value={text} onChange={(e)=>setText(e.target.value)}/>
      <div style={{
        float: 'right',
      }}>
        <button onClick={editNotif}>Lưu</button>
      </div>
    </div>
  );
}

EditTypeOP.propTypes = {
  notif: PropTypes.object,
  setShowEdit: PropTypes.func,
  loadNotif: PropTypes.func,
};