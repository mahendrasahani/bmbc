import React, { useState, useEffect } from "react";
import { Button, Form, Input, message } from "antd";
import styled from "styled-components";
import adminService from "../../../common/adminService";
import { useParams } from "react-router-dom";
import AuthGuard from "../authGuards";

const EditBranchWrapper = styled.div`
  padding: 20px;
`;

const EditBranchHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const EditBranchButton = styled(Button)`
  float: right;
`;

function EditBranch(props) {
  const [loading, setLoading] = useState(false);
  const [branch, setBranch] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchBranch = async () => {
      const response = await adminService.getBranchDetailById(id);
      const data = response.data.data
      setBranch(data);
      props.form.setFieldsValue({...data})
    };
    fetchBranch();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields(async (err, values) => {
      if (!err) {
        setLoading(true);
        const updateBranch = await adminService.updateBranch(id, values);
        setLoading(false);
        if (updateBranch.data.success === true) {
          message.success("Branch Successfully Updated");
          props.history.push("/admin/branch");
        } else {
          message.error("Error in updating branch");
        }
      }
    });
  };

  const { getFieldDecorator } = props.form;
  return (
    <>
    <AuthGuard />
    <EditBranchWrapper>
      <EditBranchHeader>
        <h2>Edit Branch</h2>
        <EditBranchButton
          onClick={() => props.history.push("/admin/branch")}
        >
          Cancel
        </EditBranchButton>
      </EditBranchHeader>
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item label="Name">
          {getFieldDecorator("name", {
            initialValue: branch.name,
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
    </EditBranchWrapper>
    </>
  );
}

export default Form.create()(EditBranch);
