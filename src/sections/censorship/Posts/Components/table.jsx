import React from 'react';
import './table.css';

export default function Posttable() {
  return (
    <div>
      <table>
        <tr>
          <th>Người đăng</th>
          <th>Tên bài viết</th>
          <th>Thời gian đăng tải</th>
          <th>Trạng thái</th>
        </tr>
        <table_row/>
        <tr>
          <td>ONTH Thanh</td>
          <td>Xu hướng Y2K</td>
          <td>20/10/2023 22:22 pm</td>
          <td>Chưa duyệt</td>
        </tr>
        <tr>
          <td>ONTH Thanh</td>
          <td>Xu hướng Y2K</td>
          <td>20/10/2023 22:22 pm</td>
          <td>Chưa duyệt</td>
        </tr>
      </table>
    </div>
  );
}
