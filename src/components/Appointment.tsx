import { useEffect, useState } from "react";
import section from "../assets/img/section-img.png";
import { BASE_URL, Doctor, Specialty } from "../interface/InterfaceData";
import axios from "axios";

const Appointment = () => {
    const [specialties, setSpecialties] = useState<Specialty[]>([]);
    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const [error, setError] = useState(null);
    const [selected, setSelected] = useState("Chuyên khoa");
    const [selectedDoctor, setSelectedDoctor] = useState("Bác sĩ");
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenDoctor, setIsOpenDoctor] = useState(false);

    const handleSelect = (name: string) => {
        setSelected(name);
        setIsOpen(false);
    };

    const handleSelectDoctor = (name: string) => {
        setSelectedDoctor(name);
        setIsOpenDoctor(false);
    };


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

    useEffect(() => {
        axios
            .get(`${BASE_URL}/doctors`)
            .then((response) => {
                setDoctors(response.data);
            })
            .catch((err) => {
                setError(err.message);
            });
    }, []);

    const filteredDoctors = selected === "Chuyên khoa"
        ? doctors // Nếu chưa chọn thì hiển thị tất cả
        : doctors.filter((doctor) => doctor.speciality === selected);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        specialty: selected,
        doctor: selectedDoctor,
        date: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch(`${BASE_URL}/api/send-email`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Đặt lịch thành công! Vui lòng kiểm tra email.");
            } else {
                alert("Có lỗi xảy ra!");
            }
        } catch (error) {
            console.error("Lỗi khi gửi email:", error);
        }
    };
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
                            <form className="form" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <input name="name" type="text" placeholder="Họ và tên" onChange={handleChange} required />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <input name="phone" type="text" placeholder="Số điện thoại" onChange={handleChange} required />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <div className={`nice-select form-control wide ${isOpen ? "open" : ""}`} tabIndex={0} onClick={() => setIsOpen(!isOpen)}>
                                                <span className="current">{selected}</span>
                                                <ul className="list">
                                                    <li data-value="" className="option selected" onClick={() => handleSelect("Chuyên khoa")}>
                                                        Chuyên khoa
                                                    </li>
                                                    {error ? (
                                                        <li className="option error">Lỗi: {error}</li>
                                                    ) : (
                                                        specialties.map((specialty) => (
                                                            <li key={specialty.id} data-value={specialty.id} className="option" onClick={() => handleSelect(specialty.name)}>
                                                                {specialty.name}
                                                            </li>
                                                        ))
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <div className={`nice-select form-control wide ${isOpenDoctor ? "open" : ""}`} tabIndex={0} onClick={() => setIsOpenDoctor(!isOpenDoctor)}>
                                                <span className="current">{selectedDoctor}</span>
                                                <ul className="list">
                                                    {filteredDoctors.length === 0 ? (
                                                        <li className="option">Không có bác sĩ</li>
                                                    ) : (
                                                        filteredDoctors.map((doctor) => (
                                                            <li key={doctor.id} data-value={doctor.id} className="option"
                                                                onClick={() => handleSelectDoctor(doctor.name)}>
                                                                {doctor.name}
                                                            </li>
                                                        ))
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <input name="date" type="date" placeholder="Date" onChange={handleChange} required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-12">
                                        <div className="form-group">
                                            <textarea
                                                name="message"
                                                placeholder="Nhập tin nhắn của bạn..."
                                                defaultValue={""}
                                                onChange={handleChange} required
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
