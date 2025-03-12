import Breadcrumbs from '../../components/Breadcrumbs'
import blog1 from '../../assets/img/bread-bg.jpg'
import blog2 from '../../assets/img/blog1.jpg'
import blog3 from '../../assets/img/blog2.jpg'
import blogS1 from '../../assets/img/blog-sidebar1.jpg'
import blogS2 from '../../assets/img/blog-sidebar2.jpg'
import blogS3 from '../../assets/img/blog-sidebar3.jpg'
import author from '../../assets/img/author1.jpg'

const BlogDetails = () => {
    return (
        <>
            <Breadcrumbs title='Blogs' />
            <section className="news-single section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="row">
                                <div className="col-12">
                                    <div className="single-main">
                                        {/* News Head */}
                                        <div className="news-head">
                                            <img src={blog1} alt="Phòng khám Đông Hiếu" />
                                        </div>
                                        {/* News Title */}
                                        <h1 className="news-title">
                                            <a href="news-single.html">
                                                Chăm sóc sức khỏe tận tâm tại Phòng khám Đông Hiếu
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
                                                    12 Tháng 3, 2025
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
                                            <p>
                                                Phòng khám Đông Hiếu cam kết mang đến dịch vụ chăm sóc sức khỏe chất lượng cao, với đội ngũ bác sĩ giàu kinh nghiệm và trang thiết bị hiện đại.
                                            </p>
                                            <p>
                                                Chúng tôi chuyên cung cấp các dịch vụ khám chữa bệnh, xét nghiệm y khoa và tư vấn sức khỏe toàn diện, đảm bảo sự an tâm cho mọi bệnh nhân.
                                            </p>
                                            <div className="image-gallery">
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6 col-12">
                                                        <div className="single-image">
                                                            <img src={blog2} alt="Dịch vụ y tế tại Đông Hiếu" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-12">
                                                        <div className="single-image">
                                                            <img src={blog3} alt="Trang thiết bị hiện đại" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>
                                                Với phương châm "Sức khỏe của bạn là sứ mệnh của chúng tôi", Đông Hiếu không ngừng nâng cao chất lượng dịch vụ để phục vụ khách hàng tốt nhất.
                                            </p>
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
                                    <h3 className="title">Blog Categories</h3>
                                    <ul className="categor-list">
                                        <li>
                                            <a href="#">Men's Apparel</a>
                                        </li>
                                        <li>
                                            <a href="#">Women's Apparel</a>
                                        </li>
                                        <li>
                                            <a href="#">Bags Collection</a>
                                        </li>
                                        <li>
                                            <a href="#">Accessories</a>
                                        </li>
                                        <li>
                                            <a href="#">Sun Glasses</a>
                                        </li>
                                    </ul>
                                </div>
                                {/*/ End Single Widget */}
                                {/* Single Widget */}
                                <div className="single-widget recent-post">
                                    <h3 className="title">Recent post</h3>
                                    {/* Single Post */}
                                    <div className="single-post">
                                        <div className="image">
                                            <img src={blogS3} alt="#" />
                                        </div>
                                        <div className="content">
                                            <h5>
                                                <a href="#">We have annnocuced our new product.</a>
                                            </h5>
                                            <ul className="comment">
                                                <li>
                                                    <i className="fa fa-calendar" aria-hidden="true" />
                                                    Jan 11, 2020
                                                </li>
                                                <li>
                                                    <i className="fa fa-commenting-o" aria-hidden="true" />
                                                    35
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* End Single Post */}
                                    {/* Single Post */}
                                    <div className="single-post">
                                        <div className="image">
                                            <img src={blogS1} alt="#" />
                                        </div>
                                        <div className="content">
                                            <h5>
                                                <a href="#">Top five way for solving teeth problems.</a>
                                            </h5>
                                            <ul className="comment">
                                                <li>
                                                    <i className="fa fa-calendar" aria-hidden="true" />
                                                    Mar 05, 2019
                                                </li>
                                                <li>
                                                    <i className="fa fa-commenting-o" aria-hidden="true" />
                                                    59
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* End Single Post */}
                                    {/* Single Post */}
                                    <div className="single-post">
                                        <div className="image">
                                            <img src={blogS2} alt="#" />
                                        </div>
                                        <div className="content">
                                            <h5>
                                                <a href="#">We provide highly business soliutions.</a>
                                            </h5>
                                            <ul className="comment">
                                                <li>
                                                    <i className="fa fa-calendar" aria-hidden="true" />
                                                    June 09, 2019
                                                </li>
                                                <li>
                                                    <i className="fa fa-commenting-o" aria-hidden="true" />
                                                    44
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
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

export default BlogDetails