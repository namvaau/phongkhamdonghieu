import Breadcrumbs from '../../components/Breadcrumbs'
import author from '../../assets/img/author1.jpg'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { BASE_URL, type News, type NewsDetail } from '../../interface/InterfaceData'
import { useEffect, useState } from 'react'
import axios from 'axios'

const NewsDetail = () => {
    const { id } = useParams();
    const [newsDetails, setNewsDetails] = useState<NewsDetail | null>();

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
                                            <a href="news-single.html">
                                                {newsDetails?.title}
                                            </a>
                                        </h1>
                                        {/* Meta */}
                                        <div className="meta">
                                            <div className="meta-left">
                                                <span className="author">
                                                    <a href="#">
                                                        <img src={author} alt="#" />
                                                        Nguyễn Quang Hoài Nam
                                                    </a>
                                                </span>
                                                <span className="date">
                                                    <i className="fa fa-clock-o" />
                                                    {formatDate(newsDetails?.createTime || "")}
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
                                        <div className="news-text">
                                            <p dangerouslySetInnerHTML={{ __html: newsDetails?.content ?? "" }}></p>
                                            <p dangerouslySetInnerHTML={{ __html: newsDetails?.content1 ?? "" }}></p>
                                            <div className="image-gallery">
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6 col-12">
                                                        <div className="single-image">
                                                            <img src={newsDetails?.image1} alt="Dịch vụ y tế tại Đông Hiếu" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-12">
                                                        <div className="single-image">
                                                            <img src={newsDetails?.image2} alt="Trang thiết bị hiện đại" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p dangerouslySetInnerHTML={{ __html: newsDetails?.content2 ?? "" }}></p>
                                            <blockquote className="overlay">
                                                <p>
                                                    "Phòng Khám Đông Hiếu - Y Đức Tạo Niềm Tin!"
                                                </p>
                                            </blockquote>
                                            <p>
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
                                <div className="single-widget search">
                                    <div className="form">
                                        <input type="email" placeholder="Search Here..." />
                                        <a className="button" href="#">
                                            <i className="fa fa-search" />
                                        </a>
                                    </div>
                                </div>
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
                                            <div className="single-post" key={item.id} onClick={() => navigate(`/news/details/${item.id}`, { state: { news: news } })}>
                                                <div className="image">
                                                    <img src={item.imageUrl} alt="#" />
                                                </div>
                                                <div className="content">
                                                    <h5>
                                                        <a href="#">{item.title}</a>
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
                                <div className="single-widget side-tags">
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
                                </div>
                                {/*/ End Single Widget */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default NewsDetail