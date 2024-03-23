import React from 'react';
import './HeaderBar.css';
import PropTypes from 'prop-types';
import DetailHeaderBar from './DetailHeaderBar';
export default function HeaderBar({ products, }) {
  var cd = 0,
    dd = 0,
    bc = 0,
    tc = 0;
  function cate(products) {
    products.map((product) => {
      if (product.status == 'Chưa duyệt') {
        cd = cd + 1;
      } else if (product.status == 'Đã duyệt') {
        dd = dd + 1;
      } else if (product.status == 'Báo cáo') {
        bc = bc + 1;
      } else if (product.status == 'Từ chối') {
        tc = tc + 1;
      }
    });
  }
  cate(products);
  return (
    <div className={'HeaderBar'}>
      <div>
        <DetailHeaderBar
          title={'Tổng số sản phẩm'}
          number={products.length}
          color={'#6177FB'}
        />
      </div>
      <div>
        <DetailHeaderBar
          number={dd}
          title={'Sản phẩm đã duyệt'}
          color={'#46BEB0'}
        />
      </div>
      <div>
        <DetailHeaderBar
          number={cd}
          title={'Sản phẩm chưa duyệt'}
          color={'#E1E600'}
        />
      </div>
      <div>
        <DetailHeaderBar
          number={bc}
          title={'Sản phẩm báo cáo'}
          color={'#FA9467'}
        />
      </div>
      <div>
        <DetailHeaderBar
          number={tc}
          title={'Sản phẩm từ chối'}
          color={'#FE2F02'}
        />
      </div>
    </div>
  );
}

HeaderBar.propTypes = {
  products: PropTypes.array,
};
