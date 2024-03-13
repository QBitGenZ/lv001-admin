import React from 'react';
import './AddEvent.css';

export default function EditEvent () {
  return (
    <div id={'Add-Event'} >
      <table>
        <tr>
          <td colSpan={2}>
            <label>Tiêu đề</label>
            <input type={'text'}/>
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <label>Đơn vị từ thiện</label>
            <input type={'text'}/>
          </td>
        </tr>
        <tr>
          <td>
            <label>Từ</label>
            <input type={'datetime-local'}/>
          </td>
          <td>
            <label >Đến</label>
            <input type={'datetime-local'}/>
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <label>Đơn vị từ thiện</label>
            <textarea cols={20}/>
          </td>
        </tr>
        <tr>
          <td colSpan={2} style={{
            textAlign: 'right',
          }}>
            <button>Cập nhật</button>
          </td>
        </tr>
      </table>
    </div>
  );
}