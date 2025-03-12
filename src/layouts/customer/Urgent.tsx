import Breadcrumbs from '../../components/Breadcrumbs'
import call from '../../assets/img/xecapcuu.jpg'

const Urgent = () => {
    return (
        <>
            <Breadcrumbs title='Trường Hợp Khẩn Cấp' />
            <section className="pf-details section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="inner-content">
                                <div className="image-slider">
                                    <div className="pf-details-slider">
                                        <img src={call} alt="#" />
                                    </div>
                                </div>
                                <div className="date">
                                    <ul>
                                        <li>
                                            <span>Dịch Vụ :</span> Y tế khẩn cấp
                                        </li>
                                        <li>
                                            <span>Phòng Khám :</span> Đa Khoa Đông Hiếu
                                        </li>
                                        <li>
                                            <span>Tags :</span> Cấp cứu, Hỗ trợ khẩn cấp, Y tế 24/7
                                        </li>
                                    </ul>
                                </div>
                                <div className="body-text">
                                    <h3>Trường Hợp Khẩn Cấp - Hãy Gọi Ngay 0975 161 115</h3>
                                    <p>
                                        Khi gặp tình huống khẩn cấp về sức khỏe, **thời gian là yếu tố quyết định**. Phòng Khám Đông Hiếu luôn sẵn sàng hỗ trợ **24/7** với đội ngũ y bác sĩ chuyên môn cao, trang thiết bị hiện đại và quy trình xử lý cấp cứu nhanh chóng.
                                    </p>
                                    <p>
                                        **Các trường hợp cần hỗ trợ khẩn cấp**:
                                        <br />
                                        - Khó thở, đau ngực, huyết áp tăng cao đột ngột
                                        <br />
                                        - Chấn thương, tai nạn, mất ý thức
                                        <br />
                                        - Sốt cao, co giật, đột quỵ, ngộ độc
                                        <br />
                                        - Các tình huống cần sơ cứu và can thiệp y tế ngay lập tức
                                    </p>
                                    <p>
                                        **Hãy liên hệ ngay với chúng tôi qua số điện thoại:**
                                        <br />
                                        **0975 161 115** - Luôn có nhân viên y tế túc trực để hỗ trợ bạn kịp thời.
                                    </p>
                                    <div className="share">
                                        <h4>Chia sẻ ngay -</h4>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-facebook-official" aria-hidden="true" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-twitter" aria-hidden="true" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-linkedin" aria-hidden="true" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section >

        </>
    )
}

export default Urgent