import React, { useState, useEffect } from "react";
import { Button, Form, Input, message, Col, Row } from "antd";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import AuthGuard from "../authGuards";
import TopNav from "../topnavComponent";
import axios from "axios";
const { TextArea } = Input;
const EditInstituteWrapper = styled.div`
  padding: 20px;

  .input-select {
    background-color: var(--white);
    border: 2px solid;
    border-color: var(--border-color-9);
    height: 65px;
    -webkit-box-shadow: none;
    box-shadow: none;
    padding-left: 20px;
    font-size: 16px;
    color: var(--ltn__paragraph-color);
    width: 100%;
    margin-bottom: 30px;
    border-radius: 0;
    padding-right: 40px;
  }
`;

const EditInstituteHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const EditInstituteButton = styled(Button)`
  float: right;
`;

function EditBlog(props)
{
    const apiURL = process.env.REACT_APP_API_URL;
    const [loading, setLoading] = useState(false);
    const [blog, setBlog] = useState({});
    const { id } = useParams();

    useEffect(() =>
    {
        const fetchBlog = async () =>
        {
            const response = await axios.get(apiURL + `blog/id/${id}`)
            const data = response.data.data;
            setBlog(data);
            props.form.setFieldsValue({ ...data });
        };
        fetchBlog();
        // eslint-disable-next-line
    }, []);



    const handleSubmit = (e) =>
    {
        e.preventDefault();
        props.form.validateFields(async (err,values) =>
        {
            // const views = values.views
            if (!err)
            {
                setLoading(true);
                const updateBlog = await axios.put(apiURL + `/blog/view-increase/${id}`, {
                    views: values.views,
                
                })
                setLoading(false);
                if (updateBlog.data.success === true)
                {
                    message.success("Views Successfully Updated");
                    props.history.push("/admin/blog");
                } else
                {
                    message.error("Error in updating views");
                }
            }
        });
    };



    const { getFieldDecorator } = props.form;

    return (
        <>
            <AuthGuard />
            <TopNav />

            <EditInstituteWrapper>
                <EditInstituteHeader>
                    <h2>Edit Blog</h2>
                    <EditInstituteButton
                        onClick={() => props.history.push("/admin/blog")}
                    >
                        Cancel
                    </EditInstituteButton>
                </EditInstituteHeader>
                <Form onSubmit={handleSubmit} className="login-form">
                    <Row gutter={16}>
                        <Col>
                            <Form.Item label="Message">
                                {getFieldDecorator("message", {
                                    rules: [{ required: true, message: "please enter message " }],
                                })(<TextArea rows={8} placeholder="please enter message " />)}
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col xs={24} sm={12}>
                            <Form.Item label="Views">
                                {getFieldDecorator("views", {
                                    rules: [{ required: true, message: "Enter Custom Views" }],
                                })(<Input  placeholder="Views" />)}
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Form.Item>
                            <Button
                                size="large"
                                type="primary"
                                htmlType="submit"
                                loading={loading}
                            >
                                Update
                            </Button>
                        </Form.Item>
                    </Row>
                </Form>
            </EditInstituteWrapper>

        </>
    );
}

export default Form.create()(EditBlog);
