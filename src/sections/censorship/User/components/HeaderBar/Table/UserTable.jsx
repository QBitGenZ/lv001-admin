import React from 'react';
import PropTypes from 'prop-types';
import '../../../../Posts/components/ProductTable/ProductTable.css';
import UserTableRow from './UserTableRow';
import { Pagination, } from '../../../../../../components';
export default function UserTable({
  charities,
  getUsers,
  totalPage,
  currentPage,
  onPageChange,
  reload,
}) {
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
            reload={reload}
            key={charity?.id}
            charity={charity}
            getUsers={getUsers}
          />
        ))}
      </table>
      <Pagination
        totalPage={totalPage}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </div>
  );
}
UserTable.propTypes = {
  charities: PropTypes.array,
  getUsers: PropTypes.func,
  totalPage: PropTypes.number,
  currentPage: PropTypes.number,
  onPageChange: PropTypes.func,
  reload: PropTypes.func,
};
