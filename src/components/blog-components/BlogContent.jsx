import React from 'react';
import Navbar from '../global-components/navbar';
import Footer from '../global-components/footer';
import PageHeader from '../global-components/page-header';
import BlogDetails from './blog-details';
import "../assets/css/blog.css";
const BlogContent = () =>
{
    return (
        <>
            <Navbar />
            <PageHeader subheader="Blog Details" />
            <BlogDetails />
            <Footer />
        </>
    )
}

export default BlogContent