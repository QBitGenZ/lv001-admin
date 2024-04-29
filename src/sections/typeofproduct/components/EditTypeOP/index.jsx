import React, { useState, } from 'react';
import './AddNotification.css';
import PropTypes from 'prop-types';

export default function EditTypeOP({ typeP, setModal, loadTypeP, }) {
  const [title, setTitle,] = useState(typeP?.name);
  const [text, setText,] = useState(typeP?.description);
  const editType = () => {
    const form = new FormData();
    form.append('name', title);
    form.append('description', text);
    fetch(`${process.env.REACT_APP_HOST_IP}/products/types/${typeP?.id}/`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
      body: form,
    })
      .then((res) => {
        if (res.status === 201) {
          alert('Cập nhật loại sản phẩm thành công');
          setModal(false);
          loadTypeP();
        } else {
          Promise.reject('Cập nhật loại không sản phẩm thành công');
        }
      })
      .catch((error) => alert(error));
  };
  const deleteType = () => {
    fetch(`${process.env.REACT_APP_HOST_IP}/products/types/${typeP?.id}/`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
    })
      .then((res) => {
        if (res.status === 204) {
          alert('Xóa loại sản phẩm thành công');
          setModal(false);
          loadTypeP();
        } else {
          Promise.reject('Xóa loại sản phẩm không thành công');
        }
      })
      .catch((error) => alert(error));
  };
  return (
    <div id={'Add-Notification'}>
      <label>Tên loại sản phẩm</label>
      <textarea
        rows={4}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Mô tả: </label>
      <textarea
        rows={10}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div
        style={{
          float: 'right',
        }}
      >
        <button onClick={deleteType} style={{
          backgroundColor: 'red', 
        }}>
          Xóa
        </button>
        <button onClick={editType}>Lưu</button>
      </div>
    </div>
  );
}

EditTypeOP.propTypes = {
  typeP: PropTypes.object,
  setModal: PropTypes.func,
  loadTypeP: PropTypes.func,
};
