import React, { useState } from 'react'
import AuthGuard from '../authGuards'
import { Link } from "react-router-dom";
import TopNav from '../topnavComponent';
import { message } from 'antd';
import axios from 'axios';
const BlogPost = (props) =>
{
    const apiURL = process.env.REACT_APP_API_URL;
    // const adminToken = localStorage.getItem("adminToken");
    const [blogMessage, setBlogMessage] = useState({
        message: "",
        writtenBy: "Admin",
        heading: ""
    });


    const handlePostBlog = async (e) =>
    {
        e.preventDefault();
        const createBlog = await axios.post(apiURL + `blog/add`, blogMessage);
        if (createBlog.data.success === true)
        {
            message.success("Blog posted Successfully ");
            props.history.push("/admin/blog");
        } else
        {
            message.error("Error in posting blog");
        }
    }


    const handleInput = (e) =>
    {
        const { name, value } = e.target;
        setBlogMessage({
            ...blogMessage,
            [name]: value,
        });
    }

    return (
        <>
            <AuthGuard />
            <TopNav />
            <section className='blog_wrapper'>
                <div className='heading'>
                    <h2>
                        Post Blog
                    </h2>
                    <Link to="/admin/blog" className="btn">Cancel</Link>
                </div>

                <form className='blog_post_form' onSubmit={handlePostBlog}>
                    <input value={blogMessage.heading} onChange={handleInput}  className='form-control' placeholder='Enter blog heading*' name="heading"  />
                    <textarea value={blogMessage.message} onChange={handleInput}  placeholder='Enter your view thoughts etc...*' name="message" rows="8" cols="50" />
                    <button className='ant-btn sc-kPTPQs XDFxh ant-btn-primary mt-3' type='submit' >
                        Post
                    </button>
                </form>

            </section>
        </>
    )
}

export default BlogPost