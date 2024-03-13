import React from 'react';
import './PostSection.css';
import HeaderBar from './components/HeaderBar';
import ProductTable from './components/ProductTable';
export default function PostCencorSection() {
  return (
    <div>
      <h2>Kiểm duyệt bài viết</h2>
      <HeaderBar/>
      <ProductTable/>
    </div>
  );
}
