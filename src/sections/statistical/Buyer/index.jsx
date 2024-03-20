import React from 'react';

import HeaderBar from '../components/HeaderBar';
import BuyerTable from './BuyerTable';
export default function BuyerStatisSection() {
  return (
    <>
      <HeaderBar title={'Tổng số người mua: '} number={125575} />
      <BuyerTable/>
    </>
  );
}
