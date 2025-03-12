import React from 'react'
import section from '../assets/img/section-img.png'
const Services = () => {
    return (
        <>
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
                                <i className="icofont icofont-ui-home" />
                                <h4>
                                    <a href="service-details.html">Quầy Tiếp Đón</a>
                                </h4>
                                <p>
                                    Hướng dẫn, tiếp nhận bệnh nhân và hỗ trợ các thủ tục hành chính nhanh chóng, tiện lợi.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="single-service">
                                <i className="icofont icofont-laboratory" />
                                <h4>
                                    <a href="service-details.html">Phòng Vi Sinh</a>
                                </h4>
                                <p>
                                    Chuyên xét nghiệm vi sinh, nuôi cấy vi khuẩn và kháng sinh đồ, hỗ trợ chẩn đoán chính xác.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="single-service">
                                <i className="icofont icofont-photobucket" />
                                <h4>
                                    <a href="service-details.html">Siêu Âm Màu</a>
                                </h4>
                                <p>
                                    Cung cấp hình ảnh siêu âm màu sắc nét, hỗ trợ chẩn đoán tim mạch, thai kỳ, ổ bụng...
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="single-service">
                                <i className="icofont icofont-test-tube" />
                                <h4>
                                    <a href="service-details.html">Máy Xét Nghiệm Tự Động</a>
                                </h4>
                                <p>
                                    Hệ thống xét nghiệm tự động giúp cung cấp kết quả nhanh chóng, chính xác.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="single-service">
                                <i className="icofont icofont-xray" />
                                <h4>
                                    <a href="service-details.html">X-Quang Kĩ Thuật Số</a>
                                </h4>
                                <p>
                                    Chụp X-quang kỹ thuật số hiện đại, giảm thiểu phơi nhiễm tia X, hình ảnh chất lượng cao.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="single-service">
                                <i className="icofont icofont-surgeon" />
                                <h4>
                                    <a href="service-details.html">Phòng Tiểu Phẫu</a>
                                </h4>
                                <p>
                                    Thực hiện các thủ thuật tiểu phẫu an toàn, vô trùng, đảm bảo chất lượng điều trị.
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