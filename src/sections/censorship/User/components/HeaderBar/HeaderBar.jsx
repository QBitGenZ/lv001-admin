import React from 'react';
import PropTypes from 'prop-types';
import '../../../Posts/components/HeaderBar/HeaderBar.css';
import DetailHeaderBar from '../../../Posts/components/HeaderBar/DetailHeaderBar';

export default function HeaderBar({ chuaduyet, daduyet, baocao, tuchoi, }) {
  return (
    <div className={'HeaderBar'}>
      <div>
        <DetailHeaderBar
          title={'Tổng số nhà từ thiện'}
          number={chuaduyet+daduyet+baocao+tuchoi}
          color={'#6177FB'}
        />
      </div>
      <div>
        <DetailHeaderBar number={daduyet} title={'Đã xác minh'} color={'#46BEB0'} />
      </div>
      <div>
        <DetailHeaderBar
          number={chuaduyet}
          title={'Chưa xác minh'}
          color={'#E1E600'}
        />
      </div>
      <div>
        <DetailHeaderBar number={baocao} title={'Báo cáo'} color={'#FA9467'} />
      </div>
      <div>
        <DetailHeaderBar number={tuchoi} title={'Từ chối'} color={'#FE2F02'} />
      </div>
    </div>
  );
}

HeaderBar.propTypes = {
  chuaduyet: PropTypes.number,
  daduyet: PropTypes.number,
  baocao: PropTypes.number,
  tuchoi: PropTypes.number,
};
