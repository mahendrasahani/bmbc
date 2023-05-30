import React, { useState, useEffect } from "react";
import { Button, Form, Input, message } from "antd";
import styled from "styled-components";
import adminService from "../../../common/adminService";
import { useParams } from "react-router-dom";
import AuthGuard from "../authGuards";

const EditPlanWrapper = styled.div`
  padding: 20px;
`;

const EditPlanHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const EditPlanButton = styled(Button)`
  float: right;
`;

function EditPlan(props) {
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchPlan = async () => {
      const response = await adminService.getPlanById(id);
      const data = response.data.data
      setPlan(data);
      props.form.setFieldsValue({...data})
    };
    fetchPlan();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields(async (err, values) => {
      if (!err) {
        setLoading(true);
        const updatePlan = await adminService.updatePlan(id, values);
        setLoading(false);
        if (updatePlan.data.success === true) {
          message.success("Plan Successfully Updated");
          props.history.push("/admin/plan");
        } else {
          message.error("Error in updating plan");
        }
      }
    });
  };

  const { getFieldDecorator } = props.form;
  return (
    <>
    <AuthGuard />
    <EditPlanWrapper>
      <EditPlanHeader>
        <h2>Edit Plan</h2>
        <EditPlanButton
          onClick={() => props.history.push("/admin/plan")}
        >
          Cancel
        </EditPlanButton>
      </EditPlanHeader>
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item label="Name">
          {getFieldDecorator("title", {
            initialValue: plan.title,
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
    </EditPlanWrapper>
    </>
  );
}

export default Form.create()(EditPlan);
