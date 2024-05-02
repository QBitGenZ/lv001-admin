import PropTypes from 'prop-types';
import React, { useState, } from 'react';
import Modal from '../../../components/Modal';
import moment from 'moment';
import InforAccount from './InforAccount';
// import EditTypeOP from '../EditTypeOP';
export default function AccountTableRow({ account, loadAccount, index, }) {
  const [modal, setModal,] = useState(false);
  const toggleModal = () => {
    setModal(true);
  };
  console.log(account);
  return (
    <>
      <tr onClick={toggleModal} className='ModalBtn propdtabletr'>
        <td className='prodtabletd prodtabletdth'>{index}</td>
        <td className='prodtabletd prodtabletdth'>{account?.username}</td>
        <td className='prodtabletd prodtabletdth'>{account?.full_name}</td>
        <td className='prodtabletd prodtabletdth'>
          {moment(account?.created_at).format('HH:mm DD/MM/YYYY')}
        </td>
      </tr>
      {modal && (
        <Modal
          title={'Chi tiết tài khoản'}
          body={
            <InforAccount
              setModal={setModal}
              account={account}
              loadAccount={loadAccount}
            />
          }
          setShow={setModal}
        />
      )}
    </>
  );
}

AccountTableRow.propTypes = {
  account: PropTypes.object,
  loadAccount: PropTypes.func,
  index: PropTypes.number,
};
