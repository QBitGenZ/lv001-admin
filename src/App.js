import './App.css';
import React, { useState, } from 'react';
import { HeaderSection, Sidebar, } from './sections/commons';
import { EventSection, NotificationSection, } from './sections/publish';
import { PostCencorSection, UserCencorSection, } from './sections/censorship';
import { SellerStatisSection, BuyerStatisSection, FoundationStatisSection, } from './sections/statistical';

function App() {
  const [title, setTitle,] = useState('Kiểm duyệt sản phẩm');

  const renderSection = () => {
    if (title === 'Đăng thông báo') return <NotificationSection />;
    if (title === 'Đăng sự kiện') return <EventSection />;
    if (title === 'Kiểm duyệt bài viết') return <PostCencorSection />;
    if (title === 'Kiểm duyệt thông tin') return <UserCencorSection />;
    if (title === 'Thống kê người bán') return <SellerStatisSection />;
    if (title === 'Thống kê người mua') return <BuyerStatisSection />;
    if (title === 'Thống kê đơn vị từ thiện') return <FoundationStatisSection />;
  };

  return (
    <div className='App'>
      <Sidebar setTitle={setTitle} />
      <HeaderSection title={title} />
      {renderSection()}
    </div>
  );
}

export default App;
