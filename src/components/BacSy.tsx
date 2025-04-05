import pl1 from '../assets/img/1.png';
import pl2 from '../assets/img/2.png';
import pl3 from '../assets/img/3.png';
import pl4 from '../assets/img/4.png';
import section from '../assets/img/section-img.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const BacSy = () => {
    const portfolioItems = [
        { id: 1, img: pl1, link: 'portfolio-details.html' },
        { id: 2, img: pl2, link: 'portfolio-details.html' },
        { id: 3, img: pl3, link: 'portfolio-details.html' },
        { id: 4, img: pl4, link: 'portfolio-details.html' },
    ];
    return (
        <>
            <section className="services section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Đội ngũ bác sĩ</h2>
                                <img src={section} alt="Dịch vụ y tế" />
                                <p>
                                    Phòng khám Đa khoa Đông Hiếu tự hào là đơn vị quy tụ đội ngũ bác sĩ chuyên môn cao, giàu kinh nghiệm và luôn tâm huyết, tận tụy nghề
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container">
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
                                    </div>

                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>

        </>
    )
}

export default BacSy