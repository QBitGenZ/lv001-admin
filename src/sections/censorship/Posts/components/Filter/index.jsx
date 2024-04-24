import React from 'react';
import { Selection, } from '../../../../../components';
import './index.css';
import PropTypes from 'prop-types';
export default function Filter({ gender, setGender, degree, setDegree, size, setSize, }) {
  return (
    <div id={'event-filter'}>
      <div className={'event-status'}>
        <Selection
          value={gender}
          setValue={setGender}
          options={[
            {
              label: 'Giới tính',
              value: 'all',
            },
            {
              label: 'Nam',
              value: 'Nam',
            },
            {
              label: 'Nữ',
              value: 'Nữ',
            },
            {
              label: 'Unisex',
              value: 'Unisex',
            },
          ]}
        />
      </div>
      <div className={'event-time'}>
        <Selection
          value={degree}
          setValue={setDegree}
          options={[
            {
              label: 'Độ mới',
              value: 'all',
            },
            {
              label: 'Mới',
              value: 'Mới',
            },
            {
              label: 'Vừa',
              value: 'Vừa',
            },
            {
              label: 'Cũ',
              value: 'Cũ',
            },
          ]}
        />
      </div>
      <div className={'event-time'}>
        <Selection
          value={size}
          setValue={setSize}
          options={[
            {
              label: 'Kích cỡ',
              value: 'all',
            },
            {
              label: 'S',
              value: 'S',
            },
            {
              label: 'M',
              value: 'M',
            },
            {
              label: 'L',
              value: 'L',
            },
            {
              label: 'XL',
              value: 'XL',
            },
            {
              label: '2XL',
              value: '2XL',
            },
            {
              label: '3XL',
              value: '3XL',
            },
          ]}
        />
      </div>
    </div>
  );
}

Filter.propTypes = {
  gender: PropTypes.string,
  size: PropTypes.string,
  degree: PropTypes.string,
  setGender: PropTypes.func,
  setSize: PropTypes.func,
  setDegree: PropTypes.func,
};
