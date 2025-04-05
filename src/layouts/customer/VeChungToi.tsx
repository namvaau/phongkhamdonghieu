import Breadcrumbs from '../../components/Breadcrumbs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import client1 from '../../assets/img/client1.png'
import ReactPlayer from "react-player";
import Modal from "react-modal";
import { useState } from 'react';
import im1 from '../../assets/img/2.jpg'
import im2 from '../../assets/img/27.jpg'
const VeChungToi = () => {
    const clients = [
        client1,
    ];
    const [isOpen, setIsOpen] = useState(false);
    const [fontSize, setFontSize] = useState(16);

    const increaseFontSize = () => setFontSize((prev) => Math.min(prev + 2, 30));
    const decreaseFontSize = () => setFontSize((prev) => Math.max(prev - 2, 10));
    return (
        <>
            <Breadcrumbs title='Về Chúng Tôi' />
            <section className="why-choose section">
                <div className="container">
                    <div className="meta" style={{ display: 'flex', cursor: 'pointer', marginBottom: '20px' }}>
                        <p onClick={decreaseFontSize}><i className="fa fa-minus" aria-hidden="true"></i></p>
                        <span style={{ fontSize: `${fontSize}px`, margin: "0 20px" }}>Aa</span>
                        <p onClick={increaseFontSize}><i className="fa fa-plus" aria-hidden="true"></i></p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            {/* Start Choose Left */}
                            <div className="choose-left">
                                <h3>VỀ CHÚNG TÔI
                                </h3>
                                <p style={{ fontSize: `${fontSize}px`}}>
                                    Công ty Cổ phần Khám chữa bệnh Đông Hiếu được thành lập và đăng ký kinh doanh ngày 20/06/2019 với lĩnh vực hoạt động là Khám chữa bệnh và được Sở y tế Nghệ An cấp giấy phép hoạt động Khám chữa bệnh số 1092/NA-GPHĐ với tên gọi là Phòng khám Đa khoa Đông Hiếu. Toạ lạc trên trục đường giao thông QL48 tại Xóm Đông Mỹ, Xã Đông Hiếu, TX Thái Hoà với nhiệm vụ cốt lõi là chăm sóc sức khỏe nhân dân trên địa bàn Thị xã Thái Hòa và các vùng miền lân cận. Năm 2021, Phòng khám đã được Cơ quan Bảo hiểm xã hội tỉnh Nghệ An thẩm định và cho phép triển khai khám chữa bệnh, cấp phát thuốc BHYT cho nhân dân.
                                </p>
                            </div>

                            {/* End Choose Left */}
                        </div>
                        <div className="col-lg-6 col-12">
                            {/* Start Choose Rights */}
                            <div className="choose-right active">
                                <div className="video-image">
                                    <div className="promo-video">
                                        <div className="waves-block">
                                            <div className="waves wave-1" />
                                            <div className="waves wave-2" />
                                            <div className="waves wave-3" />
                                        </div>
                                    </div>
                                    <button className="video video-popup" onClick={() => setIsOpen(true)}>
                                        <i className="fa fa-play" />
                                    </button>
                                </div>

                                {/* Popup Video */}
                                <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} className="modal-video">
                                    <div className="video-wrapper">
                                        <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
                                        <ReactPlayer url="https://youtu.be/iPYfEct25f4" playing controls width="100%" />
                                    </div>
                                </Modal>

                            </div>
                            {/* End Choose Rights */}
                        </div>

                    </div>
                    <div className="choose-left" style={{ marginTop: '20px' }}>
                        <p style={{ fontSize: `${fontSize}px`}}>
                            Hiện nay, phòng khám đa khoa Đông Hiếu có 46 cán bộ y bác sỹ. Với phương châm “xem người bệnh như người thân, người nhà của chính mình”nên  những năm qua đội ngũ y bác sỹ của phòng khám luôn không ngừng nỗ lực, trau dồi đạo đức, chuyên môn nghiệp vụ. Bên cạnh đó, phòng khám cũng đã mạnh dạn khai thác triệt để ứng dụng công nghệ thông tin vào công tác khám chữa bệnh . Hiện, phòng khám có máy chụp cắt lớp vi tính 32 dãy đời mới, hệ thống nội soi tiêu hóa – dạ dày – đại tràng; Hệ thống xét nghiệm tự động; Xe cứu thương và các trang thiết bị hiện đại đáp ứng nhu cầu khám chữa bệnh và vận chuyển bệnh nhân cấp cứu. Phòng khám đa khoa Đông Hiếu là một trong những phòng khám ứng dụng tốt hệ thống công nghệ thông tin trong chuyển đổi số, đầu tư hệ thống số tự động, liên kết với tuyến trên, luôn cải cách thủ tục hành chính, giảm tối đa thời gian chờ đợi của nhân dân.  Ngoài ra, Phòng khám  tích cực phát triển thêm nhiều kỹ thuật chuyên khoa. Do vậy, mặc dù trong thời gian qua, có nhiều biến động do dịch bệnh Covid - 19 gây ra nhưng tập thể Phòng khám đa khoa Đông Hiếu vẫn luôn hoàn thành tốt các nhiệm vụ được giao, giữ vững ổn định chính trị nội bộ, đời sống của cán bộ nhân viên được đảm bảo, công tác khám chữa bệnh cho nhân dân dần được cải thiện, chất lượng dịch vụ ngày càng nâng lên, góp phần vào sự phát triển kinh tế xã hội của địa phương và đạt được nhiều thành quả đáng khích lệ. Điều đó được thể hiện rõ nét như: Số lượt khám bệnh, chữa bệnh ngoại trú năm 2024 là trên 40 nghìn lượt người, luỹ kế năm 2020 là trên 148 nghìn lượt người.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <img src={im1} alt="" />
                        </div>
                        <div className="col-lg-6 col-12">
                            <img src={im2} alt="" />
                        </div>
                    </div>
                    <div className="choose-left" style={{ marginTop: '20px' }}>
                        <p style={{ fontSize: `${fontSize}px`}}>
                            Đội ngũ lãnh đạo của Công ty CP khám chữa bệnh Đông Hiếu là sự kết hợp giữa bề dày kinh nghiệm lâu năm và sự nhiệt huyết với sứ mệnh là khám chữa bệnh cứu người. Tổ chức bộ máy gồm : Ban lãnh đạo, các bộ phận Cận Lâm sàng, Lâm sàng và bộ phận Hành chính phối hợp làm việc hiệu quả. Điều đặc biệt của phòng khám đa khoa Đông Hiếu là phòng khám có chi bộ, có tổ chức công đoàn, đoàn thanh niên. Đây là chi bộ ngoài nhà nước đầu tiên tại Thái Hoà trực thuộc Đảng uỷ xã. Từ khi thành lập đến nay chi bộ, các tổ chức đoàn thể của phòng khám đã có rất nhiều hoạt động thiện nguyện và phong trào luyện tập thể dục thể thao cũng được duy trì, phát triển rầm rộ. Điều đó đã góp phần tạo sự đồng thuận, mối đoàn kết, xây dựng cộng sự và cùng nhau nỗ lực trong công tác khám chữa bệnh. Trong hai năm liền 2023 và năm 2024, Chi bộ được xếp loại hoàn thành tốt nhiệm vụ; Đ/c Bí thư chi bộ được Đảng bộ xếp loại hoàn thành xuất sắc nhiệm vụ; tập thể công đoàn và các cá nhân có thành tích xuất sắc đã được Liên đoàn Lao động Thị xã Thái Hòa tặng giấy khen; chi đoàn TNCSHCM phòng khám được thị đoàn Thái Hoà tặng giấy khen vì có nhiều hoạt động an sinh xã hội ý nghĩa.
                        </p>
                    </div>
                </div>
            </section>
            <section className="why-choose section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            {/* Start Choose Left */}
                            <div className="choose-left" style={{ fontSize: `${fontSize}px`}}>
                                <h3>QUYỀN LỢI CỦA NGƯỜI BỆNH</h3>
                                <p>
                                    <i className="fa fa-caret-right" /> Quyền lợi được khám bệnh, chữa bệnh có chất lượng phù hợp với điều
                                    kiện thực tế.
                                </p>
                                <p>
                                    <i className="fa fa-caret-right" /> Quyền được tôn trọng bí mật riêng tư.
                                </p>
                                <p>
                                    <i className="fa fa-caret-right" /> Quyền được tôn trọng danh dự, bảo vệ sức khỏe trong khám bệnh, chữa
                                    bệnh.
                                </p>
                                <p>
                                    <i className="fa fa-caret-right" /> Quyền được lựa chọn trong khám bệnh, chữa bệnh.
                                </p>
                                <p>
                                    <i className="fa fa-caret-right" /> Quyền được cung cấp thông tin về hồ sơ bệnh án và chi phí khám bệnh,
                                    chữa bệnh.
                                </p>
                                <p>
                                    <i className="fa fa-caret-right" />  Quyền được từ chối chữa bệnh và ra khỏi cơ sở khám bệnh, chữa bệnh.
                                </p>
                                <p>
                                    <i className="fa fa-caret-right" />  Quyền của người bệnh bị mất năng lực hành vi dân sự, không có năng lực
                                    hành vi dân sự, hạn chế năng lực hành vi dân sự hoặc người chưa thành
                                    niên dưới 18 tuổi.
                                </p>
                                <p className="quote">“Trích luật khám chữa bệnh”</p>
                            </div>

                            {/* End Choose Left */}
                        </div>
                        <div className="col-lg-6 col-12">
                            {/* Start Choose Rights */}
                            <div className="choose-left" style={{ fontSize: `${fontSize}px`}}>
                                <h3>NGHĨA VỤ CỦA NGƯỜI BỆNH</h3>
                                <p>
                                    <i className="fa fa-caret-right" /> Nghĩa vụ tôn trọng người hành bệnh.
                                </p>
                                <p>
                                    <i className="fa fa-caret-right" /> Nghĩa vụ chấp hành các quy định trong khám bệnh, chữa bệnh.
                                </p>
                                <p>
                                    <i className="fa fa-caret-right" /> Nghĩa vụ chi trả chi phí khám bệnh, chữa bệnh.
                                </p>
                                <p className="quote">“Trích luật khám chữa bệnh”</p>
                            </div>
                            {/* End Choose Rights */}
                        </div>
                    </div>
                </div>
            </section>
            <div className="clients overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-12">
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={20}
                                loop={true}
                                autoplay={{ delay: 2000 }}
                                modules={[Autoplay]}
                                breakpoints={{
                                    320: { slidesPerView: 2 },
                                    768: { slidesPerView: 3 },
                                    1024: { slidesPerView: 4 },
                                }}
                            >
                                {clients.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="single-clients">
                                            <img src={image} alt={`Client ${index + 1}`} />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default VeChungToi