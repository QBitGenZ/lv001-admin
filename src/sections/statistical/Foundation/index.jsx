import React from 'react';
import HeaderBar from '../components/HeaderBar';
import FoundationTable from './FoundationTable';
export default function FoundationStatisSection() {
  return (
    <>
      <HeaderBar title={'Đơn vị từ thiện: '} number={125575} />
      <FoundationTable/>
    </>
  );
}
