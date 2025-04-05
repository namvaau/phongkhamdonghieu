import Breadcrumbs from '../../components/Breadcrumbs'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { BASE_URL, type News } from '../../interface/InterfaceData'
import { useEffect, useState } from 'react'
import axios from 'axios'

const KhamBenhBHYT = () => {
    const { id } = useParams();

    const [news, setNews] = useState<News[]>([]);
    const [fontSize, setFontSize] = useState(16);

    const increaseFontSize = () => setFontSize((prev) => Math.min(prev + 2, 30));
    const decreaseFontSize = () => setFontSize((prev) => Math.max(prev - 2, 10));

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
                                        {/* News Title */}
                                        <h1 className="news-title">
                                            <a>
                                                KHÁM BỆNH BẢO HIỂM Y TẾ
                                            </a>
                                        </h1>
                                        <div className="meta">
                                            <div className="meta-left" style={{ display: 'flex', cursor: 'pointer' }}>
                                                <p onClick={decreaseFontSize}><i className="fa fa-minus" aria-hidden="true"></i></p>
                                                <span style={{ fontSize: `${fontSize}px`, margin: "0 20px" }}>Aa</span>
                                                <p onClick={increaseFontSize}><i className="fa fa-plus" aria-hidden="true"></i></p>
                                            </div>
                                        </div>
                                        <div className="news-text" style={{ fontSize: `${fontSize}px` }}>
                                            <p><strong>NHỮNG QUY ĐỊNH CHUNG</strong></p>

                                            <p><strong>Điều 1. Phạm vi điều chỉnh và đối tượng áp dụng</strong></p>

                                            <p>1. Luật này quy định về chế độ, chính sách bảo hiểm y tế, bao gồm đối tượng, mức đóng, trách nhiệm và phương thức đóng bảo hiểm y tế; thẻ bảo hiểm y tế; phạm vi được hưởng bảo hiểm y tế; tổ chức khám bệnh, chữa bệnh cho người tham gia bảo hiểm y tế; thanh toán chi phí khám bệnh, chữa bệnh bảo hiểm y tế; quỹ bảo hiểm y tế; quyền và trách nhiệm của các bên liên quan đến bảo hiểm y tế.</p>

                                            <p>2. Luật này áp dụng đối với tổ chức, cá nhân trong nước và tổ chức, cá nhân nước ngoài tại Việt Nam có liên quan đến bảo hiểm y tế.</p>

                                            <p>3. Luật này không áp dụng đối với bảo hiểm y tế mang tính kinh doanh.</p>

                                            <p><strong>Điều 2. Giải thích từ ngữ</strong></p>

                                            <p>Trong Luật này, các từ ngữ dưới đây được hiểu như sau:</p>

                                            <p>1. Bảo hiểm y tế là hình thức bảo hiểm được áp dụng trong lĩnh vực chăm sóc sức khỏe, không vì mục đích lợi nhuận, do Nhà nước tổ chức thực hiện và các đối tượng có trách nhiệm tham gia theo quy định của Luật này.</p>

                                            <p>2. Bảo hiểm y tế toàn dân là việc các đối tượng quy định trong Luật này đều tham gia bảo hiểm y tế.</p>

                                            <p>3. Quỹ bảo hiểm y tế là quỹ tài chính được hình thành từ nguồn đóng bảo hiểm y tế và các nguồn thu hợp pháp khác, được sử dụng để chi trả chi phí khám bệnh, chữa bệnh cho người tham gia bảo hiểm y tế, chi phí quản lý bộ máy của tổ chức bảo hiểm y tế và những khoản chi phí hợp pháp khác liên quan đến bảo hiểm y tế.</p>

                                            <p>4. Người sử dụng lao động bao gồm cơ quan nhà nước, đơn vị sự nghiệp công lập, đơn vị vũ trang nhân dân, tổ chức chính trị, tổ chức chính trị – xã hội, tổ chức chính trị xã hội – nghề nghiệp, tổ chức xã hội, tổ chức xã hội – nghề nghiệp, doanh nghiệp, hợp tác xã, hộ kinh doanh cá thể và tổ chức khác; tổ chức nước ngoài, tổ chức quốc tế hoạt động trên lãnh thổ Việt Nam có trách nhiệm đóng bảo hiểm y tế.</p>

                                            <p>5. Cơ sở khám bệnh, chữa bệnh bảo hiểm y tế ban đầu là cơ sở khám bệnh, chữa bệnh đầu tiên theo đăng ký của người tham gia bảo hiểm y tế và được ghi trong thẻ bảo hiểm y tế.</p>

                                            <p>6. Giám định bảo hiểm y tế là hoạt động chuyên môn do tổ chức bảo hiểm y tế tiến hành nhằm đánh giá sự hợp lý của việc cung cấp dịch vụ y tế cho người tham gia bảo hiểm y tế, làm cơ sở để thanh toán chi phí khám bệnh, chữa bệnh bảo hiểm y tế.</p>

                                            <p><strong>Điều 3. Nguyên tắc khám bảo hiểm y tế</strong></p>

                                            <p>1. Bảo đảm chia sẻ rủi ro giữa những người tham gia bảo hiểm y tế.</p>

                                            <p>2. Mức đóng bảo hiểm y tế được xác định theo tỷ lệ phần trăm của tiền lương, tiền công, tiền lương hưu, tiền trợ cấp hoặc mức lương tối thiểu của khu vực hành chính (sau đây gọi chung là mức lương tối thiểu).</p>

                                            <p>3. Mức hưởng bảo hiểm y tế theo mức độ bệnh tật, nhóm đối tượng trong phạm vi quyền lợi của người tham gia bảo hiểm y tế.</p>

                                            <p>4. Chi phí khám bệnh, chữa bệnh bảo hiểm y tế do quỹ bảo hiểm y tế và người tham gia bảo hiểm y tế cùng chi trả.</p>

                                            <p>5. Quỹ bảo hiểm y tế được quản lý tập trung, thống nhất, công khai, minh bạch, bảo đảm cân đối thu, chi và được Nhà nước bảo hộ.</p>

                                            <p><strong>Điều 4. Chính sách của Nhà nước về bảo hiểm y tế</strong></p>

                                            <p>1. Nhà nước đóng hoặc hỗ trợ tiền đóng bảo hiểm y tế cho người có công với cách mạng và một số nhóm đối tượng xã hội.</p>

                                            <p>2. Nhà nước có chính sách ưu đãi đối với hoạt động đầu tư từ quỹ bảo hiểm y tế để bảo toàn và tăng trưởng quỹ. Nguồn thu của quỹ và số tiền sinh lời từ hoạt động đầu tư từ quỹ bảo hiểm y tế được miễn thuế.</p>

                                            <p>3. Nhà nước tạo điều kiện để tổ chức, cá nhân tham gia bảo hiểm y tế hoặc đóng bảo hiểm y tế cho các nhóm đối tượng.</p>

                                            <p>4. Nhà nước khuyến khích đầu tư phát triển công nghệ và phương tiện kỹ thuật tiên tiến trong quản lý bảo hiểm y tế.</p>

                                            <p><strong>Điều 5. Cơ quan quản lý nhà nước về bảo hiểm y tế</strong></p>

                                            <p>1. Chính phủ thống nhất quản lý nhà nước về bảo hiểm y tế.</p>

                                            <p>2. Bộ Y tế chịu trách nhiệm trước Chính phủ thực hiện quản lý nhà nước về bảo hiểm y tế.</p>

                                            <p>3. Bộ, cơ quan ngang bộ trong phạm vi nhiệm vụ, quyền hạn của mình phối hợp với Bộ Y tế thực hiện quản lý nhà nước về bảo hiểm y tế.</p>

                                            <p>4. Uỷ ban nhân dân các cấp trong phạm vi nhiệm vụ, quyền hạn của mình thực hiện quản lý nhà nước về bảo hiểm y tế tại địa phương.</p>

                                            <p><strong>Điều 11. Các hành vi bị nghiêm cấm</strong></p>

                                            <p>1. Không đóng hoặc đóng bảo hiểm y tế không đầy đủ theo quy định của Luật này.</p>

                                            <p>2. Gian lận, giả mạo hồ sơ, thẻ bảo hiểm y tế.</p>

                                            <p>3. Sử dụng tiền đóng bảo hiểm y tế, quỹ bảo hiểm y tế sai mục đích.</p>

                                            <p>4. Cản trở, gây khó khăn hoặc làm thiệt hại đến quyền, lợi ích hợp pháp của người tham gia bảo hiểm y tế và của các bên liên quan đến bảo hiểm y tế.</p>

                                            <p>5. Cố ý báo cáo sai sự thật, cung cấp sai lệch thông tin, số liệu về bảo hiểm y tế.</p>

                                            <p>6. Lợi dụng chức vụ, quyền hạn, chuyên môn, nghiệp vụ để làm trái với quy định của pháp luật về bảo hiểm y tế.</p>

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

export default KhamBenhBHYT