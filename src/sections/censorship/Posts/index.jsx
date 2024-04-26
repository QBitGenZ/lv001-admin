import React, { useState, useEffect, } from 'react';
import './ProductSection.css';
import ProductTable from './components/ProductTable/ProductTable';
import HeaderBar from './components/HeaderBar/HeaderBar';
import Filter from './components/Filter';
export default function PostCencorSection() {
  const [products, setProduct,] = useState([]);
  const [currentPage, setCurrentPage,] = useState(1);
  const [totalPage, setTotalPage,] = useState(0);
  const [degree, setDegree,] = useState('all');
  const [size, setSize,] = useState('all');
  const [gender, setGender,] = useState('all');
  const [total, setTotal, ] = useState(0);
  useEffect(() => {
    getProducts();
  }, [currentPage, size, gender, degree,]);

  const getProducts = () => {
    fetch(
      `${process.env.REACT_APP_HOST_IP}/products/?page=${currentPage}&degree=${degree}&gender=${gender}&size=${size}&limit=12`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access')}`,
          Accept: 'application/json',
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setProduct(data?.data);
        setTotalPage(data?.meta?.total_pages);
        setTotal(data?.meta?.total);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div id={'ProductSection'}>
      <div>
        <HeaderBar total={total} />
        <Filter
          gender={gender}
          setGender={setGender}
          degree={degree}
          setDegree={setDegree}
          size={size}
          setSize={setSize}
        />
        <ProductTable
          products={products}
          getProducts={getProducts}
          totalPage={totalPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
