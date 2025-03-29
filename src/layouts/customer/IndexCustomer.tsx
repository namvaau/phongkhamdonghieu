import Slider from '../../components/Slider'
import Schedule from '../../components/Schedule'
import Feautes from '../../components/Feautes'
import WhyChoose from '../../components/WhyChoose'
import Call from '../../components/Call'
import Portfolio from '../../components/Portfolio'
import Appointment from '../../components/Appointment'

import { useState } from 'react'
import { Link } from 'react-router-dom'
import HotNews from '../../components/HotNews'
import Facts from '../../components/Facts'
import Services from '../../components/Services'
import Device from '../../components/Device'

const IndexCustomer = () => {
    const [isActive, setIsActive] = useState(false);

    const handleGetProClick = () => {
        setIsActive(!isActive);
    };
    return (
        <>
            <ul className={`pro-features ${isActive ? "active" : ""}`}>
                <a className="get-pro" onClick={handleGetProClick}>
                    Liên Hệ
                </a>
                <li className="big-title">Phòng Khám Đa Khoa Đông Hiếu</li>
                <li className="title">Website đang trong quá trình phát triển</li>
                <div className="button">
                    <Link
                        to={'/news'}
                        className="btn"
                    >
                        Xem Tin Tức
                    </Link>
                    <Link
                        to={'/contact'}
                        className="btn"
                    >
                        Liên hệ
                    </Link>
                </div>
            </ul>

            <Slider />
            <Schedule />
            <Feautes />
            <WhyChoose />
            <Portfolio />
            {/* <DoctorUs/> */}
            <Services/>
            <Device/>
            <Call />
            <HotNews />
            <Facts />
            <Appointment />
        </>
    )
}

export default IndexCustomer