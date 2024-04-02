import { faCircleCheck,
  faSquarePollVertical,
  faPenToSquare,
  faGear,
  faHouse, } from '@fortawesome/free-solid-svg-icons';

const data = [
  {
    id: 1,
    label: 'Trang chủ',
    logo: faHouse,
  },
  {
    id: 2,
    label: 'Kiểm duyệt',
    logo: faCircleCheck,
    subs: [
      {
        id: 1,
        label: 'Kiểm duyệt sản phẩm',
      },
      {
        id: 2,
        label: 'Kiểm duyệt thông tin',
      },
      {
        id: 3,
        label: 'Kiểm duyệt sự kiện',
      },
    ],
  },
  {
    id: 3,
    label: 'Thống kê',
    logo: faSquarePollVertical,
    subs: [
      {
        id: 2,
        label: 'Thống kê người bán',
      },
      {
        id: 3,
        label: 'Thống kê người mua',
      },
      {
        id: 4,
        label: 'Thống kê đơn vị từ thiện',
      },
    ],
  },
  {
    id: 4,
    label: 'Đăng tải',
    logo: faPenToSquare,
    subs: [
      {
        id: 1,
        label: 'Đăng thông báo',
      },
      {
        id: 2,
        label: 'Đăng sự kiện',
      },
    ],
  },
  {
    id: 5,
    label: 'Cài đặt',
    logo: faGear,
  },
];

export default data;
