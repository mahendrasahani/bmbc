import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import AboutV4 from './section-components/about-v4';
import Footer from './global-components/footer';
const About_v1 = () =>
{
    return <div>
        <Navbar />
        <PageHeader subheader="Why BMBC" />
        <AboutV4 />
        <Footer />
    </div>
}

export default About_v1

