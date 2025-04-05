import { Link } from "react-router-dom"


const ThongTinDauTrang = () => {
    return (
        <>
            <section className="schedule">
                <div className="container">
                    <div className="schedule-inner">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-12">
                                {/* single-schedule */}
                                <div className="single-schedule last">
                                    <div className="inner">
                                        <div className="icon">
                                            <i className="icofont-ui-clock" />
                                        </div>
                                        <div className="single-content">
                                            <span>Phòng Khám Đa Khoa Đông Hiếu</span>
                                            <h4>Giờ Làm Việc</h4>
                                            <ul className="time-sidual">
                                                <li className="day">
                                                    Thứ Hai - Chủ Nhật (Sáng) <span>6:30 - 11:00</span>
                                                </li>
                                                <li className="day">
                                                    Thứ Hai - Chủ Nhật (Chiều) <span>14:00 - 17:30</span>
                                                </li>
                                                <li className="day">
                                                    <br />
                                                    Khám và cấp phát thuốc Bảo Hiểm Y Tế từ  <br />
                                                    Thứ 2 - Thứ 7
                                                </li>
                                            </ul>
                                            {/* <a href="">
                                                XEM CHI TIẾT
                                                <i className="fa fa-long-arrow-right" />
                                            </a> */}
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-12">
                                {/* single-schedule */}
                                <div className="single-schedule middle">
                                    <div className="inner">
                                        <div className="icon">
                                            <i className="icofont-prescription" />
                                        </div>
                                        <div className="single-content">
                                            <span>Phòng Khám Đa Khoa Đông Hiếu</span>
                                            <h4>Chuyên Khoa</h4>
                                            <p>
                                                Sở hữu không gian khám chữa bệnh văn minh, sang trọng, hiện đại, hỗ trợ hiệu quả cho việc chẩn đoán và điều trị.
                                            </p>
                                            <Link to="/chuyen-khoa">XEM CHI TIẾT</Link>
                                            <i className="fa fa-long-arrow-right" style={{ color: '#fff', marginLeft: '5px' }} />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12 ">
                                {/* single-schedule */}
                                <div className="single-schedule first">
                                    <div className="inner">
                                        <div className="icon">
                                            <i className="fa fa-ambulance" />
                                        </div>
                                        <div className="single-content">
                                            <span>Phòng Khám Đa Khoa Đông Hiếu</span>
                                            <h4>Khám bệnh Bảo hiểm y tế</h4>
                                            <p>
                                                Quy định về chế độ, chính sách bảo hiểm y tế, bao gồm đối tượng, mức đóng, trách nhiệm và phương thức ...
                                            </p>
                                            <Link to="/kham-benh-bhyt">XEM CHI TIẾT</Link>
                                            <i className="fa fa-long-arrow-right" style={{ color: '#fff', marginLeft: '5px' }} />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default ThongTinDauTrang