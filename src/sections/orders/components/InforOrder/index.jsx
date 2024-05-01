import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';
import moment from 'moment';
export default function InforOrder({ order, setModal, loadOrder, }) {
  console.log(order);
  const updatedadat = () => {
    const form = new FormData();
    form.append('status', 'Đã đặt hàng');
    if (order?.status === 'Đã vận chuyển') {
      alert('Đơn hàng đã được vận chuyển');
    } else if (order?.status === 'Đã giao hàng') {
      alert('Đơn hàng đã giao thành công');
    } else {
      fetch(`${process.env.REACT_APP_HOST_IP}/orders/${order?.id}/`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access')}`,
          Accept: 'application/json',
        },
        body: form,
      })
        .then((res) => {
          if (res.status === 200) {
            alert('Cập nhật trạng thái đơn hàng thành công');
            loadOrder();
            setModal(false);
          } else {
            return Promise.reject(
              'Cập nhật trạng thái đơn hàng không thành công'
            );
          }
        })
        .catch((error) => alert(error));
    }
  };
  const updatedavc = () => {
    const form = new FormData();
    form.append('status', 'Đã vận chuyển');
    if (order?.status === 'Đã giao hàng') {
      alert('Đơn hàng đã giao thành công');
    } else if (order?.status === 'Chờ xác nhận') {
      alert('Đơn hàng chưa xác nhận');
    } else {
      fetch(`${process.env.REACT_APP_HOST_IP}/orders/${order?.id}/`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access')}`,
          Accept: 'application/json',
        },
        body: form,
      })
        .then((res) => {
          if (res.status === 200) {
            alert('Cập nhật trạng thái đơn hàng thành công');
            loadOrder();
            setModal(false);
          } else {
            return Promise.reject(
              'Cập nhật trạng thái đơn hàng không thành công'
            );
          }
        })
        .catch((error) => alert(error));
    }
  };
  const updatedagiao = () => {
    const form = new FormData();
    if (order?.status === 'Đã đặt hàng') {
      alert('Đơn hàng chưa vận chuyển');
    } else if (order?.status === 'Chờ xác nhận') {
      alert('Đơn hàng chưa xác nhận');
    } else {
      form.append('status', 'Đã giao hàng');
      fetch(`${process.env.REACT_APP_HOST_IP}/orders/${order?.id}/`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access')}`,
          Accept: 'application/json',
        },
        body: form,
      })
        .then((res) => {
          if (res.status === 200) {
            alert('Cập nhật trạng thái đơn hàng thành công');
            loadOrder();
            setModal(false);
          } else {
            return Promise.reject(
              'Cập nhật trạng thái đơn hàng không thành công'
            );
          }
        })
        .catch((error) => alert(error));
    }
  };
  const updatePaid = () => {
    const form = new FormData();
    if (order?.payment_method === 'VNPay') {
      alert('Đơn hàng được thanh toán bằng VNPay');
    } else {
      form.append('is_paid', true);
      fetch(`${process.env.REACT_APP_HOST_IP}/orders/${order?.id}/`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access')}`,
          Accept: 'application/json',
        },
        body: form,
      })
        .then((res) => {
          if (res.status === 200) {
            alert('Cập nhật thanh toán đơn hàng thành công');
            loadOrder();
            setModal(false);
          } else {
            return Promise.reject(
              'Cập nhật thanh toán đơn hàng không thành công'
            );
          }
        })
        .catch((error) => alert(error));
    }
  };
  const displayStatus = (status) => {
    if (status === 'true') {
      return 'Đã thanh toán';
    }
    return 'Chưa thanh toán';
  };
  const displayTotal = () => {
    let sum = 0;
    order?.items.map(
      (item) => (sum = sum + item?.product?.price * item?.quantity, console.log('Thanh Tien',item?.product?.price))
    );
    return sum;
  };
  return (
    <div id={'order-container'}>
      <div className={'info-container'}>
        <table className={'infortable'}>
          <tr>
            <td colSpan={3} className='table-name'>
              Thông tin đơn hàng
            </td>
          </tr>
          <tr>
            <td className={'th'}>ID </td>
            <td>:</td>
            <td className={'th'}>{order?.id}</td>
          </tr>
          <tr>
            <td className={'th'}>Người tạo </td>
            <td>:</td>
            <td className={'th'}>{order?.user}</td>
          </tr>
          <tr>
            <td className={'th'}>Phương thức thanh toán </td>
            <td>:</td>
            <td className={'th'}>{order?.payment_method}</td>
          </tr>
          <tr>
            <td className={'th'}>Ngày tạo </td>
            <td>:</td>
            <td className={'th'}>
              {moment(order?.created_at).format('HH:mm DD/MM/YYYY')}
            </td>
          </tr>
          <tr>
            <td className={'th'}>Trạng thái </td>
            <td>:</td>
            <td className={'th'}>{order?.status}</td>
          </tr>
          <tr>
            <td className={'th'}>Thanh toán </td>
            <td>:</td>
            <td className={'th'}>{displayStatus(order?.is_paid)}</td>
          </tr>
          <tr>
            <td className={'th'}>Địa chỉ </td>
            <td>:</td>
            <td className={'th'}>{order?.address}</td>
          </tr>
          <tr>
            <td className={'th'}>Thành tiền </td>
            <td>:</td>
            <td className={'th'}>{displayTotal()} VND</td>
          </tr>
        </table>
      </div>
      <div>
        <button className={'delete-button'} onClick={updatedadat}>
          Xác nhận đơn hàng
        </button>
        <button className={'delete-button'} onClick={updatedavc}>
          Xác nhận vận chuyển
        </button>
        <button className={'delete-button'} onClick={updatedagiao}>
          Xác nhận đã nhận
        </button>
      </div>
      <div>
        <button className={'delete1-button'} onClick={updatePaid}>
          Cập nhật thanh toán
        </button>
      </div>
    </div>
  );
}

InforOrder.propTypes = {
  order: PropTypes.object,
  setModal: PropTypes.func,
  loadOrder: PropTypes.func,
};
