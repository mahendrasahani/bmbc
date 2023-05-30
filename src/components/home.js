import React from 'react';
import Navbar from './global-components/navbar';
import Banner from './section-components/banner-v3';
import SearchForm from './section-components/search-form';
// import ProductSlider from './section-components/product-slider-v3';
import Footer from './global-components/footer';
import WhyBmbc from './section-components/WhyBmbc';
import TestinomialNew from './section-components/TestinomialNew';

const Home = () => {
    return <div>
        <Navbar />
        <Banner />
        <SearchForm />
        {/* <ProductSlider /> */}
        <TestinomialNew />
        <WhyBmbc />
        <Footer />
    </div>
}

export default Home

