import Breadcrumbs from "../../components/Breadcrumbs";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, Doctor } from "../../interface/InterfaceData";


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

const Doctors = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [error, setError] = useState(null);
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
  return (
    <>
      <Breadcrumbs title="Bác Sĩ của chúng tôi" />
      <section className="doctors">
        <div className="container">
          {error}
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

export default Doctors;
