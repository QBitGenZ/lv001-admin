import React from 'react';
import './HeaderBar.css';
import DetailHeaderBar from './DetailHeaderBar';
export default function HeaderBar() {
  return (
    <div className={'HeaderBar'}>
      <div>
        <DetailHeaderBar
          title={'Tổng số sản phẩm'}
          number={9990}
          color={'#6177FB'}
        />
      </div>
      <div>
        <DetailHeaderBar
          number={9990}
          title={'Sản phẩm đã duyệt'}
          color={'#46BEB0'}
        />
      </div>
      <div>
        <DetailHeaderBar
          number={9990}
          title={'Sản phẩm chưa duyệt'}
          color={'#E1E600'}
        />
      </div>
      <div>
        <DetailHeaderBar
          number={9990}
          title={'Sản phẩm báo cáo'}
          color={'#FA9467'}
        />
      </div>
      <div>
        <DetailHeaderBar
          number={9990}
          title={'Sản phẩm từ chối'}
          color={'#FE2F02'}
        />
      </div>
    </div>
  );
}
