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
  const [total, setTotal,] = useState(0);
  const [pagination, setPagination,] = false;
  useEffect(() => {
    getProducts();
    reload();
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
        if (total > 0) {
          setPagination(true);
        } else {
          setPagination(false);
        }
      })
      .catch((error) => console.log(error));
  };
  const [chuaduyet, setchuaduyet,] = useState(0);
  const reload = () => {
    getchuaduyet();
    getdaduyet();
    getbaocao();
    gettuchoi();
  };
  const getchuaduyet = async () => {
    fetch(
      `${process.env.REACT_APP_HOST_IP}/statistics/count-product-by-status/?status=Chưa duyệt`,
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
        setchuaduyet(data?.data);
      })
      .catch((error) => console.log(error));
  };
  const [daduyet, setdaduyet,] = useState(0);
  const getdaduyet = async () => {
    fetch(
      `${process.env.REACT_APP_HOST_IP}/statistics/count-product-by-status/?status=Đã duyệt`,
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
        setdaduyet(data?.data);
      })
      .catch((error) => console.log(error));
  };
  const [baocao, setbaocao,] = useState(0);
  const getbaocao = async () => {
    fetch(
      `${process.env.REACT_APP_HOST_IP}/statistics/count-product-by-status/?status=Báo cáo`,
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
        setbaocao(data?.data);
      })
      .catch((error) => console.log(error));
  };
  const [tuchoi, settuchoi,] = useState(0);
  const gettuchoi = async () => {
    fetch(
      `${process.env.REACT_APP_HOST_IP}/statistics/count-product-by-status/?status=Từ chối`,
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
        settuchoi(data?.data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div id={'ProductSection'}>
      <div>
        <HeaderBar
          total={tuchoi + daduyet + chuaduyet + baocao}
          tuchoi={tuchoi}
          baocao={baocao}
          chuaduyet={chuaduyet}
          daduyet={daduyet}
        />
        <Filter
          gender={gender}
          setGender={setGender}
          degree={degree}
          setDegree={setDegree}
          size={size}
          setSize={setSize}
        />
        <ProductTable
          reload={reload}
          products={products}
          getProducts={getProducts}
          totalPage={totalPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          pagination={pagination}
        />
      </div>
    </div>
  );
}
