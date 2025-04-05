import section from '../assets/img/section-img.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import pl1 from '../assets/img/mayxetnghiem1.jpg';
import pl2 from '../assets/img/sieuam.jpg';
import pl3 from '../assets/img/dv3.jpg';
import pl4 from '../assets/img/blog-sidebar1.jpg';
import pl5 from '../assets/img/blog-sidebar3.jpg';
const ThietBi = () => {
    const portfolioItems = [
        { id: 1, img: pl1, link: 'portfolio-details.html' },
        { id: 2, img: pl2, link: 'portfolio-details.html' },
        { id: 3, img: pl3, link: 'portfolio-details.html' },
        { id: 4, img: pl4, link: 'portfolio-details.html' },
        { id: 5, img: pl5, link: 'portfolio-details.html' },
    ];
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
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* End Choose Left */}
                        </div>
                        <div className="col-lg-6 col-12">
                            {/* Start Choose Rights */}
                            <div className="choose-right">
                                <div className="video-image"  style={{height: '200px'}}>
                                    <Swiper
                                        modules={[Pagination, Autoplay]}
                                        spaceBetween={20}
                                        slidesPerView={4}
                                        pagination={{ clickable: true }}
                                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                                        loop
                                        speed={800}
                                        breakpoints={{
                                            320: { slidesPerView: 1 },
                                            768: { slidesPerView: 1 },
                                            1024: { slidesPerView: 1 }
                                        }}
                                    >
                                        {portfolioItems.map((item) => (
                                            <SwiperSlide key={item.id}>
                                                <div className="single-pf">
                                                    <div className="image-container">
                                                        <img src={item.img} alt="Portfolio" className="" />
                                                    </div>
                                                </div>

                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                            {/* End Choose Rights */}
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ThietBi