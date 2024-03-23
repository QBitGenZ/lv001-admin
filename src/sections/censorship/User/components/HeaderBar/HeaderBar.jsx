import React from 'react';
import PropTypes from 'prop-types';
import '../../../Posts/components/HeaderBar/HeaderBar.css';
import DetailHeaderBar from '../../../Posts/components/HeaderBar/DetailHeaderBar';

export default function HeaderBar({ charities, }) {
  var cd = 0,
    dd = 0,
    bc = 0,
    tc = 0;
  function cate(charities) {
    charities.map((charity) => {
      if (charity.status == 'Chưa duyệt') {
        cd = cd + 1;
      } else if (charity.status == 'Đã duyệt') {
        dd = dd + 1;
      } else if (charity.status == 'Báo cáo') {
        bc = bc + 1;
      } else if (charity.status == 'Từ chối') {
        tc = tc + 1;
      }
    });
  }
  cate(charities);
  return (
    <div className={'HeaderBar'}>
      <div>
        <DetailHeaderBar
          title={'Tổng số nhà từ thiện'}
          number={charities.length}
          color={'#6177FB'}
        />
      </div>
      <div>
        <DetailHeaderBar number={dd} title={'Đã xác minh'} color={'#46BEB0'} />
      </div>
      <div>
        <DetailHeaderBar
          number={cd}
          title={'Chưa xác minh'}
          color={'#E1E600'}
        />
      </div>
      <div>
        <DetailHeaderBar number={bc} title={'Báo cáo'} color={'#FA9467'} />
      </div>
      <div>
        <DetailHeaderBar number={tc} title={'Từ chối'} color={'#FE2F02'} />
      </div>
    </div>
  );
}

HeaderBar.propTypes = {
  charities: PropTypes.array,
};
