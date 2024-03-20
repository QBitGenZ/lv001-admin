import React from 'react';
import PropTypes from 'prop-types';
import './HomePageSection.css';
export default function SmallContainerHP({
  title,
  newnumber,
  unit,
  oldnumber,
}) {
  return (
    <div className={'small-container'}>
      <p className={'title'}>{title}</p>
      <div className={'number-container'}>
        <div className={'number'}>
          {newnumber} {unit}
        </div>
        <div className={newnumber > oldnumber ? 'rateup' : 'ratedown'}>
          📈1.5%
        </div>
      </div>
      <div className={'comment'}>
        {newnumber > oldnumber
          ? 'Tăng so với tuần trước'
          : 'Giảm so vơi tuần trước'}{' '}
      </div>
      <div className={'oldnumber-container'}>
        <div className={'timezone'}>Tuần trước</div>
        <div className={'oldnumber'}>{oldnumber}</div>
      </div>
    </div>
  );
}

SmallContainerHP.propTypes = {
  title: PropTypes.string,
  newnumber: PropTypes.number,
  unit: PropTypes.string,
  oldnumber: PropTypes.number,
};
