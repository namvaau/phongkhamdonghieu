import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import imgNguyenVy from "../../assets/img/bs-nguyen-vy-1.webp";


const doctors = [
  {
    name: "BS.ĐK. Nguyễn Nam Đình",
    specialty: "KCB Nội Khoa",
    image: imgNguyenVy,
    experience: 3,
    description: "Thời gian đăng kí làm việc tại cơ sở KCB: Sáng 6h30-11h30, Chiều 13h30-17h30, Từ Thứ 2 - Thứ 7 hàng tuần"
  },
  {
    name: "BS.CKI. Chu Tiến Dũng",
    specialty: "KCB Ngoại Khoa",
    image: imgNguyenVy,
    experience: 3,
    description: "Thời gian đăng kí làm việc tại cơ sở KCB: Sáng 6h30-11h30, Chiều 13h30-17h30, Từ Thứ 2 - Thứ 7 hàng tuần"
  },
  {
    name: "BS.ĐK. Hoàng Minh Tân",
    specialty: "KCB Nội Khoa",
    image: imgNguyenVy,
    experience: 3,
    description: "Thời gian đăng kí làm việc tại cơ sở KCB: Sáng 6h30-11h30, Chiều 13h30-17h30, Từ Thứ 2 - Thứ 7 hàng tuần"
  },
  {
    name: "BS.SPK Lô Văn Kiều",
    specialty: "CKB Sản - Siêu Âm",
    image: imgNguyenVy,
    experience: 3,
    description: "Thời gian đăng kí làm việc tại cơ sở KCB: Sáng 6h30-11h30, Chiều 13h30-17h30, Từ Thứ 2 - Thứ 7 hàng tuần"
  },
  {
    name: "BS.YHCT Nguyễn Hữu Mân",
    specialty: "CKB bằng Y Học Cổ Truyền",
    image: imgNguyenVy,
    experience: 3,
    description: "Thời gian đăng kí làm việc tại cơ sở KCB: Sáng 6h30-11h30, Chiều 13h30-17h30, Từ Thứ 2 - Thứ 7 hàng tuần"
  },
  {
    name: "BS.ĐK Lương Thị Tâm",
    specialty: "CKB Nội Khoa",
    image: imgNguyenVy,
    experience: 3,
    description: "Thời gian đăng kí làm việc tại cơ sở KCB: Sáng 6h30-11h30, Chiều 13h30-17h30, Từ Thứ 2 - Thứ 7 hàng tuần"
  },
  {
    name: "BS.CK.CĐHA Lê Quốc Trung",
    specialty: "P. CĐHA",
    image: imgNguyenVy,
    experience: 3,
    description: "Thời gian đăng kí làm việc tại cơ sở KCB: Sáng 6h30-11h30, Chiều 13h30-17h30, Từ Thứ 2 - Thứ 7 hàng tuần"
  },
];

const Doctors = () => {
  return (
    <>
      <Breadcrumbs title="Bác Sĩ của chúng tôi" />
      <section className="doctors">
        <div className="container">
          <div className="doctors-grid">
            {doctors.map((doctor, index) => (
              <div className="doctor-card" key={index}>
                <div className="doctor-content">
                  <img src={doctor.image} alt={doctor.name} />
                  <div className="doctor-overlay">
                    <h5>{doctor.name}</h5>
                    <p>{doctor.specialty}</p>
                    <p>{doctor.description}</p>
                  </div>
                </div>
                <div className="doctor-info">
                  <h6>{doctor.name}</h6>
                  <p>{doctor.specialty}</p>
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
