import Breadcrumbs from "../../components/Breadcrumbs";

const ContactUs = () => {
    return (
        <>
            <Breadcrumbs title="Liên Hệ" />
            <section className="contact-us section">
                <div className="container">
                    <div className="inner">
                        <div className="row">
                            {/* Bản đồ Google Maps */}
                            <div className="col-lg-6">
                                <div className="contact-us-left">
                                    <iframe
                                        title="Google Map"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.9093427700395!2d105.47311307467022!3d19.28630824533767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31371593eae9550b%3A0xf967bf269a995f5!2zUGjDsm5nIEtow6FtIMSQYSBLaG9hIMSQw7RuZyBIaeG6v3U!5e0!3m2!1svi!2s!4v1741687925703!5m2!1svi!2s"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </div>

                            {/* Form liên hệ */}
                            <div className="col-lg-6">
                                <div className="contact-us-form">
                                    <h2>Liên hệ với chúng tôi</h2>
                                    <p>Nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ với chúng tôi.</p>
                                    <form className="form">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input type="text" name="name" placeholder="Họ và tên" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input type="email" name="email" placeholder="Email" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input type="text" name="phone" placeholder="Số điện thoại" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input type="text" name="subject" placeholder="Chủ đề" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <textarea name="message" placeholder="Nội dung tin nhắn" required />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group login-btn">
                                                    <button className="btn" type="submit">Gửi</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Thông tin liên hệ */}
                    <div className="contact-info">
                        <div className="row">
                            <div className="col-lg-4 col-12">
                                <div className="single-info">
                                    <i className="icofont icofont-ui-call" />
                                    <div className="content">
                                        <h3  style={{fontSize: '14px'}}>+84 123 456 789</h3>
                                        <p style={{fontSize: '12px'}}>info@phongkhamdonghieu.vn</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="single-info">
                                    <i className="icofont-google-map" />
                                    <div className="content">
                                        <h3 style={{fontSize: '14px'}}>Phòng Khám Đông Hiếu</h3>
                                        <p  style={{fontSize: '12px'}}>Thái Hòa, Nghệ An, Việt Nam</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="single-info">
                                    <i className="icofont icofont-wall-clock" />
                                    <div className="content">
                                        <h3 style={{fontSize: '14px'}}>Thứ 2 - Chủ Nhật: 8h - 17h</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactUs;
