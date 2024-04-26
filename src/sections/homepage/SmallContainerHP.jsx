import React from 'react';
import PropTypes from 'prop-types';
import './HomePageSection.css';
export default function SmallContainerHP({ title, newnumber, unit, }) {
  return (
    <div className={'small-container'}>
      <p className={'title'}>{title}</p>
      <div className={'number-container'}>
        <div className={'number'}>{newnumber}</div>
      </div>
      <p>{unit}</p>
    </div>
  );
}

SmallContainerHP.propTypes = {
  title: PropTypes.string,
  newnumber: PropTypes.number,
  unit: PropTypes.string,
};
