import React from 'react';
import PropTypes from 'prop-types';
import TypeOPTableRow from './UserTableRow';
export default function TypeOPTable({ typePs, loadTypeP, }) {
  return (
    <div className={'User-Table'}>
      <table id='ProductTable'>
        <tbody>
          <tr className='propdtabletr'>
            <th className='prodtabletdth prodtableth'>Loại sản phẩm</th>
            <th className='prodtabletdth prodtableth'>Ngày tạo</th>
          </tr>
          {typePs?.map((typeP) => (
            <TypeOPTableRow
              key={typeP?.id}
              typeP={typeP}
              loadTypeP={loadTypeP}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
TypeOPTable.propTypes = {
  typePs: PropTypes.array,
  loadTypeP: PropTypes.func,
};
