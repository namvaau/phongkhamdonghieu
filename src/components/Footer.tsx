import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/img/logo.png'
const Footer = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("tokenpkdkdh");
        navigate("/");
    };
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
                                    <p style={{ padding: '10px 0' }}>
                                        Đông Hiếu, Thái Hòa, Nghệ An <br />
                                        ĐT: 097 516 11 15
                                    </p>
                                    {/* Social */}
                                    <ul className="social">
                                        <li>
                                            <a href="https://www.facebook.com/ytesuckhoe.dh" target='_blank'>
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
                                    <h2>Truy Cập</h2>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-12">
                                            <ul>
                                                <li>
                                                    <Link to="/">
                                                        <i className="fa fa-caret-right" aria-hidden="true" />
                                                        Trang Chủ
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/bac-sy">
                                                        <i className="fa fa-caret-right" aria-hidden="true" />
                                                        Bác Sĩ
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/dich-vu">
                                                        <i className="fa fa-caret-right" aria-hidden="true" />
                                                        Dịch Vụ
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/ve-chung-toi">
                                                        <i className="fa fa-caret-right" aria-hidden="true" />
                                                        Về Chúng Tôi
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12">
                                            <ul>
                                                <li>
                                                    <Link to="/chuyen-khoa">
                                                        <i className="fa fa-caret-right" aria-hidden="true" />
                                                        Chuyên Khoa
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/tin-tuc">
                                                        <i className="fa fa-caret-right" aria-hidden="true" />
                                                        Tin Tức
                                                    </Link>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-caret-right" aria-hidden="true" />
                                                        Chính Sách
                                                    </a>
                                                </li>
                                                <li>
                                                    <Link to="/lien-he">
                                                        <i className="fa fa-caret-right" aria-hidden="true" />
                                                        Liên Hệ
                                                    </Link>
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
                                        Phòng khám làm việc tất cả các ngày trong tuần.
                                        Khám và cấp phát thuốc bảo hiểm ý tế từ Thứ 2 đến Thứ 7 (Trừ các ngày lễ tết)
                                    </p>
                                    <ul className="time-sidual">
                                        <li className="day">
                                            Thứ 2 - Chủ Nhật (Sáng) <span>6.45-11.15</span>
                                        </li>
                                        <li className="day">
                                            Thứ 2 - Chủ Nhật (Chiều) <span>14.00-17.30</span>
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
                                            type="email"
                                        />
                                        <button className="button">
                                            <i className="icofont icofont-paper-plane" />
                                        </button>
                                    </form>
                                    {localStorage.getItem("tokenpkdkdh") ? (
                                        <div onClick={handleLogout} style={{ margin: '20px 0' }} className="btn">
                                            Đăng Xuất
                                        </div>
                                    ) : (
                                        <Link to="/login" style={{ margin: '20px 0', color: '#fff' }} className="btn">
                                            Đăng Nhập Admin
                                        </Link>
                                    )}
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
                                        © PKĐKĐH | Công Ty CP Khám Chữa Bệnh Đông Hiếu{" "}
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