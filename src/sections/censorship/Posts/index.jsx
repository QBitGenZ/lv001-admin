import React, { useState, useEffect, } from 'react';
import './ProductSection.css';
import ProductTable from './components/ProductTable/ProductTable';
import HeaderBar from './components/HeaderBar/HeaderBar';
export default function PostCencorSection() {
  const [products, setProduct,] = useState([]);
  const [currentPage, setCurrentPage,] = useState(1);
  const [totalPage, setTotalPage,] = useState(0);
  useEffect(() => {
    getProducts();
  }, [currentPage, ]);

  const getProducts = () => {
    fetch(`${process.env.REACT_APP_HOST_IP}/products/?page=${currentPage}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct(data?.data);
        setTotalPage(data?.meta?.total_pages);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div id={'ProductSection'}>
      <div>
        <HeaderBar products={products} />
        <ProductTable products={products} getProducts={getProducts} totalPage={totalPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage} />
      </div>
    </div>
  );
}
