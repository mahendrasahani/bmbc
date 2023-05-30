import React, { useState, useEffect } from "react";
import { Button, Form, Input, message } from "antd";
import styled from "styled-components";
import adminService from "../../../common/adminService";
import { useParams } from "react-router-dom";
import AuthGuard from "../authGuards";

const EditCategoryWrapper = styled.div`
  padding: 20px;
`;

const EditCategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const EditCategoryButton = styled(Button)`
  float: right;
`;

function EditCategory(props) {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchCategory = async () => {
      const response = await adminService.getCategoryById(id);
      const data = response.data.data
      setCategory(data);
      props.form.setFieldsValue({...data})
    };
    fetchCategory();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields(async (err, values) => {
      if (!err) {
        setLoading(true);
        const updateCategory = await adminService.updateCategory(id, values);
        setLoading(false);
        if (updateCategory.data.success === true) {
          message.success("Category Successfully Updated");
          props.history.push("/admin/category");
        } else {
          message.error("Error in updating category");
        }
      }
    });
  };

  const { getFieldDecorator } = props.form;
  return (
    <>
    <AuthGuard />
    <EditCategoryWrapper>
      <EditCategoryHeader>
        <h2>Edit Category</h2>
        <EditCategoryButton
          onClick={() => props.history.push("/admin/category")}
        >
          Cancel
        </EditCategoryButton>
      </EditCategoryHeader>
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item label="Name">
          {getFieldDecorator("title", {
            initialValue: category.title,
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
            Update
          </Button>
        </Form.Item>
      </Form>
    </EditCategoryWrapper>
    </>
  );
}

export default Form.create()(EditCategory);
