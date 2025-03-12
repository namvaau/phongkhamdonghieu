
import section from '../assets/img/section-img.png'

const Feautes = () => {
    return (
        <>
            <section className="Feautes section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Chúng tôi luôn sẵn sàng giúp bạn &amp; gia đình bạn </h2>
                                <img src={section} alt="#" />
                                <p>
                                    Đây là nguyên tắc cốt lõi giúp Phòng Khám Đông Hiếu thực hiện sứ mệnh nâng cao sức khỏe và mang lại hạnh phúc cho mọi người. Luôn tận tâm vì bệnh nhân.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-12">
                            {/* Start Single features */}
                            <div className="single-features">
                                <div className="signle-icon">
                                    <i className="icofont-hospital"></i>
                                </div>
                                <h3>Chất Lượng</h3>
                                <p>
                                    Chúng tôi luôn đặt chất lượng lên hàng đầu, mang đến dịch vụ chăm sóc sức khỏe tận tâm và hiệu quả nhất.
                                </p>
                            </div>
                            {/* End Single features */}
                        </div>
                        <div className="col-lg-3 col-12">
                            {/* Start Single features */}
                            <div className="single-features">
                                <div className="signle-icon">
                                    <i className="icofont icofont-ambulance-cross" />
                                </div>
                                <h3>Trách Nhiệm</h3>
                                <p>
                                    Chúng tôi cam kết chịu trách nhiệm với từng quyết định y khoa, đảm bảo sự an toàn và tin cậy cho người bệnh.
                                </p>
                            </div>
                            {/* End Single features */}
                        </div>
                        <div className="col-lg-3 col-12">
                            {/* Start Single features */}
                            <div className="single-features">
                                <div className="signle-icon">
                                    <i className="icofont icofont-medical-sign-alt" />
                                </div>
                                <h3>Công Bằng</h3>
                                <p>
                                    Chúng tôi đối xử công bằng, tôn trọng mọi bệnh nhân và cộng đồng, không phân biệt hoàn cảnh hay điều kiện.
                                </p>
                            </div>
                            {/* End Single features */}
                        </div>
                        <div className="col-lg-3 col-12">
                            {/* Start Single features */}
                            <div className="single-features last">
                                <div className="signle-icon">
                                    <i className="icofont icofont-stethoscope" />
                                </div>
                                <h3>Thấu Hiểu</h3>
                                <p>
                                    Chúng tôi luôn lắng nghe, đồng cảm với nỗi lo của bệnh nhân, mang đến sự chăm sóc tận tâm và chu đáo nhất.
                                </p>
                            </div>
                            {/* End Single features */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Feautes