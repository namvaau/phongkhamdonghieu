import Slider from '../../components/Slider'
import ThongTinDauTrang from '../../components/ThongTinDauTrang'
import NguyenTac from '../../components/NguyenTac'
// import GioiThieu from '../../components/GioiThieu'
import Hotline from '../../components/Hotline'
import ChuyenKhoa from '../../components/ChuyenKhoa'
import DatLich from '../../components/DatLich'

import { useEffect } from 'react'
import TinMoi from '../../components/TinMoi'
import QuayTiepDon from '../../components/QuayTiepDon'
import ThietBi from '../../components/ThietBi'
import AOS from 'aos';
import 'aos/dist/aos.css';

const IndexCustomer = () => {
    useEffect(() => {
        AOS.init({ duration: 600, once: true }); // duration là thời gian animation
    }, []);
   


    return (
        <>
            <Slider />
            <ThongTinDauTrang />
            <div data-aos="fade-up"><NguyenTac /></div>
            <div data-aos="fade-up"><QuayTiepDon /></div>
            <div data-aos="fade-up"><ChuyenKhoa /></div>
            <div data-aos="fade-up"><ThietBi /></div>
            <div data-aos="fade-up"><Hotline /></div>
            <div data-aos="fade-up"><TinMoi /></div>
            <div data-aos="fade-up"><DatLich /></div>
        </>
    )
}

export default IndexCustomer