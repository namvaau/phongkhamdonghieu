import Breadcrumbs from '../../components/Breadcrumbs'
import call from '../../assets/img/blog3.jpg'

const Specialty = () => {
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
                                            <span>Dịch Vụ :</span> Chuyên khoa điều trị
                                        </li>
                                        <li>
                                            <span>Phòng Khám :</span> Đa Khoa Đông Hiếu
                                        </li>
                                        <li>
                                            <span>Tags :</span> Chăm sóc sức khỏe, Dịch vụ y tế, Chuyên khoa
                                        </li>
                                    </ul>
                                </div>
                                <div className="body-text">
                                    <h3>Chuyên Khoa - Dịch Vụ Y Tế Toàn Diện</h3>
                                    <p>
                                        Phòng Khám Đông Hiếu cung cấp đa dạng dịch vụ y tế với đội ngũ bác sĩ giàu kinh nghiệm và trang thiết bị hiện đại, đảm bảo chẩn đoán chính xác và điều trị hiệu quả.
                                    </p>
                                    <p>
                                        **Các chuyên khoa tại phòng khám**:
                                        <br />
                                        - **Nội tổng quát**: Khám & điều trị các bệnh lý nội khoa phổ biến.
                                        <br />
                                        - **Nhi khoa**: Chăm sóc sức khỏe toàn diện cho trẻ em.
                                        <br />
                                        - **Sản - Phụ khoa**: Khám thai, tư vấn sức khỏe sinh sản.
                                        <br />
                                        - **Chấn thương - Ngoại khoa**: Sơ cứu, tiểu phẫu, xử lý vết thương.
                                        <br />
                                        - **Xét nghiệm & Chẩn đoán hình ảnh**: Xét nghiệm máu, siêu âm, nội soi.
                                    </p>
                                    <p>
                                        **Liên hệ ngay để được tư vấn và đặt lịch khám**:
                                        <br />
                                        **0975 161 115** - Phòng khám luôn sẵn sàng phục vụ bạn!
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

export default Specialty