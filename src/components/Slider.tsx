import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';

import banner2 from '../assets/img/thaydoi.png';
import banner3 from '../assets/img/slider1.jpg';
import banner5 from '../assets/img/slider4.jpg';
import banner6 from '../assets/img/slider5.jpg';

const Slider = () => {
    const slides = [
        { id: 4, img: banner2, title: "Ngày Thầy Thuốc Việt Nam 27/2/2025", btnText: "Xem Chi Tiết" },
        { id: 6, img: banner6, title: "Ngày Thầy Thuốc Việt Nam 27/2/2025", btnText: "Xem Chi Tiết" },
        { id: 1, img: banner5, title: "Ngày Thầy Thuốc Việt Nam 27/2/2025", btnText: "Xem Chi Tiết" },
        { id: 2, img: banner3, title: "Ngày Thầy Thuốc Việt Nam 27/2/2025", btnText: "Xem Chi Tiết" },
    ];

    return (
        <section className="slider">
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop
                speed={1000}
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="single-slider" style={{ backgroundImage: `url(${slide.img})` }}>
                            {/* Gradient Overlay */}
                            <div className="overlay"></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-7">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Slider;
