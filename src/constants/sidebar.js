import { faCircleCheck, faSquarePollVertical, faPenToSquare, faGear, } from '@fortawesome/free-solid-svg-icons';

const data = [
  {
    id: 1,
    label: 'Kiểm duyệt',
    logo: faCircleCheck,
    subs: [
      {
        id: 1,
        label: 'Kiểm duyệt bài viết',
      },
      {
        id: 2,
        label: 'Kiểm duyệt thông tin',
      },
    ],
  },
  {
    id: 2,
    label: 'Thống kê',
    logo: faSquarePollVertical,
    subs: [
      {
        id: 1,
        label: 'Thống kê hệ thống',
      },
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
    id: 3,
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
    id: 4,
    label: 'Cài đặt',
    logo: faGear,
  },
];

export default data;