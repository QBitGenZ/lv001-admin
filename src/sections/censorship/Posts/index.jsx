import React from 'react';
import './ProductSection.css';
import ProductTable from './components/ProductTable/ProductTable';
import HeaderBar from './components/HeaderBar/HeaderBar';
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
