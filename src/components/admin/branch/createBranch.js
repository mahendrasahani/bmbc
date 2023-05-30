import React, { useState } from "react";
import { Button, Form, Input, message } from "antd";
import styled from "styled-components";
import adminService from "../../../common/adminService";
import AuthGuard from "../authGuards";

const CreateBranchWrapper = styled.div`
  padding: 20px;

  .input-field {
    background-color: var(--white);
    border: 2px solid;
    border-color: var(--border-color-9);
    height: 65px;
    -webkit-box-shadow: none;
    box-shadow: none;
    font-size: 16px;
    color: var(--ltn__paragraph-color);
    width: 100%;
    margin-bottom: 30px;
    border-radius: 0;
  }
`;

const CreateBranchHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const CreateBranchButton = styled(Button)`
  float: right;
`;

function CreateBranch(props) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields(async (err, values) => {
      if (!err) {
        setLoading(true);
        const createBranch = await adminService.addBranch(values);
        setLoading(false);
        if (createBranch.data.success === true) {
          message.success("Branch Successfully Created");
          props.form.resetFields();
          props.history.push("/admin/branch");
        } else {
          message.error("Error in creating branch");
        }
      }
    });
  };

  const { getFieldDecorator } = props.form;
  return (
    <>
    <AuthGuard />
    <CreateBranchWrapper>
      <CreateBranchHeader>
        <h2>Create Branch</h2>
        <CreateBranchButton onClick={() => props.history.push("/admin/branch")}>
          Cancel
        </CreateBranchButton>
      </CreateBranchHeader>
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item label="Branch">
          {getFieldDecorator("name", {
            rules: [{ required: true, message: "Please enter branch" }],
          })(
            <Input className="input-field" placeholder="Please enter branch" />
          )}
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
    </CreateBranchWrapper>
    </>
  );
}

export default Form.create()(CreateBranch);
