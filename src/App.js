import './App.css';
import React, { useState, } from 'react';
import { HeaderSection, Sidebar, } from './sections/commons';
import { EventSection, NotificationSection, } from './sections/publish';
import { PostCencorSection, } from './sections/censorship';

function App() {
  const [title, setTitle,] = useState('Kiểm duyệt sản phẩm');

  const renderSection = () => {
    if (title === 'Đăng thông báo') return <NotificationSection />;
    if (title === 'Đăng sự kiện') return <EventSection />;
    if (title === 'Kiểm duyệt bài viết') return <PostCencorSection/>;
    
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
