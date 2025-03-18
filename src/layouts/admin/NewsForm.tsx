import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Breadcrumbs from "../../components/Breadcrumbs";
import { BASE_URL, News } from "../../interface/InterfaceData";
import { useNavigate } from "react-router-dom";
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
            <Breadcrumbs title='Đăng Tin' />
            <section className="appointment" style={{ paddingBottom: '50px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-12">
                            <form onSubmit={handleSubmit(onSubmit)} className="p-4 border rounded-lg">
                                <div className="row">
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
                                    {/* <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <input type="date" {...register("date", { required: true })} className="border p-2 w-full" />
                                        </div>
                                    </div> */}
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <label>Ảnh chính:</label>
                                            <br />
                                            <input type="file" {...register("image")} className="border p-2 w-full" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-12">
                                        <div className="form-group">
                                            <textarea {...register("content")} placeholder="Nội dung 1" className="border p-2 w-full" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <label>Ảnh nội dung 1:</label>
                                            <br />
                                            <input type="file" {...register("image1")} className="border p-2 w-full" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-12">
                                        <div className="form-group">
                                            <textarea {...register("content1")} placeholder="Nội dung 2" className="border p-2 w-full" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <label>Ảnh nội dung 2:</label>
                                            <br />
                                            <input type="file" {...register("image2")} className="border p-2 w-full" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-12">
                                        <div className="form-group">
                                            <textarea {...register("content2")} placeholder="Nội dung 3" className="border p-2 w-full" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <label>Ảnh nội dung 3:</label>
                                            <br />
                                            <input type="file" {...register("image3")} className="border p-2 w-full" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-5 col-md-4 col-12">
                                        <div className="form-group">
                                            <div className="button">
                                                <button type="submit" className="btn">
                                                    {loading ? "Đang đăng..." : "Đăng tin"}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-md-8 col-12">
                                        {message && <p className="mt-2 text-red-500">{message}</p>}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </section>
            <section className="blog section" id="blog">
                <div className="container">
                    <div className="row">
                        {sortedNews.map((item) => (
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
    );
};

export default NewsForm;
