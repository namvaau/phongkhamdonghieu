import Slider from '../../components/Slider'
import Schedule from '../../components/Schedule'
import Feautes from '../../components/Feautes'
import Facts from '../../components/Facts'
import WhyChoose from '../../components/WhyChoose'
import Call from '../../components/Call'
import Portfolio from '../../components/Portfolio'
import Services from '../../components/Services'
import Blogs from '../../components/Blogs'
import Appointment from '../../components/Appointment'
import section from '../../assets/img/section-img.png'

const IndexCustomer = () => {
    return (
        <>
            <Slider />
            <Schedule />
            <Feautes />
            <Services />
            <Call />
            <WhyChoose />
            <Portfolio />
            <section className="why-choose section" style={{paddingTop: '0'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Về Chúng Tôi</h2>
                                <img src={section} alt="Dịch vụ y tế" />
                                <p>
                                    Chúng tôi cung cấp các dịch vụ y tế chất lượng, đáp ứng nhu cầu chăm sóc sức khỏe của bạn và gia đình.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            {/* Start Choose Left */}
                            <div className="choose-left">
                                <h3>QUYỀN LỢI CỦA NGƯỜI BỆNH</h3>
                                <p>
                                    <i className="fa fa-caret-right" /> Quyền lợi được khám bệnh, chữa bệnh có chất lượng phù hợp với điều
                                    kiện thực tế.
                                </p>
                                <p>
                                    <i className="fa fa-caret-right" /> Quyền được tôn trọng bí mật riêng tư.
                                </p>
                                <p>
                                    <i className="fa fa-caret-right" /> Quyền được tôn trọng danh dự, bảo vệ sức khỏe trong khám bệnh, chữa
                                    bệnh.
                                </p>
                                <p>
                                    <i className="fa fa-caret-right" /> Quyền được lựa chọn trong khám bệnh, chữa bệnh.
                                </p>
                                <p>
                                    <i className="fa fa-caret-right" /> Quyền được cung cấp thông tin về hồ sơ bệnh án và chi phí khám bệnh,
                                    chữa bệnh.
                                </p>
                                <p>
                                    <i className="fa fa-caret-right" />  Quyền được từ chối chữa bệnh và ra khỏi cơ sở khám bệnh, chữa bệnh.
                                </p>
                                <p>
                                    <i className="fa fa-caret-right" />  Quyền của người bệnh bị mất năng lực hành vi dân sự, không có năng lực
                                    hành vi dân sự, hạn chế năng lực hành vi dân sự hoặc người chưa thành
                                    niên dưới 18 tuổi.
                                </p>
                                <p className="quote">“Trích luật khám chữa bệnh”</p>
                            </div>

                            {/* End Choose Left */}
                        </div>
                        <div className="col-lg-6 col-12">
                            {/* Start Choose Rights */}
                            <div className="choose-left">
                                <h3>NGHĨA VỤ CỦA NGƯỜI BỆNH</h3>
                                <p>
                                    <i className="fa fa-caret-right" /> Nghĩa vụ tôn trọng người hành bệnh.
                                </p>
                                <p>
                                    <i className="fa fa-caret-right" /> Nghĩa vụ chấp hành các quy định trong khám bệnh, chữa bệnh.
                                </p>
                                <p>
                                    <i className="fa fa-caret-right" /> Nghĩa vụ chi trả chi phí khám bệnh, chữa bệnh.
                                </p>
                                <p className="quote">“Trích luật khám chữa bệnh”</p>
                            </div>
                            {/* End Choose Rights */}
                        </div>
                    </div>
                </div>
            </section>
            <Facts />
            <Blogs />
            <Appointment />
        </>
    )
}

export default IndexCustomer