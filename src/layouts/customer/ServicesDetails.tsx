import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Service } from '../../interface/InterfaceData';

const ServicesDetails = () => {
    const { id } = useParams(); // Lấy ID từ URL
    const location = useLocation();
    const navigate = useNavigate();
    const [services, setServices] = useState<Service[]>([]);
    const [service, setService] = useState<Service | null>(location.state?.service ?? null);
    const [searchTerm, setSearchTerm] = useState<string>(""); // State lưu từ khóa tìm kiếm
    const currentServiceId = parseInt(String(id), 10);

    useEffect(() => {
        if (!service) {
            axios.get(`https://pkdkdonghieube.onrender.com/services/${id}`)
                .then((res) => setService(res.data))
                .catch((err) => console.error("Lỗi khi lấy dữ liệu:", err));
        }
    }, [id, service]);

    useEffect(() => {
        fetch("https://pkdkdonghieube.onrender.com/services") // API backend
            .then((res) => res.json())
            .then((data) => setServices(data))
            .catch((error) => console.error("Error fetching services:", error));
    }, []);

    if (!service) return <p>Đang tải...</p>;

    function removeVietnameseTones(str: string) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }

    const filteredDetails = service.serviceDetails
        .filter(detail => detail && detail.detail)  // Loại bỏ null hoặc undefined
        .filter(detail =>
            removeVietnameseTones(detail.detail).includes(removeVietnameseTones(searchTerm) || "")
        );
    return (
        <>
            <Breadcrumbs title={service.name} />
            <section className="pf-details section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="inner-content">
                                {/* <div className="image-slider">
                                    <div className="pf-details-slider">
                                        <img src={banner} alt="Service" />
                                    </div>
                                </div>
                                <div className="date">
                                    <ul>
                                        <li><span>Dịch Vụ :</span> {service.name}</li>
                                        <li><span>Phòng Khám :</span> Đa Khoa Đông Hiếu</li>
                                        <li><span>Tags :</span> Cấp cứu, Hỗ trợ khẩn cấp, Y tế 24/7</li>
                                    </ul>
                                </div> */}

                                {/* Ô tìm kiếm */}
                                <div className="search-bar" style={{ margin: '20px 0', outline: 'none' }}>
                                    <input
                                        className='search__input'
                                        type="text"
                                        placeholder="Tìm kiếm dịch vụ..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>

                                <div className="body-text">
                                    <div className="service-details-container">
                                        <table className="service-table">
                                            <thead>
                                                <tr>
                                                    <th>Dịch vụ</th>
                                                    <th>Giá BHYT</th>
                                                    <th>Giá dịch vụ</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {filteredDetails.length > 0 ? (
                                                    filteredDetails.map((detail) => (
                                                        <tr key={detail.id}>
                                                            <td>
                                                                <i className="icon-check">✔</i> {detail.detail}
                                                            </td>
                                                            <td>{(detail.insurancePrice ?? 0).toLocaleString()}đ</td>
                                                            <td>{(detail.price ?? 0).toLocaleString()}đ</td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan={2} style={{ textAlign: "center" }}>
                                                            Không tìm thấy dịch vụ nào
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pricing-table section">
                <div className="container">
                    <div className="row">
                        {services
                        .filter((service) => service.id !== currentServiceId)
                        .map((service) => (
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
    );
};

export default ServicesDetails;
