import Breadcrumbs from '../../components/Breadcrumbs'
import section from '../../assets/img/section-img.png'
import { useLocation, useNavigate } from 'react-router-dom'
import { BASE_URL, type News } from '../../interface/InterfaceData'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Preloader from '../../components/Preloader'

const CacTinTuc = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get("search") || "";

    const [news, setNews] = useState<News[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    useEffect(() => {
        const getNews = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/news`);
                setNews(response.data);
            } catch (err) {
                console.error("Lỗi khi tải tin tức:", err);
                setError(err instanceof Error ? err.message : "Lỗi không xác định");
            } finally {
                setLoading(false); // Ẩn Preloader khi dữ liệu đã tải
            }
        };
        getNews();
    }, []);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat("vi-VN", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        }).format(date);
    };

    const sortedNews = [...news].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const filteredNews = sortedNews.filter(
        (item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.summary.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (loading) return <Preloader />;
    if (error) return <>
        <section className="error-page section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 col-12">
                        {/* Error Inner */}
                        <div className="error-inner">
                            <h1>
                                404<span>Không tìm thấy dữ liệu!</span>
                            </h1>
                            <p>
                                Đã xảy ra lỗi trong quá trình tải trang. Vui lòng thử lại !
                            </p>
                            <form className="search-form">
                                <input placeholder="Search from Here" type="text" />
                                <button className="btn" type="submit">
                                    <i className="fa fa-search" />
                                </button>
                            </form>
                        </div>
                        {/*/ End Error Inner */}
                    </div>
                </div>
            </div>
        </section>

    </>;
    return (
        <>
            <Breadcrumbs title='Tin tức' />
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
                        {filteredNews.map((item) => (
                            <div
                                style={{ cursor: 'pointer' }}
                                key={item.id}
                                className="col-lg-4 col-md-6 col-12"
                                onClick={() => navigate(`/tin-tuc/chi-tiet/${item.id}`, { state: { news: news } })}
                            >
                                <div className="single-news">
                                    <div className="news-head">
                                        <img src={item.imageUrl} alt={item.title} className="news-image" />
                                    </div>
                                    <div className="news-body">
                                        <div className="news-content">
                                            <div className="date">{formatDate(item.date)}</div>
                                            <h2>
                                                <a onClick={() => navigate(`/tin-tuc/chi-tiet/${item.id}`, { state: { news: news } })}>{item.title}</a>
                                            </h2>
                                            <p className="text">{item.summary}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default CacTinTuc