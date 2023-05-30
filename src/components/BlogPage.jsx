import React from 'react';
import Footer from './global-components/footer';
import PageHeader from './global-components/page-header';
import Blog from './blog-components/blog';
import Navbar from './global-components/navbar';
const BlogPage = () =>
{
    return (
        <>
            <Navbar />
            <PageHeader subheader="Blog" />
            <Blog />
            <Footer />
        </>
    )
}

export default BlogPage