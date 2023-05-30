import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import HelpCenterForm from './section-components/help-center-form';
import Footer from './global-components/footer';

const HelpCenter = () => {
    return <div>
        <Navbar />
        <PageHeader  subheader="Help Center" />
        {/* <ContactInfo /> */}
        <HelpCenterForm />
        {/* <Map />
        <CallToActionV1 /> */}
        <Footer />
    </div>
}

export default HelpCenter

