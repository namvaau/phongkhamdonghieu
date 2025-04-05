import { Link, useParams } from 'react-router-dom'
import { BASE_URL, Specialty, SpecialtyDetail } from '../../interface/InterfaceData'
import { useEffect, useState } from 'react'
import axios from 'axios'

const ChuyenKhoaChiTiet = () => {
    const { id } = useParams<{ id: string }>();
    const [detail, setDetail] = useState<SpecialtyDetail | null>(null);

    useEffect(() => {
        axios
            .get(`${BASE_URL}/api/specialty-details/${id}`)
            .then((response) => {
                setDetail(response.data);
            })
            .catch((error) => {
                console.error("Error fetching specialty details:", error);
            });
    }, [id]);

    const [specialties, setSpecialties] = useState<Specialty[]>([]);
    const [error, setError] = useState("");
    useEffect(() => {
        const fetchSpecialties = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/specialties`);
                setSpecialties(response.data);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Lỗi không xác định");
            }
        };

        fetchSpecialties();
    }, []);
    const [fontSize, setFontSize] = useState(16);

    const increaseFontSize = () => setFontSize((prev) => Math.min(prev + 2, 30));
    const decreaseFontSize = () => setFontSize((prev) => Math.max(prev - 2, 10));
    return (
        <>
            {error}
            <section className="news-single section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="row">
                                <div className="col-12">
                                    <div className="single-main">
                                        {/* News Head */}
                                        <div className="speciality-head">
                                            <img src={detail?.image1} alt="Phòng khám Đông Hiếu" />
                                        </div>
                                        {/* News Title */}
                                        {/* Meta */}
                                        {/* News Text */}
                                        <div className="meta">
                                            <div className="meta-left">

                                            </div>
                                            <div className="meta-right" style={{ display: 'flex', cursor: 'pointer' }}>
                                                <p onClick={decreaseFontSize}><i className="fa fa-minus" aria-hidden="true"></i></p>
                                                <span style={{ fontSize: `${fontSize}px`, margin: "0 20px" }}>Aa</span>
                                                <p onClick={increaseFontSize}><i className="fa fa-plus" aria-hidden="true"></i></p>
                                            </div>
                                        </div>
                                        <div className="news-text" style={{ fontSize: `${fontSize}px`}}>
                                            <h5 style={{ margin: '10px 0' }}>Giới Thiệu</h5>
                                            <p dangerouslySetInnerHTML={{ __html: detail?.introduction ?? "" }}></p>
                                            <h5 style={{ margin: '10px 0' }}>Chức năng & Nhiệm vụ</h5>
                                            <blockquote className="overlay">
                                                <p style={{ fontSize: `${fontSize}px`}} dangerouslySetInnerHTML={{ __html: detail?.function ?? "" }}></p>
                                            </blockquote>
                                            <h5 style={{ margin: '10px 0' }}>Về công tác điều trị tại Khoa</h5>
                                            <p dangerouslySetInnerHTML={{ __html: detail?.expertise ?? "" }}></p>

                                            <h5 style={{ margin: '10px 0' }}>Về nguồn nhân lực</h5>
                                            <blockquote className="overlay">
                                                <p style={{ fontSize: `${fontSize}px`}} dangerouslySetInnerHTML={{ __html: detail?.personnel ?? "" }}></p>
                                            </blockquote>
                                            <h5 style={{ margin: '10px 0' }}>Về hệ thống trang thiết bị</h5>
                                            <p dangerouslySetInnerHTML={{ __html: detail?.equipment ?? "" }}></p>
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
                                {/*/ End Single Widget */}
                                {/* Single Widget */}
                                <div className="single-widget category">
                                    <h3 className="title">Các chuyên khoa khác</h3>
                                    <ul className="categor-list">
                                        {specialties
                                            .filter((speciality) => speciality.id !== Number(id))
                                            .map((item) => (
                                                <li>
                                                    <Link to={`/chuyen-khoa/chi-tiet/${item.id}`}>{item.name}</Link>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                                {/*/ End Single Widget */}
                                {/* Single Widget */}
                                {/*/ End Single Widget */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ChuyenKhoaChiTiet