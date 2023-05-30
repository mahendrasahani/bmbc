import React from 'react'
import AuthGuard from '../authGuards'
import TopNav from '../topnavComponent'
import { Link } from "react-router-dom";
import "../../assets/admin/blog.css";
import BlogList from './BlogList';
const Blog = () =>
{
  return (
    <>
      <AuthGuard />
      <TopNav />
      <section className='blog_wrapper'>
        <div className='heading'>
          <h2>
            Blogs
          </h2>
          <Link to="/admin/addBlog" className="ant-btn sc-kPTPQs XDFxh ant-btn-primary">Post Blog</Link>
        </div>
        <BlogList />
      </section>
    </>
  )
}

export default Blog