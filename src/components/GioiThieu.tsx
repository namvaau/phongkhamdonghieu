import { useState } from 'react'
import ReactPlayer from "react-player";
import Modal from "react-modal";
import { Link } from 'react-router-dom';
const GioiThieu = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <section className="why-choose section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            {/* Start Choose Left */}
                            <div className="choose-left">
                                <h3>Phòng khám Đa khoa Đông Hiếu <br />
                                    <span style={{ fontStyle: 'italic' }}>Y Đức Tạo Niềm Tin</span>
                                </h3>
                                <p>
                                    Phòng khám Đa khoa Đông Hiếu là địa chỉ uy tín về khám chữa bệnh, với đội ngũ chuyên gia - bác sĩ hàng đầu, trang thiết bị hiện đại, cùng các phác đồ điều trị hiệu quả, khoa học mang đến dịch vụ khám, điều trị, chăm sóc sức khỏe cao cấp, toàn diện với chi phí hợp lý. Với phương châm “xem người bệnh như người thân, người nhà của chính mình”nên  những năm qua đội ngũ y bác sỹ của phòng khám luôn không ngừng nỗ lực, trau dồi đạo đức, chuyên môn nghiệp vụ.
                                </p>
                                <Link to="/ve-chung-toi" style={{ fontWeight: 'bold' }}>XEM CHI TIẾT</Link>
                                <i className="fa fa-long-arrow-right" style={{ color: '', marginLeft: '5px' }} />
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
                </div>
            </section>

        </>
    )
}

export default GioiThieu