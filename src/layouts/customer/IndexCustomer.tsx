import Slider from '../../components/Slider'
import ThongTinDauTrang from '../../components/ThongTinDauTrang'
import NguyenTac from '../../components/NguyenTac'
import GioiThieu from '../../components/GioiThieu'
import Hotline from '../../components/Hotline'
import ChuyenKhoa from '../../components/ChuyenKhoa'
import DatLich from '../../components/DatLich'

import { useState } from 'react'
import TinMoi from '../../components/TinMoi'
import QuayTiepDon from '../../components/QuayTiepDon'
import ThietBi from '../../components/ThietBi'
import { FloatButton } from 'antd'
import { CommentOutlined, CustomerServiceOutlined, PhoneOutlined, SearchOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const IndexCustomer = () => {
    // const [isActive, setIsActive] = useState(false);
    const [open, setOpen] = useState<boolean>(false);
    const [classPulsate, setClassPulsate] = useState<string>("pulsate-fwd");

    // const handleGetProClick = () => {
    //     setIsActive(!isActive);
    // };

    const handleChecked = () => {
        setOpen(!open);
        setClassPulsate(classPulsate.length > 1 ? "" : "pulsate-fwd")
    }

    const [searchOpen, setSearchOpen] = useState(false);
    const navigate = useNavigate();
    const [input, setInput] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim() === "") return;
        navigate(`/tin-tuc?search=${encodeURIComponent(input.trim())}`);
    };


    return (
        <>
            <FloatButton
                style={{ insetBlockEnd: 104 }}
                icon={<SearchOutlined />}
                onClick={() => setSearchOpen(!searchOpen)}
            />
            <FloatButton.Group
                className={classPulsate}
                open={open}
                trigger="click"
                style={{ insetInlineEnd: 24 }}
                icon={<CustomerServiceOutlined />}
                onClick={handleChecked}
                type="primary"
            >
                <a href="https://m.me/165000667777288" target='_blank'><FloatButton icon={<CommentOutlined />} /></a>
                <a href="tel:0975161115"><FloatButton icon={<PhoneOutlined />} /></a>
            </FloatButton.Group>
            <FloatButton.BackTop
                style={{ insetInlineEnd: 88 }}
            />

            {/* <ul className={`pro-features ${isActive ? "active" : ""}`}>
                <li className="big-title">Phòng Khám Đa Khoa <br /> Đông Hiếu</li>
                <Input />
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


            </ul> */}
            {/* <div className="contact-icons">
                <a href="https://zalo.me/0975161115" target="_blank" rel="noopener noreferrer">
                    <img src={zalo} alt="Zalo" />
                </a>
                <a href="https://m.me/yourpage" target="_blank" rel="noopener noreferrer">
                    <img src={message} alt="Messenger" />
                </a>
                <a className='pulsate-fwd' href="tel:0975161115">
                    <img src={phone} alt="Gọi điện" />
                </a>
            </div> */}
            {/* Search Modal */}
            {searchOpen && (
                <div className="search show-search" id="search">
                    <div className="container__search__form">
                        <form onSubmit={handleSubmit} className="search__form">
                            <i className="icofont-search-1" onSubmit={handleSubmit}></i>
                            <input type="search" placeholder="Nội dung tìm kiếm" className="search__input" value={input}
                                onChange={(e) => setInput(e.target.value)} />
                            <button onClick={handleSubmit} className='btn'>Xem ngay</button>
                        </form>
                    </div>
                    <i className="icofont-close search__close" id="search-close" onClick={() => setSearchOpen(!searchOpen)}></i>
                </div>
            )}
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