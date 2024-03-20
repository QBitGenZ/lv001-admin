import React from 'react';
import HeaderBar from '../components/HeaderBar';
import BuyerTable from '../Buyer/BuyerTable';
export default function FoundationStatisSection() {
  return (
    <>
      <HeaderBar title={'Đơn vị từ thiện: '} number={125575} />
      <BuyerTable/>
    </>
  );
}
