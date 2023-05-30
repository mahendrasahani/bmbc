import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom";
import AuthGuard from '../authGuards';
import TopNav from '../topnavComponent';
import { Modal } from 'react-bootstrap';
import { message } from 'antd';
const BlogDetail = (props) =>
{
    const apiURL = process.env.REACT_APP_API_URL;
    const [blogDetail, setBlogDetail] = useState({})
    const [show, setShow] = useState(false);
    const [blogLength, setBlogLength] = useState(0)
    // FTECH BLOGS
    const fetchBlog = async () =>
    {
        const response = await axios.get(apiURL + `blog/id/${id}`)
        const data = response.data.data;
        setBlogDetail(data);
        const blogCmt = data.comments
        const cmtLength = blogCmt.length
        setBlogLength(cmtLength)

    };



    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);


    const { id } = useParams();

    const [blogMessage, setBlogMessage] = useState({
        comment: "",
        userName: "Admin",
    });


    const handlePostBlog = async (blogId) =>
    {
        console.log(blogId);
        const comment = blogMessage.comment
        const userName = blogMessage.userName
        const postComment = await axios.put(apiURL + `blog/add-comment`, { blogId,comment,userName});
        if (postComment.data.success === true)
        {
            message.success("Comment posted Successfully ");
            setShow(false);
            fetchBlog()
        } else
        {
            message.error("Error in posting comment");
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



    useEffect(() =>
    {

        fetchBlog();
        // eslint-disable-next-line
    }, []);


    return (
        <>
            <AuthGuard />
            <TopNav />
            <section className='blog_wrapper'>
                <div className='container'>
                    <div className="blog_d">
                        <div className='blog_d_heading'>
                            <h2>
                                Admin
                            </h2>
                            <p>
                                {blogDetail.message}
                            </p>
                        </div>
                        <div className='blog_d_footer'>
                            <ul>
                                <li>
                                    <p>
                                        <i className="far fa-eye"></i>{blogDetail.views}Views
                                    </p>
                                </li>
                                <li>
                                    <Link className='post_comm' to={`/admin/blogComment/${blogDetail._id}`}>
                                        <i className="far fa-comments"></i>{blogLength} Comments
                                    </Link>

                                </li>
                                <li>
                                    <button className='post_comm' onClick={handleShow}>
                                        <i className="far fa-comment"></i>Leave Comment
                                    </button>
                                    <Modal centered show={show} onHide={handleClose}>
                                        <Modal.Header style={{fontSize:'14px'}} closeButton>
                                            Write a comment
                                        </Modal.Header>
                                        <Modal.Body>
                                            <textarea value={blogMessage.comment} onChange={handleInput} placeholder='Enter your view etc...' name="comment" rows="8" cols="50" />
                                            <button className='ant-btn sc-kPTPQs XDFxh ant-btn-primary mt-3' type='button' onClick={() => handlePostBlog(blogDetail._id)} >
                                                Post
                                            </button>

                                        </Modal.Body>

                                    </Modal>
                                </li>
                            </ul>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogDetail