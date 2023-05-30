import React, { useState } from "react";
import {
  Button,
  Col,
  Form,
  Input,
  Row,
  message,
  Spin,
  InputNumber,
} from "antd";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import adminService from "../../../common/adminService";
import AuthGuard from "../authGuards";

const UserCreateWrapper = styled.div`
  padding: 20px;
`;

const UserCreateHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const UserCreateButton = styled(Button)`
  float: right;
`;

function CreateUser(props) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields(async (err, values) => {
      if (!err) {
        setLoading(true);
        const createUser = await adminService.addUser(values);
        setLoading(false);
        if (createUser.data.message == "Created success!") {
          message.success("User Successfully Created");
          props.history.push("/admin/user");
        }
      }
    });
  };

  const { getFieldDecorator } = props.form;
  return (
    <>
    <AuthGuard />
    <UserCreateWrapper>
      <UserCreateHeader>
        <h2>Create User</h2>
        <UserCreateButton onClick={() => props.history.push("/admin/user")}>
          Cancel
        </UserCreateButton>
      </UserCreateHeader>
      <Spin spinning={loading}>
        <Form onSubmit={handleSubmit} className="login-form">
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item label="Name">
                {getFieldDecorator("name", {
                  rules: [{ required: true, message: "please enter name" }],
                })(<Input placeholder="please enter name" />)}
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="Email">
                {getFieldDecorator("email", {
                  rules: [{ required: true, message: "please enter name" }],
                })(<Input placeholder="please enter name" />)}
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item label="Password">
                {getFieldDecorator("password", {
                  rules: [{ required: true, message: "please enter password" }],
                })(<Input.Password placeholder="please enter password" />)}
              </Form.Item>
            </Col>

            <Col xs={24} sm={12}>
              <Form.Item label="Qualification">
                {getFieldDecorator("qualification", {
                  rules: [
                    { required: true, message: "please enter qualification" },
                  ],
                })(<Input placeholder="please enter qualification" />)}
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item label="Phone">
                {getFieldDecorator("phone", {
                  rules: [{ required: true, message: "please enter phone" }],
                })(
                  <Input
                    style={{ width: "100%" }}
                    placeholder="please enter phone"
                  />
                )}
              </Form.Item>
            </Col>

            <Col xs={24} sm={12}>
              <Form.Item label="City">
                {getFieldDecorator("city", {
                  rules: [{ required: true, message: "please enter city" }],
                })(<Input placeholder="please enter city" />)}
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={24}>
              <Form.Item label="Address">
                {getFieldDecorator("address", {
                  rules: [{ required: true, message: "please enter address" }],
                })(<Input placeholder="please enter address" />)}
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
              <Form.Item>
                <Button size="large" type="primary" htmlType="submit">
                  Create
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Spin>
    </UserCreateWrapper>
    </>
  );
}

export default withRouter(Form.create()(CreateUser));
