import Breadcrumbs from '../../components/Breadcrumbs'
import author from '../../assets/img/logo.png'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { BASE_URL, type News, type NewsDetail } from '../../interface/InterfaceData'
import { useEffect, useState } from 'react'
import axios from 'axios'

const TinTucChiTiet = () => {
    const { id } = useParams();
    const [newsDetails, setNewsDetails] = useState<NewsDetail | null>();
    const [fontSize, setFontSize] = useState(16);

    const increaseFontSize = () => setFontSize((prev) => Math.min(prev + 2, 30));
    const decreaseFontSize = () => setFontSize((prev) => Math.max(prev - 2, 10));

    useEffect(() => {
        axios.get(`${BASE_URL}/news/${id}/details`)
            .then((res) => {
                console.log("Dữ liệu từ API:", res.data[0]);
                setNewsDetails(res.data[0]);
            })
            .catch((err) => console.error("Lỗi khi lấy dữ liệu:", err));
    }, [id]);

    const [news, setNews] = useState<News[]>([]);

    useEffect(() => {
        const getNews = async () => {
            const response = await axios.get(`${BASE_URL}/news`);
            setNews(response.data);
        };
        getNews();
    }, []);
    const navigate = useNavigate();
    const formatDate = (dateString: string) => {
        if (!dateString) return ""; // Kiểm tra nếu dateString rỗng thì trả về chuỗi rỗng
        const date = new Date(dateString);
        return new Intl.DateTimeFormat("vi-VN", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        }).format(date);
    };

    const sortedNews = [...news].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());


    return (
        <>
            <Breadcrumbs title='Tin tức' />
            <section className="news-single section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="row">
                                <div className="col-12">
                                    <div className="single-main">
                                        {/* News Head */}
                                        <div className="news-head">
                                            <img src={newsDetails?.image1} alt="Phòng khám Đông Hiếu" />
                                        </div>
                                        {/* News Title */}
                                        <h1 className="news-title">
                                            <a>
                                                {newsDetails?.title}
                                            </a>
                                        </h1>
                                        {/* Meta */}
                                        <div className="meta">
                                            <div className="meta-left">
                                                <span className="author">
                                                    <a href="#">
                                                        <img src={author} alt="#" />
                                                        PKĐK Đông Hiếu
                                                    </a>
                                                </span>
                                                <span className="date">
                                                    <i className="fa fa-clock-o" />
                                                    {formatDate(newsDetails?.createTime || "")}
                                                </span>
                                            </div>
                                            <div className="meta-right" style={{display: 'flex', cursor: 'pointer'}}>
                                                <p onClick={decreaseFontSize}><i className="fa fa-minus" aria-hidden="true"></i></p>
                                                <span style={{ fontSize: `${fontSize}px`, margin: "0 20px" }}>Aa</span>
                                                <p onClick={increaseFontSize}><i className="fa fa-plus" aria-hidden="true"></i></p>
                                            </div>
                                        </div>
                                        {/* News Text */}
                                        <div className="news-text">
                                            <p style={{ fontSize: `${fontSize}px`}} dangerouslySetInnerHTML={{ __html: newsDetails?.content ?? "" }}></p>
                                            <p style={{ fontSize: `${fontSize}px`}} dangerouslySetInnerHTML={{ __html: newsDetails?.content1 ?? "" }}></p>
                                            <div className="image-gallery">
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6 col-12">
                                                        <div className="single-image">
                                                            <img src={newsDetails?.image2} alt="Dịch vụ y tế tại Đông Hiếu" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-12">
                                                        <div className="single-image">
                                                            <img src={newsDetails?.image3} alt="Trang thiết bị hiện đại" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p style={{ fontSize: `${fontSize}px`}} dangerouslySetInnerHTML={{ __html: newsDetails?.content2 ?? "" }}></p>
                                            <blockquote className="overlay">
                                                <p style={{ fontSize: `${fontSize}px`}}>
                                                    "Phòng Khám Đông Hiếu - Y Đức Tạo Niềm Tin!"
                                                </p>
                                            </blockquote>
                                            <p style={{ fontSize: `${fontSize}px`}}>
                                                Hãy đến với Đông Hiếu để trải nghiệm dịch vụ y tế chuyên nghiệp và tận tâm. Đội ngũ của chúng tôi luôn sẵn sàng phục vụ bạn!
                                            </p>
                                        </div>
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
                                {/* Single Widget */}
                                {/*/ End Single Widget */}
                                {/* Single Widget */}
                                <div className="single-widget category">
                                    <h3 className="title">Danh Mục</h3>
                                    <ul className="categor-list">
                                        <li>
                                            <Link to={'/video'}>Video</Link>
                                        </li>
                                    </ul>
                                </div>
                                {/*/ End Single Widget */}
                                {/* Single Widget */}
                                <div className="single-widget recent-post">
                                    <h3 className="title">Tin tức khác</h3>
                                    {sortedNews
                                        .filter((news) => news.id !== Number(id))
                                        .slice(0, 3).map((item) => (
                                            <div style={{ cursor: 'pointer' }} className="single-post" key={item.id} onClick={() => navigate(`/tin-tuc/chi-tiet/${item.id}`, { state: { news: news } })}>
                                                <div className="image">
                                                    <img src={item.imageUrl} alt="#" />
                                                </div>
                                                <div className="content">
                                                    <h5>
                                                        <a onClick={() => navigate(`/tin-tuc/chi-tiet/${item.id}`, { state: { news: news } })}>{item.title}</a>
                                                    </h5>
                                                    <ul className="comment">
                                                        <li>
                                                            <i className="fa fa-calendar" aria-hidden="true" />
                                                            {formatDate(item.date)}
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-commenting-o" aria-hidden="true" />
                                                            35
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        ))}
                                    {/* End Single Post */}
                                </div>
                                {/*/ End Single Widget */}
                                {/* Single Widget */}
                                {/*/ End Single Widget */}
                                {/* Single Widget */}
                                {/* <div className="single-widget side-tags">
                                    <h3 className="title">Tags</h3>
                                    <ul className="tag">
                                        <li>
                                            <a href="#">business</a>
                                        </li>
                                        <li>
                                            <a href="#">wordpress</a>
                                        </li>
                                        <li>
                                            <a href="#">html</a>
                                        </li>
                                        <li>
                                            <a href="#">multipurpose</a>
                                        </li>
                                        <li>
                                            <a href="#">education</a>
                                        </li>
                                        <li>
                                            <a href="#">template</a>
                                        </li>
                                        <li>
                                            <a href="#">Ecommerce</a>
                                        </li>
                                    </ul>
                                </div> */}
                                {/*/ End Single Widget */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default TinTucChiTiet