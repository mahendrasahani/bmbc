import React, { useEffect, useState } from 'react'
import AuthGuard from '../authGuards'
import TopNav from '../topnavComponent'
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import "../../assets/admin/blog.css";
import { Button, Modal, Form } from 'react-bootstrap';
const BlogAllView = () =>
{
  const [comment, setComment] = useState({});
  const [show, setShow] = useState(false);



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const apiURL = process.env.REACT_APP_API_URL;
  const { id } = useParams();
  
  const handleComment = async () =>
  {
    const res = await axios.get(apiURL + `/blog/list`)
    try
    {
      setComment(res.data.data);
    } catch (error)
    {

    }
  }

  const handleReply = async () =>
  {
    await axios.post()
    try
    {

    } catch (error)
    {

    }
  }
  useEffect(() =>
  {
    handleComment()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <AuthGuard />
      <TopNav />
      <section className='blog_wrapper'>
        <div className='heading'>

          <Link to={`/admin/blogdetail/${id}`} className="ant-btn sc-kPTPQs XDFxh ant-btn-primary">Go Back</Link>

        </div>
        <div className='blogs_d_comments'>
          <h6>
            Rahul
          </h6>
          <p>
            I may be crazy but, the idea has been nagging me for some time that perhaps the biggest favor we could do for the African poor would be to kill off all that dangerous wild life.
          </p>
          <div className='blog_d_reply'>
            <Button className='ant-btn sc-kPTPQs XDFxh ant-btn-primary' style={{ marginRight: 2 }}>
              <Link to={`/admin/editblog/${id}`}>Edit</Link>
            </Button>
            <Button className='ant-btn sc-kPTPQs XDFxh ant-btn-info' onClick={handleShow}>
              Reply
            </Button>
          </div>

          <Modal centered show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body closeButton>
              I may be crazy but, the idea has been nagging me for some time that perhaps the biggest favor we could do for the African poor would be to kill off all that dangerous wild life.
              <Form onSubmit={handleReply}>
                <Form.Group className="mb-3" controlId="commentRepkly">
                  <Form.Control type="text" placeholder="Write your comment" />
                </Form.Group>
                <div className='d-flex justify-content-between'>
                  <Button variant="danger" className='py-1' onClick={handleClose}>
                    Back
                  </Button>
                  <Button variant="primary" className='py-1' type='submit'>
                    Reply
                  </Button>
                </div>
              </Form>
            </Modal.Body>
          </Modal>

        </div>



      </section>
    </>
  )
}

export default BlogAllView;