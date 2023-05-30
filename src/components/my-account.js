import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import MyAccount from './shop-components/my-account';
import Footer from './global-components/footer';

const MyaccountV1 = () => {
    return <div>
        <Navbar />
        <PageHeader subheader="My Account" />
        <MyAccount />
        <Footer />
    </div>
}

export default MyaccountV1

