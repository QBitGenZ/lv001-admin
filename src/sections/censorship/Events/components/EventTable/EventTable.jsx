import React from 'react';
import PropTypes from 'prop-types';
import './EventTable.css';
import TableRow from './TableRow.jsx';
import { Pagination, } from '../../../../../components/index.js';
export default function EventTable({
  events,
  getEvents,
  totalPage,
  currentPage,
  onPageChange,
}) {
  console.log(events);
  return (
    <div className={'event-Table'}>
      <table id='eventTable'>
        <tr className='propdtabletr'>
          <th className='prodtabletdth prodtableth'>STT</th>
          <th className='prodtabletdth prodtableth'>Sự kiện</th>
          <th className='prodtabletdth prodtableth'>Người đăng</th>
          <th className='prodtabletdth prodtableth'>Thời gian bắt đầu</th>
          <th className='prodtabletdth prodtableth'>Thời gian kết thúc</th>
          <th className='prodtabletdth prodtableth'>Trạng thái</th>
        </tr>
        {events?.map((event,index) => (
          <TableRow key={event?.id} index={index} event={event} getEvents={getEvents} />
        ))}
      </table>
      <Pagination
        totalPage={totalPage}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </div>
  );
}

EventTable.propTypes = {
  events: PropTypes.array,
  getEvents: PropTypes.func,
  totalPage: PropTypes.number,
  currentPage: PropTypes.number,
  onPageChange: PropTypes.func,
};
