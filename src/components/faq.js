import React from 'react';
import PageHeader from './global-components/page-header';
import Faq from './section-components/faq-v1';
import Footer from './global-components/footer';
import Navbar from './global-components/navbar';

const FaqV1 = () => {
    return <div>
        <Navbar />
        <PageHeader subheader="FAQ" />
        <Faq />
        {/* <Counter />
        <BlogSlider sectionClass="pt-120" />
        <CallToActionV1 /> */}
        <Footer />
    </div>
}

export default FaqV1

