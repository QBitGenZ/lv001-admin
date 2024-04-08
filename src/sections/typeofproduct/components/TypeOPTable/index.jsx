import React from 'react';
import PropTypes from 'prop-types';
import TypeOPTableRow from './UserTableRow';
export default function TypeOPTable( { charities, getUsers, } ) {
  return (
    <div className={'User-Table'}>
      <table id='ProductTable'>
        <tr className='propdtabletr'>
          <th className='prodtabletdth prodtableth'>Loại sản phẩm</th>
          <th className='prodtabletdth prodtableth'>Ngày tạo</th>
        </tr>
        {charities?.map((charity) => (
          <TypeOPTableRow
            key={charity?.id}
            charity={charity}
            getUsers={getUsers}
          />
        ))}
      </table>
    </div>
  );
}
TypeOPTable.propTypes = {
  charities: PropTypes.array,
  getUsers: PropTypes.func,
};
