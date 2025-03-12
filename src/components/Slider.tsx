import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import banner1 from '../assets/img/slider.jpg';
import banner2 from '../assets/img/slider2.jpg';
import banner3 from '../assets/img/slider3.jpg';
import banner4 from '../assets/img/slider4.jpg';
import banner5 from '../assets/img/slider5.jpg';

const Slider = () => {
    const slides = [
        { id: 1, img: banner1, title: "Ngày Thầy Thuốc Việt Nam 27/2/2025", btnText: "Xem Chi Tiết" },
        { id: 2, img: banner2, title: "Ngày Thầy Thuốc Việt Nam 27/2/2025", btnText: "Xem Chi Tiết" },
        { id: 3, img: banner3, title: "Ngày Thầy Thuốc Việt Nam 27/2/2025", btnText: "Xem Chi Tiết" },
        { id: 4, img: banner4, title: "Ngày Thầy Thuốc Việt Nam 27/2/2025", btnText: "Xem Chi Tiết" },
        { id: 5, img: banner5, title: "Ngày Thầy Thuốc Việt Nam 27/2/2025", btnText: "Xem Chi Tiết" },
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
                                        <div className="text">
                                            {/* <h1>{slide.title}</h1>
                                            <p className="short-text">
                                                Nhân dịp Ngày Thầy thuốc Việt Nam, chúng tôi xin gửi lời tri ân sâu sắc đến những người đã và đang cống hiến cho ngành y.
                                                Chúc các y, bác sĩ luôn mạnh khỏe, hạnh phúc và tiếp tục mang đến những điều tốt đẹp cho cộng đồng.
                                            </p>
                                            <div className="button">
                                                <a href="#" className="btn">
                                                    {slide.btnText}
                                                </a>
                                            </div> */}
                                        </div>
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
