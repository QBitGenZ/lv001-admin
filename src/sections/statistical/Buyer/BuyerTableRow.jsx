import PropTypes from 'prop-types';
import React from 'react';
export default function BuyerTableRow({ NameOrg, ID, SDT, Address, }) {
  return (
    <>
      <tr className='ModalBtn propdtabletr'>
        <td className='prodtabletd prodtabletdth'>{ID}</td>
        <td className='prod prodtabletdth'>{NameOrg}</td>
        <td className='prodtabletd prodtabletdth'>{SDT}</td>
        <td className='prod prodtabletd prodtabletdth'>{Address}</td>
      </tr>
    </>
  );
}

BuyerTableRow.propTypes = {
  NameOrg: PropTypes.string,
  ID: PropTypes.string,
  SDT: PropTypes.string,
  Address: PropTypes.string,
};
