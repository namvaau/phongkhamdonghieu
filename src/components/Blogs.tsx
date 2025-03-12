import React from 'react'
import section from '../assets/img/section-img.png'
import blog1 from '../assets/img/blog1.jpg'
import blog2 from '../assets/img/blog2.jpg'
import blog3 from '../assets/img/blog3.jpg'
const Blogs = () => {
    return (
        <>
            <section className="blog section" id="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Cập nhật tin tức y tế mới nhất của chúng tôi</h2>
                                <img src={section} alt="#" />
                                <p>
                                    Luôn cập nhật những thông tin y khoa quan trọng, kiến thức chăm sóc sức khỏe và các chương trình ưu đãi tại phòng khám Đông Hiếu.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            {/* Single Blog */}
                            <div className="single-news">
                                <div className="news-head">
                                    <img src={blog1} alt="Tin tức y tế" className="news-image" />
                                </div>
                                <div className="news-body">
                                    <div className="news-content">
                                        <div className="date">22 Tháng 8, 2020</div>
                                        <h2>
                                            <a href="blog-single.html">
                                                Phòng khám Đông Hiếu triển khai dịch vụ xét nghiệm mới
                                            </a>
                                        </h2>
                                        <p className="text">
                                            Chúng tôi tự hào mang đến dịch vụ xét nghiệm tiên tiến, giúp khách hàng phát hiện sớm và điều trị kịp thời nhiều bệnh lý quan trọng.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* End Single Blog */}
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            {/* Single Blog */}
                            <div className="single-news">
                                <div className="news-head">
                                    <img src={blog2} alt="Khám tổng quát" className="news-image" />
                                </div>
                                <div className="news-body">
                                    <div className="news-content">
                                        <div className="date">15 Tháng 3, 2024</div>
                                        <h2>
                                            <a href="blog-single.html">
                                                Gói khám sức khỏe tổng quát ưu đãi đặc biệt
                                            </a>
                                        </h2>
                                        <p className="text">
                                            Phòng khám Đông Hiếu triển khai gói khám tổng quát toàn diện với chi phí ưu đãi, giúp bạn theo dõi sức khỏe định kỳ một cách hiệu quả.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Blog */}
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            {/* Single Blog */}
                            <div className="single-news">
                                <div className="news-head">
                                    <img src={blog3} alt="Tư vấn dinh dưỡng" className="news-image" />
                                </div>
                                <div className="news-body">
                                    <div className="news-content">
                                        <div className="date">5 Tháng 4, 2024</div>
                                        <h2>
                                            <a href="blog-single.html">
                                                Chương trình tư vấn dinh dưỡng miễn phí
                                            </a>
                                        </h2>
                                        <p className="text">
                                            Nhằm nâng cao sức khỏe cộng đồng, chúng tôi tổ chức buổi tư vấn dinh dưỡng miễn phí cho khách hàng với các chuyên gia hàng đầu.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Blog */}
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Blogs