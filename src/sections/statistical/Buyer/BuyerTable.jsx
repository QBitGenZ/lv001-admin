import React, { useEffect, useState, } from 'react';
import '../Seller/Table/SellerTable.css';
import BuyerTableRow from './BuyerTableRow.jsx';
import HeaderBar from '../components/HeaderBar.jsx';
import { Pagination, } from '../../../components/index.js';
export default function BuyerTable() {
  const [buyers, setBuyer,] = useState([]);
  const [currentPage, setCurrentPage,] = useState(1);
  const [totalPage, setTotalPage,] = useState(0);
  const [total, setTotal,] = useState(0);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_HOST_IP}/user?page=${currentPage}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setBuyer(data?.data);
        setTotalPage(data?.meta?.total_pages);
        setTotal(data?.meta?.total);
      })
      .catch((error) => console.log(error));
  }, [currentPage,]);
  return (
    <div>
      <HeaderBar title={'Tổng số người dùng: '} number={total} />
      <div className={'Seller-Table'}>
        <table id='SellerTable'>
          <tr className='propdtabletr'>
            <th className='prodtabletdth prodtableth'>STT</th>
            <th className='prodtabletdth prodtableth'>Người dùng</th>
            <th className='prodtabletdth prodtableth'>SDT</th>
            <th className='prodtabletdth prodtableth'>Địa chỉ</th>
          </tr>
          {buyers.map((buyer,index) => (
            <BuyerTableRow
              index={index+1}
              key={buyer.id}
              NameOrg={buyer.full_name}
              ID={buyer.id}
              SDT={buyer.phone}
              Address={buyer.email}
            />
          ))}
        </table>
        <Pagination
          totalPage={totalPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
