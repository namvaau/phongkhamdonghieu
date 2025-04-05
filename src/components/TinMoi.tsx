import section from '../assets/img/section-img.png';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BASE_URL, News } from '../interface/InterfaceData';
import axios from 'axios';

// Import Swiper.js
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Pagination, Autoplay } from 'swiper/modules';

const TinMoi = () => {
    const navigate = useNavigate();
    const [news, setNews] = useState<News[]>([]);

    useEffect(() => {
        const getNews = async () => {
            const response = await axios.get(`${BASE_URL}/news`);
            setNews(response.data);
        };
        getNews();
    }, []);

    const sortedNews = [...news].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat("vi-VN", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        }).format(date);
    };

    return (
        <>
            <section className="blog section" id="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Tin Tức Nổi Bật</h2>
                                <img src={section} alt="#" />
                                <p>
                                    Luôn cập nhật những thông tin y khoa quan trọng, kiến thức chăm sóc sức khỏe và các chương trình ưu đãi tại phòng khám Đông Hiếu.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Swiper Carousel */}
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{
                            768: { slidesPerView: 2 }, // 2 tin trên màn hình tablet
                            1024: { slidesPerView: 3 } // 3 tin trên màn hình lớn
                        }}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                    >
                        {sortedNews.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div
                                    style={{ cursor: 'pointer' }}
                                    className="single-news"
                                    onClick={() => navigate(`/tin-tuc/chi-tiet/${item.id}`, { state: { news } })}
                                >
                                    <div className="news-head">
                                        <img src={item.imageUrl} alt={item.title} className="news-image" />
                                    </div>
                                    <div className="news-body">
                                        <div className="news-content">
                                            <div className="date">{formatDate(item.date)}</div>
                                            <h2>
                                                <a onClick={() => navigate(`/tin-tuc/chi-tiet/${item.id}`, { state: { news } })}>{item.title}</a>
                                            </h2>
                                            <p className="text">{item.summary}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    );
};

export default TinMoi;
