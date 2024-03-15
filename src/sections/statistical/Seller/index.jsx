import React from 'react';
import './SellerStatisSection.css';
import SellerTable from './Table/SellerTable';
export default function SellerStatisSection() {
  return (
    <>
      <div id={'SellerStatis-Section'}>
        <div className={'header'}>
          <div className={'quantity-block block'}>
            <span>Tổng số người bán</span>
            <span className={'number'}>1257</span>
          </div>
          <input
            className={'block search-input'}
            type={'text'}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}assets/images/publish/search-icon.png)`,
            }}
            placeholder={'Tìm kiếm...'}
          />
        </div>
      </div>
      <SellerTable/>
    </>
  );
}
