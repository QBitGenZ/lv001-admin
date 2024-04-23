import React from 'react';
import { Selection, } from '../../../../../components';
import PropTypes from 'prop-types';
import './index.css';
export default function Filter({ setApproval, setStatus, status, approval, }) {
  return (
    <div id={'event-filter'}>
      <div className={'event-status'}>
        <Selection
          value={approval}
          setValue={setApproval}
          options={[
            {
              label: 'Trạng thái',
              value: 'all',
            },
            {
              label: 'Đã duyệt',
              value: 'approved',
            },
            {
              label: 'Chưa duyệt',
              value: 'pending',
            },
            {
              label: 'Từ chối',
              value: 'rejected',
            },
          ]}
        />
      </div>
      <div className={'event-time'}>
        <Selection
          value={status}
          setValue={setStatus}
          options={[
            {
              label: 'Thời gian',
              value: 'all',
            },
            {
              label: 'Sắp diễn ra',
              value: 'upcoming',
            },
            {
              label: 'Đã diễn ra',
              value: 'past',
            },
            {
              label: 'Đang diễn ra',
              value: 'ongoing',
            },
          ]}
        />
      </div>
    </div>
  );
}

Filter.propTypes = {
  setStatus: PropTypes.func,
  setApproval: PropTypes.func,
  status : PropTypes.string,
  approval: PropTypes.string,
};
