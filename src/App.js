import './App.css';
import React, { useEffect, useState, } from 'react';
import { HeaderSection, Sidebar, } from './sections/commons';
import { EventSection, NotificationSection, } from './sections/publish';
import { PostCencorSection, UserCencorSection, } from './sections/censorship';
import { SellerStatisSection,
  BuyerStatisSection,
  FoundationStatisSection, } from './sections/statistical';
import HomePageSection from './sections/homepage';
import Login from './pages/Login';

function App() {
  const [title, setTitle,] = useState('Trang chủ');
  const [login, setLogin,] = useState(false);
  useEffect(() => {
    const access = localStorage.getItem('access');
    if (!access) {
      setLogin(false);
    }
  }, []);

  const renderSection = () => {
    if (title === 'Trang chủ') return <HomePageSection />;
    if (title === 'Đăng thông báo') return <NotificationSection />;
    if (title === 'Đăng sự kiện') return <EventSection />;
    if (title === 'Kiểm duyệt bài viết') return <PostCencorSection />;
    if (title === 'Kiểm duyệt thông tin') return <UserCencorSection />;
    if (title === 'Thống kê người bán') return <SellerStatisSection />;
    if (title === 'Thống kê người mua') return <BuyerStatisSection />;
    if (title === 'Thống kê đơn vị từ thiện')
      return <FoundationStatisSection />;
  };

  return (
    <div className='App'>
      {login?<>
        <Sidebar setTitle={setTitle} />
        <HeaderSection title={title} />
        {renderSection()}
      </>:<Login setLogin={setLogin}/>
      }
    </div>
  );
}

export default App;
