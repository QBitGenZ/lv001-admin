import React from 'react';
import './AddNotification.css';

export default function AddNotification() {
  return (
    <div id={'Add-Notification'}>
      <label>Tiêu đề</label>
      <textarea rows={4}/>
      <label>Nội dung</label>
      <textarea rows={10}/>
      <div style={{
        float: 'right',
      }}>
        <button>Lưu</button>
      </div>
    </div>
  );
}