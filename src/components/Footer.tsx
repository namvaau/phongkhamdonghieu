import React from 'react'
import logo  from '../assets/img/logo.png'
const Footer = () => {
    return (
        <>
            <footer id="footer" className="footer ">
                {/* Footer Top */}
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="single-footer">
                                    <div className="logo">
                                        <a href="index.html">
                                            <img src={logo} alt="#" className='round-image' />
                                        </a>
                                    </div>
                                    <p style={{padding: '10px 0'}}>
                                        Đông Hiếu, Thái Hòa, Nghệ An <br />
                                        ĐT: 097 516 11 15
                                    </p>
                                    {/* Social */}
                                    <ul className="social">
                                        <li>
                                            <a href="#">
                                                <i className="icofont-facebook" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="icofont-google-plus" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="icofont-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="icofont-vimeo" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="icofont-pinterest" />
                                            </a>
                                        </li>
                                    </ul>
                                    {/* End Social */}
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="single-footer f-link">
                                    <h2>Quick Links</h2>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-12">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-caret-right" aria-hidden="true" />
                                                        Trang Chủ
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-caret-right" aria-hidden="true" />
                                                        Bác Sĩ
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-caret-right" aria-hidden="true" />
                                                        Dịch Vụ
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-caret-right" aria-hidden="true" />
                                                        Về Chúng Tôi
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-caret-right" aria-hidden="true" />
                                                        Cộng Đồng
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-caret-right" aria-hidden="true" />
                                                        Tuyển Dụng
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-caret-right" aria-hidden="true" />
                                                        Tin Tức
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-caret-right" aria-hidden="true" />
                                                        Chính Sách
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-caret-right" aria-hidden="true" />
                                                        Liên Hệ
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="single-footer">
                                    <h2>Thời Gian</h2>
                                    <p>
                                        Phòng khám làm việc tất cả các ngày trong tuần,
                                        Cấp phát thuốc bảo hiểm ý tế từ Thứ 2 đến Thứ 7 (Trừ các ngày lễ tết)
                                    </p>
                                    <ul className="time-sidual">
                                        <li className="day">
                                            Thứ 2 - Chủ Nhật (Sáng) <span>7.30-11.30</span>
                                        </li>
                                        <li className="day">
                                            Thứ 2 - Chủ Nhật (Chiều) <span>13.30-17.30</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="single-footer">
                                    <h2>Theo dõi bản tin</h2>
                                    <p>
                                        Cập nhật các tin mới nhất từ Phòng Khám
                                    </p>
                                    <form
                                        action="mail/mail.php"
                                        method="get"
                                        target="_blank"
                                        className="newsletter-inner"
                                    >
                                        <input
                                            name="email"
                                            placeholder="Email của bạn"
                                            className="common-input"
                                            onfocus="this.placeholder = ''"
                                            onblur="this.placeholder = 'Your email address'"
                                            required=""
                                            type="email"
                                        />
                                        <button className="button">
                                            <i className="icofont icofont-paper-plane" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*/ End Footer Top */}
                {/* Copyright */}
                <div className="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-12">
                                <div className="copyright-content">
                                    <p>
                                        © PKĐH | Nguyễn Quang Hoài Nam{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*/ End Copyright */}
            </footer>

        </>
    )
}

export default Footer