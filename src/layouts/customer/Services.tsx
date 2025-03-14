import Breadcrumbs from '../../components/Breadcrumbs'
import section from '../../assets/img/section-img.png'
import { useEffect, useState } from 'react';
import { Service } from '../../interface/InterfaceData';
import { useNavigate } from 'react-router-dom';
const Services = () => {
    const [services, setServices] = useState<Service[]>([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch("https://pkdkdonghieube.onrender.com/services") // API backend
            .then((res) => res.json())
            .then((data) => setServices(data))
            .catch((error) => console.error("Error fetching services:", error));
    }, []);
    return (
        <>
            <Breadcrumbs title='Dịch Vụ Của Chúng Tôi' />
            <section className="pricing-table section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Các Dịch Vụ Chăm Sóc Sức Khỏe Tại Phòng Khám Đông Hiếu</h2>
                                <img src={section} alt="Dịch vụ y tế" />
                                <p>
                                    Chúng tôi cung cấp các dịch vụ y tế chất lượng, đáp ứng nhu cầu chăm sóc sức khỏe của bạn và gia đình.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {services.map((service) => (
                            <div className="col-lg-4 col-md-12 col-12" key={service.id}>
                                <div className="single-table">
                                    {/* Table Head */}
                                    <div className="table-head">
                                        <div className="icon">
                                            <i className="icofont-stethoscope-alt"></i>
                                        </div>
                                        <h4 className="title">{service.name}</h4>
                                        <div className="price">
                                        </div>
                                    </div>

                                    {/* Table List */}
                                    <ul className="table-list">
                                        {service.serviceDetails.slice(0, 5).map((detail) => (
                                            <li key={detail.id}>
                                                <i className="icofont icofont-ui-check" /> {detail.detail} - {detail.price.toLocaleString()}đ
                                            </li>
                                        ))}
                                    </ul>


                                    {/* Table Bottom */}
                                    <div className="table-bottom">
                                        <a className="btn" style={{ color: '#fff' }} onClick={() => navigate(`/services/details/${service.id}`, { state: { service } })}>
                                            Xem Chi Tiết
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services