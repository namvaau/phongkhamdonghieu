import Breadcrumbs from '../../components/Breadcrumbs'
import section from '../../assets/img/section-img.png'
import { useEffect, useState } from 'react';
import { BASE_URL, Service } from '../../interface/InterfaceData';
import { useNavigate } from 'react-router-dom';
import Preloader from '../../components/Preloader';
const Services = () => {
    const [loading, setLoading] = useState(true);
    const [services, setServices] = useState<Service[]>([]);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await fetch(`${BASE_URL}/services`);
                if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

                const data = await response.json();
                setServices(data);
            } catch (err) {
                console.error("Error fetching services:", err);
                setError(err instanceof Error ? err.message : "Lỗi không xác định");
            } finally {
                setLoading(false); // Ẩn Preloader dù thành công hay thất bại
            }
        };

        fetchServices();
    }, []);

    if (loading) return <Preloader />;

    if (error) return <>
        <section className="error-page section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 col-12">
                        {/* Error Inner */}
                        <div className="error-inner">
                            <h1>
                                404<span>Không tìm thấy dữ liệu!</span>
                            </h1>
                            <p>
                                Đã xảy ra lỗi trong quá trình tải trang. Vui lòng thử lại !
                            </p>
                            <form className="search-form">
                                <input placeholder="Search from Here" type="text" />
                                <button className="btn" type="submit">
                                    <i className="fa fa-search" />
                                </button>
                            </form>
                        </div>
                        {/*/ End Error Inner */}
                    </div>
                </div>
            </div>
        </section>

    </>;
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