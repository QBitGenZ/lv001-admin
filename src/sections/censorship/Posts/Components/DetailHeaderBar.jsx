import React from 'react';
import './detailHeaderBar.css';
import PropTypes from 'prop-types';
export default function DetailHeaderBar({ title, number, color, }) {
  return (
    <div className={'detailcontainer'}>
      <p
        className={'.detailNumber'}
        style={{
          color: color,
        }}
      >
        {number}
      </p>
      <p className={'.detailTitle'}>{title}</p>
    </div>
  );
}

DetailHeaderBar.propTypes = {
  title: PropTypes.string,
  number: PropTypes.number,
  color: PropTypes.string,
};
