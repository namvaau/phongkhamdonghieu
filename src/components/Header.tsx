import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Link
import logo from '../assets/img/logo.png';

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 200);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header className={`header ${isSticky ? "sticky" : ""}`}>
                {/* Topbar */}
                <div className="topbar">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-5 col-12">
                                <ul className="top-link">
                                    <li><Link to="/lien-he"><i className="icofont-location-pin"></i>Ngã tư đường mòn HCM, Xã Đông Hiếu, Thị Xã Thái Hòa, Tỉnh Nghệ An.</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-6 col-md-7 col-12">
                                <ul className="top-contact">
                                    <li><a href="tel:0975161115"><i className="fa fa-phone" /> 0975 161 115</a></li>
                                    <li>
                                        <i className="fa fa-envelope" />
                                        <a href="mailto:phongkhamdkdonghieu@gmail.com">phongkhamdkdonghieu@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Header Inner */}
                <div className="header-inner">
                    <div className="container">
                        <div className="inner">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-12 mobile-nav">
                                    <div className="logo">
                                        <Link to="/" style={{
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}>
                                            <img src={logo} alt="Logo" className="round-image" />
                                            <h6
                                                className='name-mobile'
                                                style={{
                                                    marginLeft: '10px',
                                                    fontWeight: 'bold',
                                                    color: '#02a25c',
                                                    fontSize: '18px',
                                                    whiteSpace: 'nowrap'
                                                }}
                                            >
                                                Phòng Khám Đa Khoa Đông Hiếu
                                            </h6>
                                        </Link>
                                    </div>
                                    <div className="col-4 d-md-none">
                                        <button className="mobile-menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                                            <i className="icofont-navigation-menu" style={{ color: '#02a25c' }}></i>
                                        </button>
                                    </div>
                                </div>

                                {isOpen && (
                                    <div className="mobile-menu active">
                                        <button className="close-btn" onClick={() => setIsOpen(false)}>✖</button>
                                        <ul>
                                            <li><Link to="/" onClick={() => setIsOpen(false)}>Trang Chủ</Link></li>
                                            <li><Link to="/bac-sy" onClick={() => setIsOpen(false)}>Bác Sĩ</Link></li>
                                            <li><Link to="/chuyen-khoa" onClick={() => setIsOpen(false)}>Chuyên Khoa</Link></li>
                                            <li><Link to="/dich-vu" onClick={() => setIsOpen(false)}>Dịch Vụ</Link></li>
                                            <li><Link to="/tin-tuc" onClick={() => setIsOpen(false)}>Tin Tức</Link></li>
                                            {localStorage.getItem("tokenpkdkdh") && (
                                                <li><Link to="/admin/newsmanagement" onClick={() => setIsOpen(false)}>Đăng Bài</Link></li>
                                            )}
                                            <li><Link to="/video" onClick={() => setIsOpen(false)}>Video</Link></li>
                                            <li><Link to="/lien-he" onClick={() => setIsOpen(false)}>Liên Hệ</Link></li>
                                        </ul>
                                    </div>
                                )}

                                <div className="col-lg-6 col-md-9 col-12">
                                    <div className="main-menu">
                                        <nav className="navigation">
                                            <ul className="nav menu">
                                                <li className={location.pathname === "/" ? "active" : ""}>
                                                    <Link to="/">Trang Chủ</Link>
                                                </li>
                                                <li className={location.pathname.startsWith("/chuyen-khoa") || location.pathname.startsWith("/bac-sy") || location.pathname.startsWith("/admin/doctormanagement") ? "active" : ""}>
                                                    <Link to="/bac-sy">
                                                        Bác Sĩ <i className="icofont-rounded-down"></i>
                                                    </Link>
                                                    <ul className="dropdown">
                                                        <li>
                                                            <Link to="/chuyen-khoa">
                                                                Chuyên Khoa
                                                            </Link>
                                                        </li>
                                                        {localStorage.getItem("tokenpkdkdh") && (
                                                            <li>
                                                                <Link to="/admin/doctormanagement">Thêm Bác Sĩ</Link>
                                                            </li>
                                                        )}
                                                    </ul>
                                                </li>
                                                <li className={location.pathname === "/dich-vu" ? "active" : ""}>
                                                    <Link to="/dich-vu">Dịch Vụ</Link>
                                                </li>
                                                <li className={location.pathname.startsWith("/tin-tuc") || location.pathname.startsWith("/admin/newsmanagement") || location.pathname.startsWith("/video") ? "active" : ""}>
                                                    <Link to="/tin-tuc">
                                                        Tin Tức <i className="icofont-rounded-down"></i>
                                                    </Link>
                                                    <ul className="dropdown">
                                                        <li>
                                                            <Link to="/video">Hoạt động phòng khám</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/video">Video</Link>
                                                        </li>
                                                        {localStorage.getItem("tokenpkdkdh") && (
                                                            <li>
                                                                <Link to="/admin/newsmanagement">Đăng bài</Link>
                                                            </li>
                                                        )}
                                                    </ul>
                                                </li>
                                                <li className={location.pathname === "/lien-he" ? "active" : ""}>
                                                    <Link to="/ve-chung-toi">Giới Thiệu</Link>
                                                    <i className="icofont-rounded-down"></i>
                                                    <ul className="dropdown">
                                                        <li>
                                                            <Link to="/lien-he">Liên Hệ</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>

                                <div className="col-lg-2 col-12">
                                    <div className="get-quote">
                                        <Link to="/dat-lich" className="btn">Đặt Lịch Hẹn</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
