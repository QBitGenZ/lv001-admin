import React, { useEffect, useState, } from 'react';
import '../Seller/Table/SellerTable.css';
import BuyerTableRow from '../Buyer/BuyerTableRow';
import HeaderBar from '../components/HeaderBar';
import { Pagination, } from '../../../components/index.js';
export default function FoundationTable() {
  const [charities, setCharity,] = useState([]);
  const [currentPage, setCurrentPage,] = useState(1);
  const [totalPage, setTotalPage,] = useState(0);
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_HOST_IP}/user?is_philanthropist=true&&page=${currentPage}`,
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
        setCharity(data?.data);
        setTotalPage(data?.meta?.total_pages);
      })
      .catch((error) => console.log(error));
  }, [currentPage,]);
  const pagination = charities.length > 0 ? true : false;
  return (
    <>
      <HeaderBar title={'Tổng số đơn vị: '} number={charities?.length} />
      <div className={'Seller-Table'}>
        <table id='SellerTable'>
          <tr className='propdtabletr'>
            <th className='prodtabletdth prodtableth'>STT</th>
            <th className='prodtabletdth prodtableth'>Đơn vị từ thiện</th>
            <th className='prodtabletdth prodtableth'>SDT</th>
            <th className='prodtabletdth prodtableth'>Địa chỉ</th>
          </tr>
          {charities.map((charity, index) => (
            <BuyerTableRow
              key={charity.id}
              NameOrg={charity.full_name}
              index={index + 1}
              SDT={charity.phone}
              Address={charity.email}
            />
          ))}
        </table>
        {pagination && (
          <Pagination
            totalPage={totalPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </>
  );
}
