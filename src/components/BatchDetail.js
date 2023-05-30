import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Footer from './global-components/footer';
import ServiceDetailForm from './section-components/ServiceDetail';

const BatchDetail = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Batch Details" />
        <ServiceDetailForm />
        <Footer />
    </div>
}

export default BatchDetail

