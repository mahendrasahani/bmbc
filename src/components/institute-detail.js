import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import ProductDetails from './shop-components/shop-details';
import Footer from './global-components/footer';

const Institute_Detail = () =>
{
    return <div>
        <Navbar />
        <PageHeader customclass="mb-0" subheader="Institute Details" />
        {/* <ProductSlider /> */}
        <ProductDetails />
        {/* <CallToActionV1 /> */}
        <Footer />
    </div>
}

export default Institute_Detail

