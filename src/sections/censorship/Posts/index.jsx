import React from 'react';
import './ProductSection.css';
import ProductTable from './components/ProductTable';
import HeaderBar from './components/HeaderBar';
export default function PostCencorSection() {
  return (
    <div id={'ProductSection'}>
      <div>
        <HeaderBar />
        <ProductTable />
      </div>
    </div>
  );
}
