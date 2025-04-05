import Slider from '../../components/Slider'
import ThongTinDauTrang from '../../components/ThongTinDauTrang'
import NguyenTac from '../../components/NguyenTac'
import GioiThieu from '../../components/GioiThieu'
import Hotline from '../../components/Hotline'
import ChuyenKhoa from '../../components/ChuyenKhoa'
import DatLich from '../../components/DatLich'

import { useState } from 'react'
import { Link } from 'react-router-dom'
import TinMoi from '../../components/TinMoi'
import QuayTiepDon from '../../components/QuayTiepDon'
import ThietBi from '../../components/ThietBi'
import ContactIcons from '../../components/ContactIcons'
import Input from '../../components/Input'

const IndexCustomer = () => {
    const [isActive, setIsActive] = useState(false);

    const handleGetProClick = () => {
        setIsActive(!isActive);
    };
    return (
        <>
            <ContactIcons />
            <ul className={`pro-features ${isActive ? "active" : ""}`}>
                <a className="get-pro" onClick={handleGetProClick}>
                    Tìm kiếm
                </a>
                <li className="big-title">Phòng Khám Đa Khoa <br /> Đông Hiếu</li>
                <Input/>
                <div className="button">
                    <Link
                        to={'/tin-tuc'}
                        className="btn"
                    >
                        Xem Tin Tức
                    </Link>
                    <Link
                        to={'/lien-he'}
                        className="btn"
                    >
                        Liên hệ
                    </Link>
                </div>
            </ul>

            <Slider />
            <ThongTinDauTrang />
            <NguyenTac />
            <GioiThieu />
            <ChuyenKhoa />
            {/* <DoctorUs/> */}
            <QuayTiepDon />
            <ThietBi />
            <Hotline />
            <TinMoi />
            {/* <ThongTin /> */}
            <DatLich />
        </>
    )
}

export default IndexCustomer