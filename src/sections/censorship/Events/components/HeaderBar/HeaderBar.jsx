import React from 'react';
import './HeaderBar.css';
import PropTypes from 'prop-types';
import DetailHeaderBar from './DeTailHeaderBar';
export default function HeaderBar({ total, chuaduyet, daduyet, tuchoi, baocao, }) {
  return (
    <div className={'HeaderBar'}>
      <div>
        <DetailHeaderBar
          title={'Tổng số sự kiện'}
          number={total}
          color={'#6177FB'}
        />
      </div>
      <div>
        <DetailHeaderBar
          number={daduyet}
          title={'Sự kiện đã duyệt'}
          color={'#46BEB0'}
        />
      </div>
      <div>
        <DetailHeaderBar
          number={chuaduyet}
          title={'Sự kiện chưa duyệt'}
          color={'#E1E600'}
        />
      </div>
      <div>
        <DetailHeaderBar
          number={baocao}
          title={'Sự kiện báo cáo'}
          color={'#FA9467'}
        />
      </div>
      <div>
        <DetailHeaderBar
          number={tuchoi}
          title={'Sự kiện từ chối'}
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
  tuchoi: PropTypes.number,
  baocao: PropTypes.number,
};
