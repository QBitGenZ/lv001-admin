import React from 'react';
import './HeaderBar.css';
import PropTypes from 'prop-types';
import DetailHeaderBar from './DetailHeaderBar';
export default function HeaderBar({ total, chuaduyet, daduyet, tuchoi, baocao, }) {
  return (
    <div className={'HeaderBar'}>
      <div>
        <DetailHeaderBar
          title={'Tổng số sản phẩm'}
          number={total}
          color={'#6177FB'}
        />
      </div>
      <div>
        <DetailHeaderBar
          number={daduyet}
          title={'Sản phẩm đã duyệt'}
          color={'#46BEB0'}
        />
      </div>
      <div>
        <DetailHeaderBar
          number={chuaduyet}
          title={'Sản phẩm chưa duyệt'}
          color={'#E1E600'}
        />
      </div>
      <div>
        <DetailHeaderBar
          number={baocao}
          title={'Sản phẩm báo cáo'}
          color={'#FA9467'}
        />
      </div>
      <div>
        <DetailHeaderBar
          number={tuchoi}
          title={'Sản phẩm từ chối'}
          color={'#FE2F02'}
        />
      </div>
    </div>
  );
}

HeaderBar.propTypes = {
  total: PropTypes.number,
  chuaduyet: PropTypes.number,
  daduyet: PropTypes.number,
  baocao: PropTypes.number,
  tuchoi: PropTypes.number,
};
