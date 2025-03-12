import React from 'react'
import Breadcrumbs from '../../components/Breadcrumbs'
import WelcomeSection from '../../components/WelcomeSection'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import client1 from '../../assets/img/client1.png'
import client2 from '../../assets/img/client2.png'
import client3 from '../../assets/img/client3.png'
import client4 from '../../assets/img/client4.png'
import client5 from '../../assets/img/client5.png'

const AboutUs = () => {
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
            <Breadcrumbs title='Về Chúng Tôi' />
            <WelcomeSection />
            <section className="why-choose section">
                <div className="container">
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
                            <div className="choose-right">
                                <div className="video-image">
                                    <div className="promo-video">

                                    </div>
                                </div>

                            </div>
                            {/* End Choose Rights */}
                        </div>
                    </div>
                </div>
            </section>
            <section className="why-choose section" style={{ padding: '20px 0 50px 0' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            {/* Start Choose Rights */}
                            <div className="choose-right active">
                                <div className="video-image">
                                    <div className="promo-video">

                                    </div>
                                </div>

                            </div>
                            {/* End Choose Rights */}
                        </div>
                        <div className="col-lg-6 col-12">
                            {/* Start Choose Left */}
                            <div className="choose-left">
                                <h3 style={{paddingTop: '20px'}}>NGHĨA VỤ CỦA NGƯỜI BỆNH</h3>
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

                            {/* End Choose Left */}
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

export default AboutUs