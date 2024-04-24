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
      </div>
    </div>
  );
}

HeaderBar.propTypes = {
  title: PropTypes.string,
  number: PropTypes.number,
};
