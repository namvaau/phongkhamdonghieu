import React from "react";

const WelcomeSection: React.FC = () => {
    return (
        <div className="welcome-container">
            <h1 className="main-title">Chào mừng đến với Phòng khám Đông Hiếu</h1>
            <h2 className="sub-title">
                Y Đức Tạo Niềm Tin
            </h2>
            <p className="content">
                Phòng khám Đông Hiếu cam kết mang đến dịch vụ y tế chất lượng cao với đội ngũ bác sĩ giàu kinh nghiệm.
                Chúng tôi không ngừng cải tiến và phát triển nhằm phục vụ tốt nhất cho sức khỏe của bệnh nhân.
                Với hệ thống trang thiết bị hiện đại cùng quy trình khám chữa bệnh chuyên nghiệp,
                Phòng khám Đông Hiếu tự hào là địa chỉ tin cậy để chăm sóc sức khỏe của bạn và gia đình.
            </p>
            <h2 className="sub-title">Tầm nhìn</h2>
            <p className="content">
                Trở thành phòng khám hàng đầu trong lĩnh vực chăm sóc sức khỏe,
                đem đến sự an tâm và chất lượng dịch vụ tốt nhất cho người dân.
            </p>

        </div>
    );
};

export default WelcomeSection;
