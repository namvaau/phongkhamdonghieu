import Breadcrumbs from '../../components/Breadcrumbs'
import section from '../../assets/img/section-img.png'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL, Specialty } from '../../interface/InterfaceData';
const Specialties = () => {
    const [specialties, setSpecialties] = useState<Specialty[]>([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get(`${BASE_URL}/specialties`)
            .then((response) => {
                setSpecialties(response.data);
            })
            .catch((err) => {
                setError(err.message);
            });
    }, []);
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
            <Breadcrumbs title='Chuyên Khoa' />
            <section className="services section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Các Chuyên Khoa Tại Phòng Khám Đa Khoa Đông Hiếu</h2>
                                <img src={section} alt="Dịch vụ y tế" />
                                <p>
                                    Chúng tôi cung cấp các dịch vụ y tế chất lượng, đáp ứng nhu cầu chăm sóc sức khỏe của bạn và gia đình.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {specialties.map((specialty) => (
                            <div key={specialty.id} className="col-lg-4 col-md-6 col-12">
                                <div className="single-service">
                                    <i className={`icofont ${specialty.icon}`} />
                                    <h4>
                                        <a href="#">{specialty.name}</a>
                                    </h4>
                                    <p>{specialty.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Specialties