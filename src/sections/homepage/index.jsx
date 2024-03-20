import React from 'react';
import SmallContainerHP from './SmallContainerHP';
import HPChart from './HPChart';
export default function HomePageSection() {
  return (
    <div id={'HomePageSection'}>
      <div className={'container'}>
        <SmallContainerHP
          title={'Người bán'}
          newnumber={12275}
          unit={'Người'}
          oldnumber={11775}
        />
        <SmallContainerHP
          title={'Người mua'}
          newnumber={12275}
          unit={'Người'}
          oldnumber={11775}
        />
        <SmallContainerHP
          title={'Đơn vị từ thiện'}
          newnumber={12275}
          unit={'Đơn vị'}
          oldnumber={11775}
        />
      </div>
      <div className={'chart-container'}>
        <h2>Doanh Thu Theo Tháng</h2>
        <HPChart className={'chart'}/>
      </div>
    </div>
  );
}
