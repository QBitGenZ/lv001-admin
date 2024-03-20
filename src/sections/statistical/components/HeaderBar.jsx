import React from 'react';
import PropTypes from 'prop-types';
import './HeaderBar.css';
export default function HeaderBar({ title, number, }) {
  return (
    <div id={'SellerStatis-Section'}>
      <div className={'header'}>
        <div className={'quantity-block block'}>
          <span>{title}</span>
          <span className={'number'}>{number}</span>
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
  );
}

HeaderBar.propTypes = {
  title: PropTypes.string,
  number: PropTypes.number,
};
