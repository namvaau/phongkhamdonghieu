import { useState } from 'react'
import section from '../assets/img/section-img.png'
import ReactPlayer from "react-player";
import Modal from "react-modal";
const WhyChoose = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <section className="why-choose section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Chúng Tôi Cung Cấp Nhiều Thiết Bị Y Tế Hiện Đại & Chuyên Nghiệp</h2>
                                <img src={section} alt="Dịch vụ y tế" />
                                <p>
                                    Phòng khám Đông Hiếu cam kết mang đến các dịch vụ y tế chất lượng, từ khám tổng quát, chẩn đoán hình ảnh đến điều trị chuyên sâu, giúp bạn luôn khỏe mạnh.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            {/* Start Choose Left */}
                            <div className="choose-left">
                                <h3>HỆ THỐNG TRANG THIẾT BỊ Y TẾ HIỆN ĐẠI</h3>
                                <p>
                                    Bên cạnh việc chú trọng vào phát triển nguồn nhân lực, lãnh đạo bệnh viện cũng hết sức quan tâm đến công tác đầu tư trang thiết bị y tế nhầm đáp ứng về số lượng, vừa đảm bảo về chất lượng phục vụ.
                                </p>
                                <p>
                                    Chúng tôi cam kết cung cấp dịch vụ tận tâm, sử dụng trang thiết bị hiện đại và không ngừng cải tiến để đáp ứng nhu cầu chăm sóc sức khỏe của cộng đồng.
                                </p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul className="list">
                                            <li>
                                                <i className="fa fa-caret-right" />
                                                Hệ thống xét nghiệm hoàn chỉnh sinh hoá, huyết học, miễn dịch
                                            </li>
                                            <li>
                                                <i className="fa fa-caret-right" />
                                                Hệ thống mổ nội soi đa chiều
                                            </li>
                                            <li>
                                                <i className="fa fa-caret-right" />
                                                Siêu âm 4D, 5D
                                            </li>
                                            <li>
                                                <i className="fa fa-caret-right" />
                                                Hệ thống máy chụp X-quang kỹ thuật số DR
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul className="list">
                                            <li>
                                                <i className="fa fa-caret-right" />
                                                Hệ thống chụp mạch máu số hoá xoá nền - DSA
                                            </li>
                                            <li>
                                                <i className="fa fa-caret-right" />
                                                Hệ thống máy chụp CT-Scanner 32 lát cắt
                                            </li>
                                            <li>
                                                <i className="fa fa-caret-right" />
                                                Hệ thông nội soi tiêu hoá
                                            </li>
                                            <li>
                                                <i className="fa fa-caret-right" />
                                                Hệ thống lưu trữ và truyền tải hình ảnh y tế PACS
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* End Choose Left */}
                        </div>
                        <div className="col-lg-6 col-12">
                            {/* Start Choose Rights */}
                            <div className="choose-right">
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
                                        <ReactPlayer url="https://www.youtube.com/watch?v=sCv-MMADrY0" playing controls width="100%" />
                                    </div>
                                </Modal>

                            </div>
                            {/* End Choose Rights */}
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default WhyChoose