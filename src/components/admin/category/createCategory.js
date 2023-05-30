import React, { useState } from "react";
import { Button, Form, Input, message } from "antd";
import styled from "styled-components";
import adminService from "../../../common/adminService";
import AuthGuard from "../authGuards";

const CreateCategoryWrapper = styled.div`
  padding: 20px;
`;

const CreateCategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const CreateCategoryButton = styled(Button)`
  float: right;
`;

function CreateCategory(props) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields(async (err, values) => {
      if (!err) {
        setLoading(true);
        const createCategory = await adminService.addCategory(values);
        setLoading(false);
        if (createCategory.data.success === true) {
          message.success("Category Successfully Created");
          props.form.resetFields();
          props.history.push("/admin/category");
        } else {
          message.error("Error in creating category");
        }
      }
    });
  };

  const { getFieldDecorator } = props.form;
  return (
    <>
    <AuthGuard />
    <CreateCategoryWrapper>
      <CreateCategoryHeader>
        <h2>Create Category</h2>
        <CreateCategoryButton
          onClick={() => props.history.push("/admin/category")}
        >
          Cancel
        </CreateCategoryButton>
      </CreateCategoryHeader>
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item label="Name">
          {getFieldDecorator("title", {
            rules: [{ required: true, message: "Please enter name" }],
          })(<Input placeholder="Please enter name" />)}
        </Form.Item>
        <Form.Item>
          <Button
            size="large"
            type="primary"
            htmlType="submit"
            loading={loading}
          >
            Create
          </Button>
        </Form.Item>
      </Form>
    </CreateCategoryWrapper>
    </>
  );
}

export default Form.create()(CreateCategory);
