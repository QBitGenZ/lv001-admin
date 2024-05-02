import React from 'react';
import PropTypes from 'prop-types';
import AccountTableRow from './AccountTableRow';

export default function AccountTable( { accounts, loadAccount, } ) {
  return (
    <div className={'User-Table'}>
      <table id='ProductTable'>
        <tr className='propdtabletr'>
          <th className='prodtabletdth prodtableth'>STT</th>
          <th className='prodtabletdth prodtableth'>Tài khoản</th>
          <th className='prodtabletdth prodtableth'>Tên người dùng</th>
          <th className='prodtabletdth prodtableth'>Ngày tạo</th>
        </tr>
        {accounts?.map((account,index) => (
          <AccountTableRow
            index={index+1}
            key={account?.id}
            account={account}
            loadAccount={loadAccount}
          />
        ))}
      </table>
    </div>
  );
}
AccountTable.propTypes = {
  accounts: PropTypes.array,
  loadAccount: PropTypes.func,
};
