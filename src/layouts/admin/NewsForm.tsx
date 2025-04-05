import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Breadcrumbs from "../../components/Breadcrumbs";
import { BASE_URL, News } from "../../interface/InterfaceData";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

interface NewsFormData {
    title: string;
    summary: string;
    date: string;
    content: string;
    content1: string;
    content2: string;
    image: FileList;
    image1: FileList;
    image2: FileList;
    image3: FileList;
}

const NewsForm = () => {
    const { register, handleSubmit, reset } = useForm<NewsFormData>();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const uploadToCloudinary = async (file: File) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "pkdkdonghieu"); // Cấu hình trong Cloudinary

        const res = await fetch("https://api.cloudinary.com/v1_1/dworqu6ej/image/upload", {
            method: "POST",
            body: formData,
        });

        const data = await res.json();
        return data.secure_url; // URL ảnh sau khi upload
    };

    const onSubmit = async (data: NewsFormData) => {
        setLoading(true);

        try {
            // Upload ảnh lên Cloudinary
            const imageUrl = data.image.length > 0 ? await uploadToCloudinary(data.image[0]) : "";
            const imageUrl1 = data.image1.length > 0 ? await uploadToCloudinary(data.image1[0]) : "";
            const imageUrl2 = data.image2.length > 0 ? await uploadToCloudinary(data.image2[0]) : "";
            const imageUrl3 = data.image3.length > 0 ? await uploadToCloudinary(data.image3[0]) : "";

            // Bước 1: Gửi dữ liệu lên backend để tạo news trước
            const newsResponse = await fetch(`${BASE_URL}/news`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title: data.title,
                    summary: data.summary,
                    date: new Date().toISOString(),
                    imageUrl
                }),
            });

            if (!newsResponse.ok) {
                throw new Error("Không thể tạo bài viết!");
            }

            const newsData = await newsResponse.json(); // Nhận lại news_id từ backend
            const newsId = newsData.id;

            // Bước 2: Gửi newsDetails kèm theo newsId
            const detailsResponse = await fetch(`${BASE_URL}/api/news-details/${newsId}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    content: data.content,
                    content1: data.content1,
                    content2: data.content2,
                    image1: imageUrl1,
                    image2: imageUrl2,
                    image3: imageUrl3,
                }),
            });

            if (!detailsResponse.ok) {
                throw new Error("Không thể tạo chi tiết bài viết!");
            }

            setMessage("Đăng bài thành công!");
            reset();
        } catch (error) {
            console.error("Error:", error);
            setMessage("Lỗi khi đăng bài!");
        } finally {
            setLoading(false);
        }
    };


    const navigate = useNavigate();
    const [news, setNews] = useState<News[]>([]);

    useEffect(() => {
        const getNews = async () => {
            const response = await axios.get(`${BASE_URL}/news`);
            setNews(response.data);
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

    return (
        <>
            <Breadcrumbs title='Đăng Bài' />
            <section className="news-single section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="row">
                                <div className="col-12">
                                    <form className="single-main" onSubmit={handleSubmit(onSubmit)}>
                                        <div className="news-text">
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <label>Ảnh chính:</label>
                                                <br />
                                                <input type="file" {...register("image")} className="border p-2 w-full" />
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-12">
                                                <div className="form-group">
                                                    <input {...register("title", { required: true })} placeholder="Tiêu đề" className="border p-2 w-full" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-12">
                                                <div className="form-group">
                                                    <textarea {...register("summary", { required: true })} placeholder="Tóm tắt nội dung" className="border p-2 w-full" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-12">
                                                <div className="form-group">
                                                    <textarea {...register("content")} placeholder="Nội dung 1" className="border p-2 w-full" />
                                                </div>
                                            </div>
                                            {/* <p dangerouslySetInnerHTML={{ __html: newsDetails?.content1 ?? "" }}></p> */}
                                            <div className="image-gallery">
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6 col-12">
                                                        <div className="single-image">
                                                            <div className="col-lg-6 col-md-6 col-12">
                                                                <label>Ảnh nội dung 1:</label>
                                                                <br />
                                                                <input type="file" {...register("image1")} className="border p-2 w-full" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-12">
                                                        <div className="single-image">
                                                            <div className="col-lg-6 col-md-6 col-12">
                                                                <label>Ảnh nội dung 2:</label>
                                                                <br />
                                                                <input type="file" {...register("image2")} className="border p-2 w-full" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12 col-12">
                                                <div className="form-group">
                                                    <textarea {...register("content1")} placeholder="Nội dung 2" className="border p-2 w-full" />
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12 col-12">
                                                <div className="form-group">
                                                    <textarea {...register("content2")} placeholder="Nội dung 3" className="border p-2 w-full" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <label>Ảnh nội dung 3:</label>
                                                <br />
                                                <input type="file" {...register("image3")} className="border p-2 w-full" />
                                            </div>
                                            <div style={{ margin: '20px 0' }}>
                                                <button type="submit" className="btn">
                                                    {loading ? "Đang đăng..." : "Đăng tin"}
                                                </button>
                                                {message && <p className="mt-2 text-red-500">{message}</p>}
                                            </div>
                                            {/* <p dangerouslySetInnerHTML={{ __html: newsDetails?.content2 ?? "" }}></p> */}
                                            <blockquote className="overlay">
                                                <p>
                                                    "Phòng Khám Đông Hiếu - Y Đức Tạo Niềm Tin!"
                                                </p>
                                            </blockquote>
                                            <p>
                                                Hãy đến với Đông Hiếu để trải nghiệm dịch vụ y tế chuyên nghiệp và tận tâm. Đội ngũ của chúng tôi luôn sẵn sàng phục vụ bạn!
                                            </p>
                                        </div>

                                    </form>

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
                                        .filter((news) => news.id)
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
    );
};

export default NewsForm;
