import React, { useState, } from 'react';
import './AddNotification.css';
import PropTypes from 'prop-types';

export default function AddTypeOP({ setShowAdd, loadTypeP, }) {
  const [title, setTitle,] = useState();
  const [content, setContent,] = useState();
  function addNotification(e) {
    e.preventDefault();
    const form = new FormData();
    form.append('name', title);
    form.append('description', content);
    fetch(`${process.env.REACT_APP_HOST_IP}/products/types/`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
      body: form,
    })
      .then((res) => {
        if (res.status === 201) {
          alert('Thêm loại sản phẩm thành công');
          setShowAdd(false);
          loadTypeP();
        } else {
          Promise.reject('Thêm loại sản phẩm không thành công');
        }
      })
      .catch((error) => alert(error));
  }

  return (
    <div id={'Add-Notification'}>
      <label>Tên loại sản phẩm</label>
      <textarea
        rows={4}
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label>Mô tả:</label>
      <textarea
        rows={10}
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
      <div
        style={{
          float: 'right',
        }}
      >
        <button onClick={addNotification}>Lưu</button>
      </div>
    </div>
  );
}

AddTypeOP.propTypes = {
  setShowAdd: PropTypes.func,
  loadTypeP: PropTypes.func,
};
