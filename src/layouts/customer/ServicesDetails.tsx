import { useLocation, useParams } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Service } from '../../interface/InterfaceData';
import banner from '../../assets/img/blog2.jpg';

const ServicesDetails = () => {
    const { id } = useParams(); // Lấy ID từ URL
    const location = useLocation();
    const [service, setService] = useState<Service | null>(location.state?.service ?? null);
    const [searchTerm, setSearchTerm] = useState<string>(""); // State lưu từ khóa tìm kiếm

    useEffect(() => {
        if (!service) {
            axios.get(`https://pkdkdonghieube.onrender.com/services/${id}`)
                .then((res) => setService(res.data))
                .catch((err) => console.error("Lỗi khi lấy dữ liệu:", err));
        }
    }, [id, service]);

    if (!service) return <p>Đang tải...</p>;

    // Lọc danh sách serviceDetails theo searchTerm
    const filteredDetails = service.serviceDetails.filter((detail) =>
        detail.detail.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Breadcrumbs title={service.name} />
            <section className="pf-details section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="inner-content">
                                <div className="image-slider">
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
                                </div>

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
                                                    <th>Giá</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {filteredDetails.length > 0 ? (
                                                    filteredDetails.map((detail) => (
                                                        <tr key={detail.id}>
                                                            <td>
                                                                <i className="icon-check">✔</i> {detail.detail}
                                                            </td>
                                                            <td>{detail.price.toLocaleString()}đ</td>
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
        </>
    );
};

export default ServicesDetails;
