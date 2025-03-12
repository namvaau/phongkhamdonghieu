import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import logo from '../assets/img/logo.png';
import '../assets/css/slicknav.min.css';

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

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
                                    <li><Link to="/about">Về Chúng Tôi</Link></li>
                                    <li><Link to="/doctors">Bác Sĩ</Link></li>
                                    <li><Link to="/contact">Liên Hệ</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-6 col-md-7 col-12">
                                <ul className="top-contact">
                                    <li><i className="fa fa-phone" /> 097 516 11 15</li>
                                    <li>
                                        <i className="fa fa-envelope" />
                                        <a href="mailto:pkdkdonghieu@gmail.com">pkdkdonghieu@gmail.com</a>
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
                                <div className="col-lg-3 col-md-3 col-12 mobile-nav">
                                    <div className="logo">
                                        <Link to="/">
                                            <img src={logo} alt="Logo" className="round-image" />
                                        </Link>
                                    </div>
                                    <div className="col-6 d-md-none">
                                        <button className="mobile-menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                                            <i className="icofont-navigation-menu"></i>
                                        </button>
                                    </div>
                                </div>

                                {isOpen && (
                                    <div className="mobile-menu active">
                                        <button className="close-btn" onClick={() => setIsOpen(false)}>✖</button>
                                        <ul>
                                            <li><Link to="/" onClick={() => setIsOpen(false)}>Trang Chủ</Link></li>
                                            <li><Link to="/doctors" onClick={() => setIsOpen(false)}>Bác Sĩ</Link></li>
                                            <li><Link to="/services" onClick={() => setIsOpen(false)}>Dịch Vụ</Link></li>
                                            <li><Link to="/blog" onClick={() => setIsOpen(false)}>Blogs</Link></li>
                                            <li><Link to="/contact" onClick={() => setIsOpen(false)}>Liên Hệ</Link></li>
                                        </ul>
                                    </div>
                                )}

                                <div className="col-lg-7 col-md-9 col-12">
                                    <div className="main-menu">
                                        <nav className="navigation">
                                            <ul className="nav menu">
                                                <li className="active">
                                                    <Link to="/">Trang Chủ</Link>
                                                </li>
                                                <li><Link to="/doctors">Bác Sĩ</Link></li>
                                                <li><Link to="/services">Dịch Vụ</Link></li>
                                                {/* <li>
                                                    <Link to="#">Pages <i className="icofont-rounded-down" /></Link>
                                                    <ul className="dropdown">
                                                        <li><Link to="/404">404 Error</Link></li>
                                                    </ul>
                                                </li> */}
                                                <li><Link to="/blogs">Blog</Link></li>
                                                <li><Link to="/contact">Liên Hệ</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>

                                <div className="col-lg-2 col-12">
                                    <div className="get-quote">
                                        <Link to="/booking" className="btn">Đặt Lịch Hẹn</Link>
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
