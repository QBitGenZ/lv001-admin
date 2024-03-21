import PropTypes from 'prop-types';
import React, { useState, } from 'react';
import '../../../../Posts/components/ProductTable/ProductModal.css';
import Modal from '../../../../../../components/Modal';
import AcptModal from '../../../../Posts/components/Modal/AcptModal';
export default function InfoUserModal() {
  const [rejmodal, setRejModal,] = useState(false);
  const [acptmodal, setAcptModal,] = useState(false);

  const setAcceptModal = () => {
    setAcptModal(true);
  };

  const setRejectModal = () => {
    setRejModal(true);
  };

  return (
    <>
      <div id='myModal' className={'productmodal'}>
        <div className={'modalcontent'}>
          <p className='proname'>Nam Phuong Foundation</p>
          <div className={'infoseller'}>
            <p className={'infouser'}>NTH Thanh </p>
            <p className={'infotime'}>20/10/2023 22:22pm</p>
          </div>
          <div>
            <p className='spcontent1'>
              Phong cách Y2K (thường được gọi là Y2K style) là một phong cách
              thời trang và thiết kế thịnh hành vào cuối thập kỷ 1990 và đầu
              thập kỷ 2000, chủ yếu trong giai đoạn trước và sau năm 2000 (từ
              Y2K - viết tắt của Year 2000). Phong cách này được đặc trưng bởi
              những đặc điểm và xu hướng thời trang tiêu biểu của thời kỳ đó.
              Dưới đây là một số đặc điểm của phong cách Y2K: + Áo khoác da: Áo
              khoác da, đặc biệt là áo khoác da màu đen, trở thành biểu tượng
              của phong cách Y2K và nó thường được kết hợp với các trang phục
              khác để tạo ra vẻ ngoại hình nữ tính và cá tính. Nó có thể được
              mặc cùng váy ngắn, quần jean bó sát, hoặc thậm chí cả váy satin và
              crop top. Đặc biệt, áo khoác da màu đen thường được kết hợp với
              các phụ kiện bóng bẩy như dây chuyền lớn, thắt lưng rộng, và kính
              râm to để tạo ra sự lòe loẹt và sặc sỡ cho trang phục. Ngoài màu
              đen, áo khoác da còn có thể có màu sắc khác nhau, như trắng, đỏ,
              và ngay cả các phiên bản metallic để làm cho trang phục trở nên đa
              dạng và phù hợp với sở thích cá nhân. Áo khoác da vẫn là một trong
              những món đồ phong cách Y2K được ưa chuộng và trở thành biểu tượng
              không thể thiếu của thời kỳ đó. + Quần bó sát: Quần bó sát hoặc
              quần legging thường được kết hợp với áo thun rộng và bao lưng
              thấp. Áo thun rộng, thường là áo thun oversize hoặc áo thun với
              phom dáng lớn, thường được mặc bên ngoài quần. Áo thun có thể có
              các họa tiết và in ấn thời trang hoặc màu sắc tươi sáng để tạo sự
              nổi bật. Bao lưng thấp là một trong những chi tiết thường thấy
              trong quần bó sát và quần legging Y2K. Điều này tạo ra một vẻ
              ngoại hình thấp và cá tính, và thường được kết hợp với áo thun
              crop top hoặc áo thun nửa dưới.
            </p>
          </div>
        </div>
        <div className={'modal-actions'}>
          <button onClick={setAcceptModal} className={'close acpt'}>
            Duyệt
          </button>
          <button onClick={setRejectModal} className={'close rej'}>
            Từ chối
          </button>
        </div>
      </div>
      {acptmodal && (
        <Modal
          title={'Kiểm duyệt tổ chức từ thiện'}
          body={
            <AcptModal
              setAcptModal={setAcptModal}
              modalmessage={'Đã duyệt tổ chức từ thiện thành công'}
            />
          }
          setShow={setAcptModal}
        />
      )}
      {rejmodal && (
        <Modal
          title={'Kiểm duyệt tổ chức từ thiện'}
          body={
            <AcptModal
              setAcptModal={setRejModal}
              modalmessage={'Đã từ chối tổ chức từ thiện'}
            />
          }
          setShow={setRejModal}
        />
      )}
    </>
  );
}

InfoUserModal.propTypes = {
  setModal: PropTypes.func,
};
