import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

export default function HeaderSection ({ title, }) {
  return (
    <div id={'Header'}>
      <h1>
        {title}
      </h1>
    </div>
  );
}

HeaderSection.propTypes = {
  title: PropTypes.string.isRequired,
};