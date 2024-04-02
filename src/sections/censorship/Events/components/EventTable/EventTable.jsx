import React from 'react';
import PropTypes from 'prop-types';
import './EventTable.css';
import TableRow from './TableRow.jsx';
export default function EventTable({ events, getEvents, }) {
  console.log(events);
  return (
    <div className={'event-Table'}>
      <table id='eventTable'>
        <tr className='propdtabletr'>
          <th className='prodtabletdth prodtableth'>Người đăng</th>
          <th className='prodtabletdth prodtableth'>Sự kiện</th>
          <th className='prodtabletdth prodtableth'>Thời gian bắt đầu</th>
          <th className='prodtabletdth prodtableth'>Thời gian kết thúc</th>
          <th className='prodtabletdth prodtableth'>Trạng thái</th>
        </tr>
        {events?.map((event) => (
          <TableRow
            key={event?.id}
            event={event}
            getevents={getEvents}
          />
        ))}
      </table>
    </div>
  );
}

EventTable.propTypes = {
  events: PropTypes.array,
  getEvents: PropTypes.func,
};
