import section from '../assets/img/section-img.png'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { BASE_URL, News } from '../interface/InterfaceData'
import axios from 'axios'
const Blogs = () => {
    const navigate = useNavigate();
    const [news, setNews] = useState<News[]>([]);

    useEffect(() => {
        const getNews = async () => {
            const response = await axios.get(`${BASE_URL}/news`);
            setNews(response.data);
        };
        getNews();
    }, []);

    const sortedNews = [...news].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat("vi-VN", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        }).format(date);
    };
    return (
        <>
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
                        {sortedNews.slice(0, 3).map((item) => (
                            <div
                                key={item.id}
                                className="col-lg-4 col-md-6 col-12"
                                onClick={() => navigate(`/news/details/${item.id}`, { state: { news: news } })}
                            >
                                <div className="single-news">
                                    <div className="news-head">
                                        <img src={item.imageUrl} alt={item.title} className="news-image" />
                                    </div>
                                    <div className="news-body">
                                        <div className="news-content">
                                            <div className="date">{formatDate(item.date)}</div>
                                            <h2>
                                                <a href={`/news/details/${item.id}`}>{item.title}</a>
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

export default Blogs