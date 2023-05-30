import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import ContactInfo from './section-components/contact-info';
import Footer from './global-components/footer';
import ContactUsForm from './section-components/ContactUsForm';
// import ContactForm from './section-components/contact-form';

const ContactV1 = () => {
    return <div>
        <Navbar />
        <PageHeader subheader="Contact" />
        <ContactInfo />
        <ContactUsForm />
        <Footer />
    </div>
}

export default ContactV1

