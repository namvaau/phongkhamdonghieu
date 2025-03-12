import React from 'react'
import Preloader from '../../components/Preloader'
import Header from '../../components/Header'
import Slider from '../../components/Slider'
import Schedule from '../../components/Schedule'
import Feautes from '../../components/Feautes'
import Facts from '../../components/Facts'
import WhyChoose from '../../components/WhyChoose'
import Call from '../../components/Call'
import Portfolio from '../../components/Portfolio'
import Services from '../../components/Services'
import Blogs from '../../components/Blogs'
import Appointment from '../../components/Appointment'

const IndexCustomer = () => {
    return (
        <>
            <Slider />
            <Schedule/>
            <Feautes/>
            <Facts/>
            <WhyChoose/>
            <Call/>
            <Portfolio/>
            <Services/>
            <Blogs/>
            <Appointment/>
        </>
    )
}

export default IndexCustomer