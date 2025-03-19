import Slider from '../../components/Slider'
import Schedule from '../../components/Schedule'
import Feautes from '../../components/Feautes'
import Facts from '../../components/Facts'
import WhyChoose from '../../components/WhyChoose'
import Call from '../../components/Call'
import Portfolio from '../../components/Portfolio'
import Services from '../../components/Services'
import Appointment from '../../components/Appointment'
import section from '../../assets/img/section-img.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import client1 from '../../assets/img/client1.png'
import client2 from '../../assets/img/client2.png'
import client3 from '../../assets/img/client3.png'
import client4 from '../../assets/img/client4.png'
import client5 from '../../assets/img/client5.png'

import { useState } from 'react'
import { Link } from 'react-router-dom'
import HotNews from '../../components/HotNews'

const IndexCustomer = () => {
    const [isActive, setIsActive] = useState(false);

    const handleGetProClick = () => {
        setIsActive(!isActive);
    };
    const clients = [
        client1,
        client2,
        client3,
        client4,
        client5,
        client1,
        client2,
        client3,
        client4,
        client5,
    ];
    return (
        <>
            <ul className={`pro-features ${isActive ? "active" : ""}`}>
                <a className="get-pro" onClick={handleGetProClick}>
                    Liên Hệ
                </a>
                <li className="big-title">Phòng Khám Đa Khoa Đông Hiếu</li>
                <li className="title">Website đang trong quá trình phát triển</li>
                {/* <li>2+ premade home pages</li>
                <li>20+ html pages</li>
                <li>Color Plate With 12+ Colors</li>
                <li>Sticky Header / Sticky Filters</li>
                <li>Working Contact Form With Google Map</li> */}
                <div className="button">
                    <Link
                        to={'/news'}
                        className="btn"
                    >
                        Xem Tin Tức
                    </Link>
                    <Link
                        to={'/contact'}
                        className="btn"
                    >
                        Liên hệ
                    </Link>
                </div>
            </ul>

            <Slider />
            <Schedule />
            <HotNews/>
            <Feautes />
            <Services />
            <Call />
            <WhyChoose />
            <Facts />
            <Portfolio />
            <section className="why-choose section" style={{ paddingTop: '0' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Về Chúng Tôi</h2>
                                <img src={section} alt="Dịch vụ y tế" />
                                <p>
                                    Chúng tôi cung cấp các dịch vụ y tế chất lượng, đáp ứng nhu cầu chăm sóc sức khỏe của bạn và gia đình.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            {/* Start Choose Left */}
                            <div className="choose-left">
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
                            <div className="choose-left">
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
            <Appointment />
        </>
    )
}

export default IndexCustomer