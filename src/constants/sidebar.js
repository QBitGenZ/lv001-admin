import { faCircleCheck,
  faSquarePollVertical,
  faGear,
  faHouse,
  faUser,
  faShirt, } from '@fortawesome/free-solid-svg-icons';

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
        id: 3,
        label: 'Thống kê người dùng',
      },
      {
        id: 4,
        label: 'Thống kê đơn vị từ thiện',
      },
      {
        id: 5,
        label: 'Thống kê sự kiện',
      },
    ],
  },
  // {
  //   id: 4,
  //   label: 'Đăng tải',
  //   logo: faPenToSquare,
  //   subs: [
  //     {
  //       id: 1,
  //       label: 'Đăng thông báo',
  //     },
  //     {
  //       id: 2,
  //       label: 'Đăng sự kiện',
  //     },
  //   ],
  // },
  {
    id: 5,
    label: 'Quản lý loại sản phẩm',
    logo: faShirt,
  },
  {
    id: 6,
    label: 'Quản lý tài khoản',
    logo: faUser,
  },
  {
    id: 7,
    label: 'Cài đặt',
    logo: faGear,
  },
];

export default data;
