import React from 'react';
import PropTypes from 'prop-types';
import '../../../../Posts/components/ProductTable/ProductTable.css';
import UserTableRow from './UserTableRow';
export default function UserTable( { charities, } ) {
  console.log(charities);
  return (
    <div className={'User-Table'}>
      <table id='ProductTable'>
        <tr className='propdtabletr'>
          <th className='prodtabletdth prodtableth'>Đơn vị từ thiện</th>
          <th className='prodtabletdth prodtableth'>Thời gian</th>
          <th className='prodtabletdth prodtableth'>Trạng thái</th>
        </tr>
        {charities?.map((charity) => (
          <UserTableRow
            key={charity?.id}
            charity={charity}
          />
        ))}
      </table>
    </div>
  );
}
UserTable.propTypes = {
  charities: PropTypes.array,
};
