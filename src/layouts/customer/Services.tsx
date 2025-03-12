import React from 'react'
import Breadcrumbs from '../../components/Breadcrumbs'
import section from '../../assets/img/section-img.png'
const Services = () => {
    return (
        <>
            <Breadcrumbs title='Dịch Vụ Của Chúng Tôi' />
            <section className="services section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Các Dịch Vụ Chăm Sóc Sức Khỏe Tại Phòng Khám Đông Hiếu</h2>
                                <img src={section} alt="Dịch vụ y tế" />
                                <p>
                                    Chúng tôi cung cấp các dịch vụ y tế chất lượng, đáp ứng nhu cầu chăm sóc sức khỏe của bạn và gia đình.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="single-service">
                                <i className="icofont icofont-prescription" />
                                <h4>
                                    <a href="service-details.html">Nội Tổng Hợp</a>
                                </h4>
                                <p>
                                    Khám và điều trị các bệnh lý nội khoa như tim mạch, hô hấp, tiêu hóa, nội tiết, thần kinh,...
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="single-service">
                                <i className="icofont icofont-surgeon" />
                                <h4>
                                    <a href="service-details.html">Ngoại Tổng Hợp</a>
                                </h4>
                                <p>
                                    Chẩn đoán và điều trị ngoại khoa, bao gồm các tiểu phẫu, chấn thương, phẫu thuật nhỏ.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="single-service">
                                <i className="icofont icofont-blood" />
                                <h4>
                                    <a href="service-details.html">Phụ Sản</a>
                                </h4>
                                <p>
                                    Khám thai, siêu âm, tư vấn chăm sóc thai kỳ và các dịch vụ sản khoa chuyên sâu.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="single-service">
                                <i className="icofont icofont-herbal" />
                                <h4>
                                    <a href="service-details.html">Y Học Cổ Truyền</a>
                                </h4>
                                <p>
                                    Chữa bệnh bằng phương pháp đông y, châm cứu, bấm huyệt và các bài thuốc dân gian hiệu quả.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="single-service">
                                <i className="icofont icofont-heart-alt" />
                                <h4>
                                    <a href="service-details.html">Nhi Khoa</a>
                                </h4>
                                <p>
                                    Chăm sóc sức khỏe cho trẻ em, tiêm chủng, theo dõi sự phát triển toàn diện.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="single-service">
                                <i className="icofont icofont-listening" />
                                <h4>
                                    <a href="service-details.html">Tai Mũi Họng</a>
                                </h4>
                                <p>
                                    Khám và điều trị các bệnh lý về tai, mũi, họng, viêm xoang, viêm amidan, dị ứng hô hấp.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="single-service">
                                <i className="icofont icofont-ambulance" />
                                <h4>
                                    <a href="service-details.html">Cấp Cứu</a>
                                </h4>
                                <p>
                                    Dịch vụ cấp cứu 24/7, phản ứng nhanh, hỗ trợ vận chuyển bệnh nhân kịp thời.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="single-service">
                                <i className="icofont icofont-test-tube" />
                                <h4>
                                    <a href="service-details.html">Xét Nghiệm Huyết Học</a>
                                </h4>
                                <p>
                                    Kiểm tra các chỉ số máu, đánh giá tình trạng sức khỏe tổng quát.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="single-service">
                                <i className="icofont icofont-laboratory" />
                                <h4>
                                    <a href="service-details.html">Xét Nghiệm Vi Sinh</a>
                                </h4>
                                <p>
                                    Phát hiện vi khuẩn, virus, ký sinh trùng giúp chẩn đoán bệnh chính xác.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="single-service">
                                <i className="icofont icofont-dna" />
                                <h4>
                                    <a href="service-details.html">Xét Nghiệm Hóa Sinh</a>
                                </h4>
                                <p>
                                    Đánh giá chức năng gan, thận, đường huyết và các chỉ số sinh hóa khác.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="single-service">
                                <i className="icofont icofont-xray" />
                                <h4>
                                    <a href="service-details.html">Chẩn Đoán Hình Ảnh</a>
                                </h4>
                                <p>
                                    Siêu âm, X-quang, CT scan, MRI giúp chẩn đoán bệnh lý chính xác.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="single-service">
                                <i className="icofont icofont-search-document" />
                                <h4>
                                    <a href="service-details.html">Nội Soi Tai Mũi Họng</a>
                                </h4>
                                <p>
                                    Phát hiện và điều trị các bệnh lý liên quan đến tai, mũi, họng.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="single-service">
                                <i className="icofont icofont-medicine" />
                                <h4>
                                    <a href="service-details.html">Dược</a>
                                </h4>
                                <p>
                                    Cung cấp thuốc theo đơn, tư vấn sử dụng thuốc an toàn và hiệu quả.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services