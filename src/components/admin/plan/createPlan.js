import React, { useState } from "react";
import { Button, Form, Input, message } from "antd";
import styled from "styled-components";
import adminService from "../../../common/adminService";
import AuthGuard from "../authGuards";

const CreatePlanWrapper = styled.div`
  padding: 20px;
`;

const CreatePlanHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const CreatePlanButton = styled(Button)`
  float: right;
`;

function CreatePlan(props) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields(async (err, values) => {
      if (!err) {
        setLoading(true);
        const createPlan = await adminService.addPlan(values);
        setLoading(false);
        if (createPlan.data.success === true) {
          message.success("Plan Successfully Created");
          props.form.resetFields();
          props.history.push("/admin/plan");
        } else {
          message.error("Error in creating plan");
        }
      }
    });
  };

  const { getFieldDecorator } = props.form;
  return (
    <>
    <AuthGuard />
    <CreatePlanWrapper>
      <CreatePlanHeader>
        <h2>Create Plan</h2>
        <CreatePlanButton onClick={() => props.history.push("/admin/plan")}>
          Cancel
        </CreatePlanButton>
      </CreatePlanHeader>
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
    </CreatePlanWrapper>
    </>
  );
}

export default Form.create()(CreatePlan);
