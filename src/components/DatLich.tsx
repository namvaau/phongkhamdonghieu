import { useEffect, useState } from "react";
import section from "../assets/img/section-img.png";
import { BASE_URL, Doctor } from "../interface/InterfaceData";
import axios from "axios";

const DatLich = () => {
    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const [selectedDoctor, setSelectedDoctor] = useState("Bác sĩ");
    const [isOpenDoctor, setIsOpenDoctor] = useState(false);
    const [error, setError] = useState("");
    const validatePhone = (value: string) => {
        const regex = /^(\+84|0)(3|5|7|8|9)[0-9]{8}$/;
        return regex.test(value);
    };

    const handleSelectDoctor = (name: string) => {
        setSelectedDoctor(name);
        setIsOpenDoctor(false);
    };

    useEffect(() => {
        axios
            .get(`${BASE_URL}/doctors`)
            .then((response) => {
                setDoctors(response.data);
            })
            .catch((err) => {
                console.error("Lỗi khi lấy danh sách bác sĩ:", err);
            });
    }, []);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        doctor: selectedDoctor,
        date: "",
        message: "",
    });

    const formatDateToReadable = (datetimeStr: string): string => {
        const date = new Date(datetimeStr);

        const hh = date.getHours().toString().padStart(2, "0");
        const mm = date.getMinutes().toString().padStart(2, "0");
        const dd = date.getDate().toString().padStart(2, "0");
        const MM = (date.getMonth() + 1).toString().padStart(2, "0");
        const yyyy = date.getFullYear();

        return `${hh}:${mm} ${dd}/${MM}/${yyyy}`;
    };

    const now = new Date();
    const formattedNow = now.toISOString().slice(0, 16); // "YYYY-MM-DDTHH:mm"

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validatePhone(formData.phone)) {
            setError("Số điện thoại không hợp lệ. Vui lòng nhập lại.");
            return;
        } else {
            setError("");
        }
        const bookingTime = localStorage.getItem("bookingTime");
        const oneDay = 24 * 60 * 60 * 1000;

        if (bookingTime) {
            const diff = Date.now() - parseInt(bookingTime, 10);
            if (diff < oneDay) {
                alert("Bạn đã đặt lịch trong vòng 24 giờ. Vui lòng thử lại sau.");
                return;
            } else {
                localStorage.removeItem("bookingTime");
            }
        }
        try {

            const formattedDate = formData.date
                ? formatDateToReadable(formData.date)
                : "";

            const dataToSend = {
                ...formData,
                date: formattedDate,
            };

            const response = await fetch(`https://api.sheetbest.com/sheets/92f26a6d-2d28-4523-9f4f-5e27d640f753`, {
                method: "POST",
                mode: "cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dataToSend),
            });

            console.log("Response:", formData);
            if (response.ok) {
                alert("Đặt lịch thành công!");
                localStorage.setItem("bookingTime", Date.now().toString());
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
                                            <input name="phone" type="text" placeholder="Số điện thoại" onChange={handleChange} required />
                                            {error && <p style={{ color: "red", marginTop: "5px" }}>{error}</p>}
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <div className={`nice-select form-control wide ${isOpenDoctor ? "open" : ""}`} tabIndex={0} onClick={() => setIsOpenDoctor(!isOpenDoctor)}>
                                                <span className="current">{selectedDoctor}</span>
                                                <ul className="list">
                                                    {doctors.length === 0 ? (
                                                        <li className="option">Không có bác sĩ</li>
                                                    ) : (
                                                        doctors.map((doctor) => (
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
                                            <input
                                                name="date"
                                                type="datetime-local"
                                                placeholder="Chọn ngày giờ"
                                                onChange={handleChange}
                                                min={formattedNow}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-12">
                                        <div className="form-group">
                                            <textarea
                                                name="message"
                                                placeholder="Nhập tin nhắn của bạn..."
                                                defaultValue={""}
                                                onChange={handleChange}
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

export default DatLich;
