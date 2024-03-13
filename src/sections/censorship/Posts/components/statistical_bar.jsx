import React from 'react';
import './statis.css';
import DetailStatisComPostCencorSection from './detail';
export default function StatisComPostCencorSection() {
  return (
    <div className={'container'}>
      <div>
        <DetailStatisComPostCencorSection
          number={9990}
          title={'Tổng số sản phẩm'}
          color={'#6177FB'}
        />
      </div>
      <div>
        <DetailStatisComPostCencorSection
          number={9990}
          title={'Sản phẩm đã duyệt'}
          color={'#46BEB0'}
        />
      </div>
      <div>
        <DetailStatisComPostCencorSection
          number={9990}
          title={'Sản phẩm chưa duyệt'}
          color={'#E1E600'}
        />
      </div>
      <div>
        <DetailStatisComPostCencorSection
          number={9990}
          title={'Sản phẩm báo cáo'}
          color={'#FA9467'}
        />
      </div>
      <div>
        <DetailStatisComPostCencorSection
          number={9990}
          title={'Sản phẩm từ chối'}
          color={'#FE2F02'}
        />
      </div>
    </div>
  );
}
