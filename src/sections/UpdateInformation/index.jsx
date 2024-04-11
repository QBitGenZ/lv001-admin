import React, { useEffect, useState, } from 'react';
import './UpdateInformation.css';
import PropTypes from 'prop-types';
import Modal from '../../components/Modal';
import UpdateInforModal from './UpdateInforModal';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, } from '@fortawesome/free-solid-svg-icons';
export default function UpdateInformation({ setLogin, }) {
  const [infor, setInfor,] = useState(false);
  const setInforModal = () => {
    setInfor(true);
  };
  function logout(e) {
    e.preventDefault();
    setLogin(false);
    localStorage.clear('access');
    // window.location.href = '';
  }
  const [admin, setAdmin,] = useState([]);
  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = () => {
    fetch(`${process.env.REACT_APP_HOST_IP}/info`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div id={'UpdateInformation'}>
        <div className={'container'}>
          <div className='circle-image'>
            <img
              src={`${process.env.REACT_APP_IMAGE_HOST_IP}${admin.avatar}`}
              alt={'avatar'}
            />
          </div>

          <div className={'small-container'}>
            <p className={'name'}>{admin?.full_name}</p>
            <p className={'position'}>Admin</p>
          </div>
          <div className={'button-container'}>
            <p className={'logout'} onClick={logout}>
              <FontAwesomeIcon
                icon={faArrowRightFromBracket}
                style={{
                  margin: '0 10px 0 0',
                  //   float: 'right',
                }}
              />
              Đăng xuất
            </p>
            <p className={'update'} onClick={setInforModal}>
              Chỉnh sửa thông tin
            </p>
          </div>
        </div>
        <div className={'info-container'}>
          <table className={'infortable'}>
            <tr>
              <td className={'th'}>Tên</td>
              <td>:</td>
              <td>{admin?.full_name}</td>
            </tr>
            <tr>
              <td className={'th'}>Ngày sinh</td>
              <td>:</td>
              <td>{admin?.birthday}</td>
            </tr>
            <tr>
              <td className={'th'}>Giới tính</td>
              <td>:</td>
              <td>{admin?.is_female ? 'Nữ' : 'Nam'}</td>
            </tr>
            <tr>
              <td className={'th'}>Số điện thoại</td>
              <td>:</td>
              <td>{admin?.phone}</td>
            </tr>
            <tr>
              <td className={'th'}>Email</td>
              <td>:</td>
              <td>{admin.email}</td>
            </tr>
            <tr>
              <td className={'th'}>Chức vụ</td>
              <td>:</td>
              <td>Admin</td>
            </tr>
          </table>
        </div>
      </div>
      {infor && (
        <Modal
          title={'Chỉnh sửa thông tin'}
          body={
            <UpdateInforModal
              getInfo={getInfo}
              setAcptModal={setInfor}
              admin={admin}
            />
          }
          setShow={setInfor}
        />
      )}
    </>
  );
}

UpdateInformation.propTypes = {
  setLogin: PropTypes.func,
};
