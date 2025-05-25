import Breadcrumbs from "../../components/Breadcrumbs";
import logo from '../../assets/img/logo.png'
import { useState } from "react";
import { Link } from "react-router-dom";
const Video = () => {
    const videos = [
        {
            id: 1,
            title: "CHÀO ĐÓN THẾ HỆ RẮN VÀNG - TƯƠNG LAI HOÀN MỸ TỪ NHỮNG ĐIỀU TỐT ĐẸP NHẤT",
            url: "https://www.youtube.com/embed/sCv-MMADrY0?si=B92_WgvazHbvlZom",
        },
        {
            id: 2,
            title: "2023 - HOÀN MỸ VINH TRÊN HÀNH TRÌNH ĐỔI MỚI…",
            url: "https://www.youtube.com/embed/H4bFgBSuAk8?si=0uff2WxPEZg5THQJ",
        },
        {
            id: 3,
            title: "CHUYÊN GIA GIẢI ĐÁP VỀ BỆNH SỞI",
            url: "https://www.youtube.com/embed/P5PfWd1D6TI?si=2yyh6tgO4_XycQ9C",
        },
        {
            id: 4,
            title: "LỄ KÝ KẾT HỢP TÁC CHIẾN LƯỢC - BỆNH VIỆN HOÀN MỸ VINH & PHÒNG KHÁM ĐA KHOA ĐÔNG HIẾU",
            url: "https://www.youtube.com/embed/xRQxMpecJwk?si=FunZOUavji5mE700",
        },
    ];
    const [currentVideo, setCurrentVideo] = useState(videos[0]);
    const getYoutubeThumbnail = (url: string) => {
        const videoIdMatch = url.match(/(?:youtube\.com\/(?:[^\\/]+\/[^\\/]+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\\/\s]+)/);
        return videoIdMatch ? `https://img.youtube.com/vi/${videoIdMatch[1]}/hqdefault.jpg` : "";
    };
    return (
        <>
            <Breadcrumbs title="Video" />
            <section className="news-single section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="row">
                                <div className="col-12">
                                    <div className="single-main">
                                        {/* News Head */}
                                        <div className="">
                                            <div className="video-container">
                                                <iframe width="560" height="315" src={currentVideo.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                            </div>
                                        </div>

                                        {/* News Title */}
                                        <h1 className="news-title">
                                            <a href="news-single.html">
                                                {currentVideo.title}
                                            </a>
                                        </h1>
                                        {/* Meta */}
                                        <div className="meta">
                                            <div className="meta-left">
                                                <span className="author">
                                                    <a href="#">
                                                        <img src={logo} alt="#" />
                                                        PKĐK Đông Hiếu
                                                    </a>
                                                </span>
                                                <span className="date">
                                                    <i className="fa fa-clock-o" />
                                                    17/03/2025
                                                </span>
                                            </div>
                                            <div className="meta-right">
                                                <span className="comments">
                                                    <a href="#">
                                                        <i className="fa fa-comments" />
                                                        15 Bình luận
                                                    </a>
                                                </span>
                                                <span className="views">
                                                    <i className="fa fa-eye" />
                                                    10K Lượt xem
                                                </span>
                                            </div>
                                        </div>
                                        {/* News Text */}
                                        <div className="blog-bottom">
                                            {/* Social Share */}
                                            <ul className="social-share">
                                                <li className="facebook">
                                                    <a href="#">
                                                        <i className="fa fa-facebook" />
                                                        <span>Facebook</span>
                                                    </a>
                                                </li>
                                                <li className="twitter">
                                                    <a href="#">
                                                        <i className="fa fa-twitter" />
                                                        <span>Twitter</span>
                                                    </a>
                                                </li>
                                                <li className="linkedin">
                                                    <a href="#">
                                                        <i className="fa fa-linkedin" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="main-sidebar">
                                <div className="single-widget recent-post">
                                    <h3 className="title">Video khác</h3>
                                    {videos
                                        .filter((item) => item.url !== currentVideo.url) // Bỏ qua video hiện tại
                                        .slice(0, 5) // Giới hạn hiển thị 3 video
                                        .map((item) => (
                                            <div className="single-post" key={item.url} style={{cursor: "pointer"}}>
                                                <div className="image">
                                                    <img src={getYoutubeThumbnail(item.url)} alt="Thumbnail" />
                                                </div>
                                                <div className="content">
                                                    <h5>
                                                        <a onClick={() => setCurrentVideo(item)}>{item.title}</a>
                                                    </h5>
                                                    <ul className="comment">
                                                        <li>
                                                            <i className="fa fa-calendar" aria-hidden="true" />
                                                            17/03/2025
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-commenting-o" aria-hidden="true" />
                                                            35
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                                <div className="single-widget category">
                                    <h3 className="title">Danh Mục</h3>
                                    <ul className="categor-list">
                                        <li>
                                            <Link to={'/tin-tuc'}>Tin Tức</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Video;
