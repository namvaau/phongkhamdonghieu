import section from "../assets/img/section-img.png";

const Appointment = () => {
    return (
        <>
            <section className="appointment" style={{ paddingBottom: '50px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Chúng tôi luôn sẵn sàng hỗ trợ bạn. Đặt lịch khám ngay!</h2>
                                <img src={section} alt="section" />
                                <p>
                                    Hãy đặt lịch hẹn với bác sĩ của chúng tôi để nhận được sự tư vấn và chăm sóc y tế tốt nhất.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-12">
                            <form className="form" action="#">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <input name="name" type="text" placeholder="Họ và tên" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <input name="email" type="email" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <input name="phone" type="text" placeholder="Số điện thoại" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <div className="nice-select form-control wide" tabIndex={0}>
                                                <span className="current">Chuyên khoa</span>
                                                <ul className="list">
                                                    <li data-value={1} className="option selected">
                                                        Chuyên khoa
                                                    </li>
                                                    <li data-value={2} className="option">
                                                        Tim mạch
                                                    </li>
                                                    <li data-value={3} className="option">
                                                        Thần kinh
                                                    </li>
                                                    <li data-value={4} className="option">
                                                        Nha khoa
                                                    </li>
                                                    <li data-value={5} className="option">
                                                        Tiêu hóa
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <div className="nice-select form-control wide" tabIndex={0}>
                                                <span className="current">Bác sĩ</span>
                                                <ul className="list">
                                                    <li data-value={1} className="option selected">
                                                        Chọn bác sĩ
                                                    </li>
                                                    <li data-value={2} className="option">
                                                        BS. Nguyễn Văn A
                                                    </li>
                                                    <li data-value={3} className="option">
                                                        BS. Trần Thị B
                                                    </li>
                                                    <li data-value={4} className="option">
                                                        BS. Lê Văn C
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <input type="date" placeholder="Date" id="datepicker" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-12">
                                        <div className="form-group">
                                            <textarea
                                                name="message"
                                                placeholder="Nhập tin nhắn của bạn..."
                                                defaultValue={""}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-5 col-md-4 col-12">
                                        <div className="form-group">
                                            <div className="button">
                                                <button type="submit" className="btn">
                                                    Đặt lịch Hẹn
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-md-8 col-12">
                                        <p>( Chúng tôi sẽ xác nhận qua tin nhắn )</p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Appointment;
