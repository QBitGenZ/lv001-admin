import './App.css';
import React, { useLayoutEffect, useState, } from 'react';
import { HeaderSection, Sidebar, } from './sections/commons';
import { EventSection, NotificationSection, } from './sections/publish';
import { EventCenSorSection,
  PostCencorSection,
  UserCencorSection, } from './sections/censorship';
import { BuyerStatisSection,
  FoundationStatisSection, } from './sections/statistical';
import HomePageSection from './sections/homepage';
import { Login, } from './pages';
import UpdateInformation from './sections/UpdateInformation';
import TypeOfProductSection from './sections/typeofproduct';
import AccountManagementSection from './sections/accountmanagement';
import OrderManagementSection from './sections/orders';
// import { LoginContainer, } from './pages';

function App() {
  const [title, setTitle,] = useState('Trang chủ');
  const [login, setLogin,] = useState(false);
  useLayoutEffect(() => {
    const access = localStorage.getItem('access');
    console.log(access);
    if (!access) {
      setLogin(false);
    } else {
      setLogin(true);
    }
  }, []);
  const renderSection = () => {
    if (title === 'Trang chủ') return <HomePageSection />;
    if (title === 'Đăng thông báo') return <NotificationSection />;
    if (title === 'Thống kê sự kiện') return <EventSection />;
    if (title === 'Kiểm duyệt sản phẩm') return <PostCencorSection />;
    if (title === 'Kiểm duyệt thông tin') return <UserCencorSection />;
    if (title === 'Kiểm duyệt sự kiện') return <EventCenSorSection />;
    if (title === 'Thống kê người dùng') return <BuyerStatisSection />;
    if (title === 'Thống kê đơn vị từ thiện')
      return <FoundationStatisSection />;
    if (title === 'Thông tin cá nhân')
      return <UpdateInformation setLogin={setLogin} />;
    if (title === 'Quản lý loại sản phẩm') return <TypeOfProductSection />;
    if (title === 'Quản lý tài khoản') return <AccountManagementSection />;
    if (title === 'Quản lý đơn hàng') return <OrderManagementSection/>;
  };
  console.log(title);
  return (
    <div className='App'>
      {login ? (
        <>
          <Sidebar setTitle={setTitle} />
          <HeaderSection title={title} />
          {renderSection()}
        </>
      ) : (
        <Login setLogin={setLogin} />
      )}
    </div>
  );
}

export default App;
