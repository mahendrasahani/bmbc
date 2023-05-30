import React, { useEffect, useState } from 'react'
import AuthGuard from '../authGuards'
import TopNav from '../topnavComponent'
import axios from 'axios'
import { Message } from 'semantic-ui-react'
import { message } from 'antd'
import { Button, Modal } from 'react-bootstrap'
import { useParams } from "react-router-dom";
const BlogAllComment = () =>
{


    const { id } = useParams();
    const apiURL = process.env.REACT_APP_API_URL;
    const [blog, setBlog] = useState([]);
    const [blogDetail, setBlogDetail] = useState({})
    const [replyModal, setReplyModal] = useState(false);
    // REPLY MODAL FNC
    const handleReplyModal = () =>
    {
        setReplyModal(true)
    }
    const handleReplyModalClose = () =>
    {
        setReplyModal(false)
    }
    // UPDATE COMMENT STATE
    const [updateComment, setUpdateComment] = useState({
        comment: "",
        userName: "Admin",
    })

    const handleComment = (e) =>
    {
        const { name, value } = e.target;
        setUpdateComment({
            ...updateComment,
            [name]: value,
        });
    }
    // UPDATE COMMENT 
    const handleUpdateComment = async (commentId, blogId) =>
    {
        let comment = updateComment.comment;
        let userName = updateComment.userName;

        const postComment = await axios.put(apiURL + `blog/update-comment`, { comment, userName, commentId, blogId });
        if (postComment.data.success === true)
        {
            message.success("Comment updated Successfully ");
            setReplyModal(false)
            fetchBlog();

        } else
        {
            message.error("Error in updating comment");
        }
    }

    const handleDeleteComment = async (commentId, comment, userName, blogId) =>
    {
        const postComment = await axios.put(apiURL + `blog/remove-comment`, { commentId, comment, userName, blogId });
        if (postComment.data.success === true)
        {
            alert("Comment delete Successfully ");
            fetchBlog();
        } else
        {
            message.error("Error in delete comment");
        }
    }


    const fetchBlog = async () =>
    {
        const response = await axios.get(apiURL + `blog/id/${id}`)
        const data = response.data.data;
        setBlog(data.comments);
        setBlogDetail(data);
    };
    useEffect(() =>
    {
        fetchBlog();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <AuthGuard />
            <TopNav />
            <section className='comment_wrapper'>

                <div className='container-fluid'>
                    <h2 className='modal_heading'>
                        All Comment
                    </h2>
                    <div className='row'>
                        {
                            blog.map((index, id) =>
                            {
                                return (
                                    <div className='col-md-4' key={id} >
                                        <div className='blog_all_comment_card'>
                                            <div className='comment_card_head'>
                                                <h6>
                                                    {index.userName}
                                                </h6>
                                                <span>
                                                    {index.date}
                                                </span>
                                            </div>
                                            <p>
                                                {index.comment}
                                            </p>
                                            <div className='blog_all_comment_card_reply'>
                                                <Button className='btn' onClick={handleReplyModal}>
                                                    Edit
                                                </Button>
                                                <Button className='btn' onClick={() => handleDeleteComment(index._id, index.comment, index.userName, blogDetail._id)}>
                                                    Delete
                                                </Button>
                                                <Modal size="sm" centered show={replyModal} onHide={handleReplyModalClose}>
                                                    <Modal.Body>
                                                        <div className='blogs_d_comments-reply'>
                                                            <div>
                                                                <h6>
                                                                    {index.userName}
                                                                </h6>
                                                            </div>
                                                            <textarea value={updateComment.comment} onChange={handleComment} placeholder='Enter your view thoughts etc...' name="comment" rows="8" cols="50" />
                                                            <div className='d-flex justify-content-between mt-4'>
                                                                <button type="text" onClick={handleReplyModalClose} className='btn btn-danger'>
                                                                    Go Back
                                                                </button >
                                                                <button className='btn btn-primary' type='submit' onClick={() => handleUpdateComment(index._id, blogDetail._id)} >
                                                                    Update
                                                                </button>
                                                            </div>
                                                        </div>

                                                    </Modal.Body>
                                                </Modal>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogAllComment