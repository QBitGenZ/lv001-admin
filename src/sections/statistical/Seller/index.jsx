import React from 'react';
import PropTypes from 'prop-types';
import SellerTable from './Table/SellerTable';

export default function SellerStatisSection( { tongso, }) {
  return (
    <>
      <SellerTable number={tongso}/>
    </>
  );
}

SellerStatisSection.propTypes = {
  tongso: PropTypes.number,
};