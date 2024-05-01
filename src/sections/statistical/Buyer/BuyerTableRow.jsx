import PropTypes from 'prop-types';
import React from 'react';
export default function BuyerTableRow({ NameOrg, SDT, Address, index, }) {
  return (
    <>
      <tr className='ModalBtn propdtabletr'>
        <td className='prodtabletd prodtabletdth'>{index}</td>
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
  index: PropTypes.number,
};
