import Breadcrumbs from "../../components/Breadcrumbs";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, Doctor } from "../../interface/InterfaceData";
import Preloader from "../../components/Preloader";


// const doctors = [
//   {
//     name: "BS.ĐK. Nguyễn Nam Đình",
//     specialty: "KCB Nội Khoa",
//     image: imgNguyenVy,
//     experience: 3,
//     description: "Thời gian đăng kí làm việc tại cơ sở KCB: Sáng 6h30-11h30, Chiều 13h30-17h30, Từ Thứ 2 - Thứ 7 hàng tuần"
//   },
//   {
//     name: "BS.CKI. Chu Tiến Dũng",
//     specialty: "KCB Ngoại Khoa",
//     image: imgNguyenVy,
//     experience: 3,
//     description: "Thời gian đăng kí làm việc tại cơ sở KCB: Sáng 6h30-11h30, Chiều 13h30-17h30, Từ Thứ 2 - Thứ 7 hàng tuần"
//   },
//   {
//     name: "BS.ĐK. Hoàng Minh Tân",
//     specialty: "KCB Nội Khoa",
//     image: imgNguyenVy,
//     experience: 3,
//     description: "Thời gian đăng kí làm việc tại cơ sở KCB: Sáng 6h30-11h30, Chiều 13h30-17h30, Từ Thứ 2 - Thứ 7 hàng tuần"
//   },
//   {
//     name: "BS.SPK Lô Văn Kiều",
//     specialty: "CKB Sản - Siêu Âm",
//     image: imgNguyenVy,
//     experience: 3,
//     description: "Thời gian đăng kí làm việc tại cơ sở KCB: Sáng 6h30-11h30, Chiều 13h30-17h30, Từ Thứ 2 - Thứ 7 hàng tuần"
//   },
//   {
//     name: "BS.YHCT Nguyễn Hữu Mân",
//     specialty: "CKB bằng Y Học Cổ Truyền",
//     image: imgNguyenVy,
//     experience: 3,
//     description: "Thời gian đăng kí làm việc tại cơ sở KCB: Sáng 6h30-11h30, Chiều 13h30-17h30, Từ Thứ 2 - Thứ 7 hàng tuần"
//   },
//   {
//     name: "BS.ĐK Lương Thị Tâm",
//     specialty: "CKB Nội Khoa",
//     image: imgNguyenVy,
//     experience: 3,
//     description: "Thời gian đăng kí làm việc tại cơ sở KCB: Sáng 6h30-11h30, Chiều 13h30-17h30, Từ Thứ 2 - Thứ 7 hàng tuần"
//   },
//   {
//     name: "BS.CK.CĐHA Lê Quốc Trung",
//     specialty: "P. CĐHA",
//     image: imgNguyenVy,
//     experience: 3,
//     description: "Thời gian đăng kí làm việc tại cơ sở KCB: Sáng 6h30-11h30, Chiều 13h30-17h30, Từ Thứ 2 - Thứ 7 hàng tuần"
//   },
// ];

const CacBacSy = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/doctors`);
        setDoctors(response.data);
      } catch (err) {
        console.error("Lỗi khi tải tin tức:", err);
        setError(err instanceof Error ? err.message : "Lỗi không xác định");
      } finally {
        setLoading(false); // Ẩn Preloader dù thành công hay lỗi
      }
    };

    fetchDoctors();
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
      <Breadcrumbs title="Bác Sĩ của chúng tôi" />
      <section className="doctors">
        <div className="container">
          <div className="doctors-grid">
            {doctors.map((doctor) => (
              <div className="doctor-card" key={doctor.id}>
                <div className="doctor-content">
                  <img src={doctor.imageUrl} alt={doctor.name} />
                  <div className="doctor-overlay">
                    <h5>{doctor.name}</h5>
                    <p>{doctor.description}</p>
                  </div>
                </div>
                <div className="doctor-info">
                  <h6>{doctor.name}</h6>
                  <p>{doctor.speciality}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </>
  );
};

export default CacBacSy;
