import React from 'react';
import './AddNotification.css';
import PropTypes from 'prop-types';

export default function EditNotification({ oldTitle, oldText, }) {
  return (
    <div id={'Add-Notification'}>
      <label>Tiêu đề</label>
      <textarea rows={4} value={oldTitle}/>
      <label>Nội dung</label>
      <textarea rows={10} value={oldText}/>
      <div style={{
        float: 'right',
      }}>
        <button>Lưu</button>
      </div>
    </div>
  );
}

EditNotification.propTypes = {
  oldTitle: PropTypes.string.isRequired,
  oldText: PropTypes.string.isRequired,
};