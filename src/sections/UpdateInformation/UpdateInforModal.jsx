import React from 'react';
import PropTypes from 'prop-types';
export default function UpdateInforModal({ admin, }) {
  return (
    <>
      <div className={'Avatara'}>
        <p className={'updatetitle'}>Ảnh đại diện</p>
        <img
          src={`http://localhost:8000${admin.avatar}`}
          alt={'avatar'}
          className={'avatar-likee'}
        />
        <p className={'updateaction'}>chỉnh sửa</p>
      </div>
      <div className={'Infora'}>
        <p className={'updatetitle'}>Thông tin</p>
        <table>
          <tr className={'row'}>
            <td className={'th'}>Tên</td>
            <td>:</td>
            <td>{admin?.full_name}</td>
          </tr>
          <tr>
            <td className={'th'}>Ngày sinh</td>
            <td>:</td>
            <td>{admin?.brithday}</td>
          </tr>
          <tr>
            <td className={'th'}>Giới tính</td>
            <td>:</td>
            <td>{admin?.is_female ? 'Nữ' : 'Nam'}</td>
          </tr>
          <tr>
            <td className={'th'}>Số điện tdoại</td>
            <td>:</td>
            <td>{admin?.phone}</td>
          </tr>
          <tr>
            <td className={'th'}>Email</td>
            <td>:</td>
            <td>{admin?.email}</td>
          </tr>
          <tr>
            <td className={'th'}>Chức vụ</td>
            <td>:</td>
            <td>Admin</td>
          </tr>
        </table>
        <p className={'updateaction'}>chỉnh sửa</p>
      </div>
    </>
  );
}

UpdateInforModal.propTypes = {
  admin: PropTypes.object,
};
