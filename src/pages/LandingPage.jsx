import React from 'react'
import Carousel from "../components/landing page/Carousel"
import Events from "../components/landing page/Events"
import Donate from "../components/landing page/Donate"
import Ministries from "../components/landing page/Ministries"
import ContactUs from "../components/landing page/ContactUs"
import OurBlog from "../components/landing page/OurBlog"
import Footer from "../components/landing page/Footer"
import AboutUs from "../components/landing page/AboutUs"


function LandingPage() {
    return (
        <div>
            <Carousel />
            <Events />
            <AboutUs />
            <Donate />
            <Ministries />
            <ContactUs />
            <OurBlog />
            <Footer/>
        </div>
    )
}

export default LandingPage