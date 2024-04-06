import React from 'react';
import './HeaderBar.css';
import PropTypes from 'prop-types';
import DetailHeaderBar from './DeTailHeaderBar';
export default function HeaderBar({ events, }) {
  var cd = 0,
    dd = 0,
    bc = 0,
    tc = 0;
  function cate(events) {
    events.map((event) => {
      if (event.status == 'Chưa duyệt') {
        cd = cd + 1;
      } else if (event.status == 'Đã duyệt') {
        dd = dd + 1;
      } else if (event.status == 'Báo cáo') {
        bc = bc + 1;
      } else if (event.status == 'Từ chối') {
        tc = tc + 1;
      }
    });
  }
  cate(events);
  return (
    <div className={'HeaderBar'}>
      <div>
        <DetailHeaderBar
          title={'Tổng số sự kiện'}
          number={events.length}
          color={'#6177FB'}
        />
      </div>
      <div>
        <DetailHeaderBar
          number={dd}
          title={'Sự kiện đã duyệt'}
          color={'#46BEB0'}
        />
      </div>
      <div>
        <DetailHeaderBar
          number={cd}
          title={'Sự kiện chưa duyệt'}
          color={'#E1E600'}
        />
      </div>
      <div>
        <DetailHeaderBar
          number={bc}
          title={'Sự kiện báo cáo'}
          color={'#FA9467'}
        />
      </div>
      <div>
        <DetailHeaderBar
          number={tc}
          title={'Sự kiện từ chối'}
          color={'#FE2F02'}
        />
      </div>
    </div>
  );
}

HeaderBar.propTypes = {
  events: PropTypes.array,
};
