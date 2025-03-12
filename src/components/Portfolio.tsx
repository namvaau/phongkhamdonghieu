import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import pl1 from '../assets/img/pf1.jpg';
import pl2 from '../assets/img/pf2.jpg';
import pl3 from '../assets/img/pf3.jpg';
import pl4 from '../assets/img/pf4.jpg';
import pl5 from '../assets/img/pf5.jpg';
import section from '../assets/img/section-img.png'

const Portfolio = () => {
    const portfolioItems = [
        { id: 1, img: pl1, link: 'portfolio-details.html' },
        { id: 2, img: pl2, link: 'portfolio-details.html' },
        { id: 3, img: pl3, link: 'portfolio-details.html' },
        { id: 4, img: pl4, link: 'portfolio-details.html' },
        { id: 5, img: pl5, link: 'portfolio-details.html' },
    ];

    return (
        <section className="portfolio section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>Chúng tôi duy trì quy tắc vệ sinh nghiêm ngặt trong phòng khám</h2>
                            <img src={section} alt="Vệ sinh phòng khám" />
                            <p>
                                Phòng khám Đông Hiếu cam kết đảm bảo môi trường sạch sẽ, vô trùng, tuân thủ các quy định vệ sinh y tế nghiêm ngặt để bảo vệ sức khỏe của bệnh nhân và nhân viên y tế.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={4}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop
                    speed={800}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                >
                    {portfolioItems.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="single-pf">
                                <div className="image-container">
                                    <img src={item.img} alt="Portfolio" className="portfolio-img" />
                                </div>
                                <a href={item.link} className="btn">Xem Chi Tiết</a>
                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Portfolio;
