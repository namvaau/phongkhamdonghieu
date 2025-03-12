

const Schedule = () => {
    return (
        <>
            <section className="schedule">
                <div className="container">
                    <div className="schedule-inner">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12 ">
                                {/* single-schedule */}
                                <div className="single-schedule first">
                                    <div className="inner">
                                        <div className="icon">
                                            <i className="fa fa-ambulance" />
                                        </div>
                                        <div className="single-content">
                                            <span>Phòng Khám Đông Hiếu</span>
                                            <h4>Trường Hợp Khẩn Cấp</h4>
                                            <p>
                                                Nếu bạn gặp tình huống khẩn cấp về sức khỏe, hãy liên hệ ngay với chúng tôi để được hỗ trợ kịp thời. <br />
                                                 ĐT: 0975 161 115
                                            </p>
                                            <a href="#">
                                                TÌM HIỂU THÊM
                                                <i className="fa fa-long-arrow-right" />
                                            </a>
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
                                            <span>Phòng Khám Đông Hiếu</span>
                                            <h4>Lịch Làm Việc của Bác Sĩ</h4>
                                            <p>
                                                Chúng tôi cung cấp lịch làm việc chi tiết của các bác sĩ, sắp xếp thời gian thăm khám phù hợp.
                                                Đội ngũ bác sĩ luôn sẵn sàng phục vụ với chất lượng tốt nhất.
                                            </p>
                                            <a href="#">
                                                XEM CHI TIẾT
                                                <i className="fa fa-long-arrow-right" />
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-12">
                                {/* single-schedule */}
                                <div className="single-schedule last">
                                    <div className="inner">
                                        <div className="icon">
                                            <i className="icofont-ui-clock" />
                                        </div>
                                        <div className="single-content">
                                            <span>Phòng Khám Đông Hiếu</span>
                                            <h4>Giờ Làm Việc</h4>
                                            <ul className="time-sidual">
                                                <li className="day">
                                                    Thứ Hai - Chủ Nhật (Sáng) <span>8:00 - 11:30</span>
                                                </li>
                                                <li className="day">
                                                    Thứ Hai - Chủ Nhật (Chiều) <span>13:30 - 17:30</span>
                                                </li>
                                                <li className="day">
                                                   Cấp phát thuốc Bảo Hiểm Y Tế từ  <br />
                                                   Thứ 2 - Thứ 7 (Trừ ngày lễ tết)
                                                </li>
                                            </ul>
                                            <a href="#">
                                                XEM CHI TIẾT
                                                <i className="fa fa-long-arrow-right" />
                                            </a>
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

export default Schedule