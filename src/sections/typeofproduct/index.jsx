import React, { useState, useEffect, } from 'react';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faPlus, faPen, } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { Modal, } from '../../components';
import TypeOPDetail from './components/TypeOPDetail';
import AddTypeOP from './components/AddTypeOP';
import EditTypeOP from './components/EditTypeOP';
import TypeOPTable from './components/TypeOPTable';
export default function TypeOfProductSection() {
  const [showAdd, setShowAdd,] = useState(false);
  const handleClickAdd = () => setShowAdd(true);
  const [typePs, setTypePs,] = useState([]);
  useEffect(() => {
    loadTypeP();
  }, []);
  const loadTypeP = () => {
    fetch(`${process.env.REACT_APP_HOST_IP}/products/types/`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => setTypePs(data.data))
      .catch((error) => alert(error));
  };

  return (
    <div id={'Notification-Section'}>
      <div className={'header'}>
        <div className={'quantity-block block'}>
          <span>Tổng số loại sản phẩm</span>
          <span className={'number'}>{typePs.length}</span>
        </div>
        <div className={'add-block block'} onClick={handleClickAdd}>
          <FontAwesomeIcon icon={faPlus} />
          <span className={'title'}>Thêm loại sản phẩm</span>
        </div>
      </div>
      <div className={'body'}>
        <TypeOPTable charities={typePs} getUsers={loadTypeP} />
      </div>
      {showAdd && (
        <Modal
          setShow={setShowAdd}
          title={'Thêm thông báo'}
          body={<AddTypeOP setShowAdd={setShowAdd} loadTypeP={loadTypeP} />}
        />
      )}
    </div>
  );
}

function TypeOfProductItem({ typeP, loadTypeP, }) {
  const [showDetail, setShowDetail,] = useState(false);
  const [showEdit, setShowEdit,] = useState(false);

  return (
    <>
      {showDetail && (
        <Modal
          setShow={setShowDetail}
          title={'Chi tiết thông báo'}
          body={
            <TypeOPDetail
              title={typeP?.name}
              text={typeP?.description}
              create_at={typeP.created_at}
              setShow={setShowDetail}
            />
          }
        />
      )}

      {showEdit && (
        <Modal
          setShow={setShowEdit}
          title={'Chi tiết thông báo'}
          body={
            <EditTypeOP
              notif={typeP}
              setShowEdit={setShowEdit}
              loadNotif={loadTypeP}
            />
          }
        />
      )}

      <div className={'Notification-Item'} onClick={() => setShowDetail(true)}>
        <div className={'title-container'}>
          <div className={'title'}>{typeP?.name}</div>
          <div className={'create_at'}>{typeP?.created_at}</div>
        </div>
        <div className={'edit-container'} onClick={() => setShowEdit(true)}>
          <span>Chỉnh sửa</span>
          <FontAwesomeIcon icon={faPen} />
        </div>
      </div>
    </>
  );
}

TypeOfProductItem.propTypes = {
  typeP: PropTypes.object.isRequired,
  loadTypeP: PropTypes.func,
};
