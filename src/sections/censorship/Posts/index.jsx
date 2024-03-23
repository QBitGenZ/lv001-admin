import React, { useState,useEffect, } from 'react';
import './ProductSection.css';
import ProductTable from './components/ProductTable/ProductTable';
import HeaderBar from './components/HeaderBar/HeaderBar';
export default function PostCencorSection() {
  const [products, setProduct,] = useState([]);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/v1/products/', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div id={'ProductSection'}>
      <div>
        <HeaderBar products={products} />
        <ProductTable products={products} />
      </div>
    </div>
  );
}
