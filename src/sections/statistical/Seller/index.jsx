import React from 'react';
import SellerTable from './Table/SellerTable';
import HeaderBar from '../components/HeaderBar';
export default function SellerStatisSection() {
  return (
    <>
      <HeaderBar title={'Tổng số người bán: '} number={1275}/>
      <SellerTable/>
    </>
  );
}
