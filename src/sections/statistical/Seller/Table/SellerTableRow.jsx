import PropTypes from 'prop-types';
import React from 'react';
export default function SellerTableRow({ SellerName, UID, Gender, Age, }) {
  return (
    <>
      <tr className='ModalBtn propdtabletr'>
        <td className='prod prodtabletdth'>{SellerName}</td>
        <td className='prodtabletd prodtabletdth'>{UID}</td>
        <td className='prodtabletd prodtabletdth'>{Gender}</td>
        <td className='prodtabletd prodtabletdth'>{Age}</td>
      </tr>
    </>
  );
}

SellerTableRow.propTypes = {
  SellerName: PropTypes.string,
  UID: PropTypes.string,
  Gender: PropTypes.string,
  Age: PropTypes.number,
};
