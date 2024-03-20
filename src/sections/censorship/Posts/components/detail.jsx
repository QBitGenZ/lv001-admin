import React from 'react';
import './detail.css';
export default function DetailStatisComPostCencorSection({ color, number, title, }) {
  return (
    <div className={'detailcontainer'}>
      <p className={'.detailNumber'} style={{
        color: color,
      }}>{number}</p>
      <p className={'.detailTitle'}>{title}</p>
    </div>
  );
}


