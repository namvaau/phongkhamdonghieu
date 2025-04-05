import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import pl1 from '../assets/img/YHCT.png';
import pl2 from '../assets/img/NTH.png';
import pl3 from '../assets/img/NgTH.png';
import pl4 from '../assets/img/PS.png';
import pl5 from '../assets/img/NHI.png';
import pl6 from '../assets/img/TMH.png';
import pl7 from '../assets/img/CAPCUU.png';
import pl8 from '../assets/img/HH.png';
import pl9 from '../assets/img/VS.png';
import pl10 from '../assets/img/HS.png';
import pl11 from '../assets/img/CDHA.png';
import pl12 from '../assets/img/DUOC.png';
import section from '../assets/img/section-img.png'
import { Link, useNavigate } from 'react-router-dom';

const ChuyenKhoa = () => {
    const navigate = useNavigate();
    const portfolioItems = [
        { id: 17, img: pl1, link: 'portfolio-details.html', info: 'Y học cổ truyền' },
        { id: 14, img: pl2, link: 'portfolio-details.html', info: 'Nội tổng hợp' },
        { id: 15, img: pl3, link: 'portfolio-details.html', info: 'Ngoại tổng hợp' },
        { id: 4, img: pl4, link: 'portfolio-details.html', info: 'Phụ sản' },
        { id: 5, img: pl5, link: 'portfolio-details.html', info: 'Nhi khoa' },
        { id: 6, img: pl6, link: 'portfolio-details.html', info: 'Tai mũi họng' },
        { id: 7, img: pl7, link: 'portfolio-details.html', info: 'Cấp cứu' },
        { id: 8, img: pl8, link: 'portfolio-details.html', info: 'Xét nghiệm huyết học' },
        { id: 9, img: pl9, link: 'portfolio-details.html', info: 'Xét nghiệm vi sinh' },
        { id: 10, img: pl10, link: 'portfolio-details.html', info: 'Xét nghiệm hóa sinh' },
        { id: 11, img: pl11, link: 'portfolio-details.html', info: 'Chẩn đoán hình ảnh' },
        { id: 12, img: pl12, link: 'portfolio-details.html', info: 'Dược' }
    ];


    return (
        <section className="portfolio section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>CHUYÊN KHOA</h2>
                            <img src={section} alt="Vệ sinh phòng khám" />
                            <p>
                                Sở hữu không gian khám chữa bệnh văn minh, sang trọng, hiện đại, Bệnh viện đa khoa Cửa Đông chú trọng đầu tư đồng bộ hệ thống trang thiết bị hiện đại hàng đầu thế giới, hỗ trợ hiệu quả cho việc chẩn đoán và điều trị.
                            </p>
                            <Link to="/chuyen-khoa" style={{ fontWeight: 'bold' }}>XEM TẤT CẢ</Link>
                            <i className="fa fa-long-arrow-right" style={{ margin: '20px 0 0 5px', fontWeight: 'bold' }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={4}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop
                    speed={800}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 }
                    }}
                >
                    {portfolioItems.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="single-pf specical-pf">
                                <div className="image-container">
                                    <img src={item.img} alt="Portfolio" className="portfolio-img" />
                                    <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '16px', marginTop: '20px' }}>{item.info}</p>
                                </div>
                                <a onClick={() => navigate(`/chuyen-khoa/chi-tiet/${item.id}`)} className="btn">Xem Chi Tiết</a>
                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default ChuyenKhoa;
