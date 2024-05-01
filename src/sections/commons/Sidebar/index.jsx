import React, { useEffect, useState, } from 'react';
import './Sidebar.css';
import PropTypes from 'prop-types';
import sidebar from '../../../constants/sidebar';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleUp, } from '@fortawesome/free-solid-svg-icons';
function SidebarSection({ setTitle, }) {
  const [admin, setAdmin,] = useState([]);
  useEffect(() => {
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
  }, []);
  return (
    <div id={'Sidebar'}>
      <div
        className={'user-info-container'}
        onClick={() => setTitle('Thông tin cá nhân')}
      >
        <img
          className={'logosidebar'}
          src={process.env.PUBLIC_URL + 'assets/images/sidebar/logo.png'}
          alt={'logo'}
        />
        <div className={'user-info'}>
          <div className={'circle-image1'}>
            <img
              src={`${process.env.REACT_APP_IMAGE_HOST_IP}${admin?.avatar}`}
              alt={'avatar'}
              className={'avatar'}
            />
          </div>
          <div className={'user-namerole'}>
            <div className={'user-name'}>{admin?.full_name}</div>
            <div className={'user-role'}>Admin</div>
          </div>
          <FontAwesomeIcon
            icon={faAngleRight}
            style={{
              width: '10px',
              marginTop: '15px',
              float: 'right',
            }}
          />
        </div>
      </div>
      <div className={'menu-container'}>
        {sidebar.map((value) => (
          <MenuItem key={value.id} menuItem={value} setTitle={setTitle} />
        ))}
      </div>
    </div>
  );
}

function MenuItem({ menuItem, setTitle, }) {
  const [showSubs, setShowSubs,] = useState(false);
  const handleonshowsubs = () => {
    if (menuItem.label === 'Trang chủ') {
      setTitle('Trang chủ');
    } else if (menuItem.label === 'Quản lý loại sản phẩm') {
      setTitle('Quản lý loại sản phẩm');
    } else if (menuItem.label === 'Quản lý tài khoản') {
      setTitle('Quản lý tài khoản');
    } else if (menuItem.label === 'Quản lý đơn hàng') {
      setTitle('Quản lý đơn hàng');
    }else {
      setShowSubs(!showSubs);
    }
  };
  return (
    <div className={showSubs ? 'Menu-Item show-subs' : 'Menu-Item'}>
      <div className={'menu-main'} onClick={handleonshowsubs}>
        <FontAwesomeIcon className={'menu-item-logo'} icon={menuItem.logo} />
        <span className={'menu-label'}>{menuItem.label}</span>
        <FontAwesomeIcon
          className={'arrow-icon'}
          style={{
            float: 'right',
            margin: '5px',
          }}
          icon={faAngleUp}
        />
      </div>
      <div className={'sub-menu-container'}>
        {menuItem?.subs?.map((item) => (
          <SubMenuItem key={item.id} subItem={item} setTitle={setTitle} />
        ))}
      </div>
    </div>
  );
}

function SubMenuItem({ subItem, setTitle, }) {
  const handleClick = () => {
    setTitle(subItem.label);
  };

  return (
    <div className={'Sub-Item sub-menu-label'} onClick={handleClick}>
      {subItem.label}
    </div>
  );
}

SubMenuItem.propTypes = {
  subItem: PropTypes.object.isRequired,
  setTitle: PropTypes.func.isRequired,
};

MenuItem.propTypes = {
  menuItem: PropTypes.object.isRequired,
  setTitle: PropTypes.func.isRequired,
};

SidebarSection.propTypes = {
  setTitle: PropTypes.func.isRequired,
};

export default SidebarSection;
