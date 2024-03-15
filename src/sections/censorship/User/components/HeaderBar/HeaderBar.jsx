import React from 'react';
import '../../../Posts/components/HeaderBar/HeaderBar.css';
import DetailHeaderBar from '../../../Posts/components/HeaderBar/DetailHeaderBar';

export default function HeaderBar() {
  return (
    <div className={'HeaderBar'}>
      <div>
        <DetailHeaderBar
          title={'Tổng số nhà từ thiện'}
          number={9990}
          color={'#6177FB'}
        />
      </div>
      <div>
        <DetailHeaderBar
          number={9990}
          title={'Đã xác minh'}
          color={'#46BEB0'}
        />
      </div>
      <div>
        <DetailHeaderBar
          number={9990}
          title={'Chưa xác minh'}
          color={'#E1E600'}
        />
      </div>
      <div>
        <DetailHeaderBar
          number={9990}
          title={'Báo cáo'}
          color={'#FA9467'}
        />
      </div>
      <div>
        <DetailHeaderBar
          number={9990}
          title={'Từ chối'}
          color={'#FE2F02'}
        />
      </div>
    </div>
  );
}
