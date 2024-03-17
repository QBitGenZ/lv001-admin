import React from 'react';
import SmallContainerHP from './SmallContainerHP';
// import HPChart from './HPChart';
export default function HomePageSection() {
  // const labels = ['6/2022', '7/2022', '8/2022', '9/2022', '10/2022', '11/2022',];
  // const data = [100000, 150000, 200000, 180000, 120000, 160000,];
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
      {/* <div className='chart-container'>
        <h2>Doanh Thu Theo Tháng</h2>
        <HPChart labels={labels} data={data} />
      </div> */}
    </div>
  );
}
