import React from "react";
import { Form, Input, Button, message } from "antd";
import styled from "styled-components";
import "antd/dist/antd.css";
import adminService from "../../common/adminService";
import { useHistory } from "react-router-dom";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f6ff;
`;

const LoginForm = styled(Form)`
  width: 320px;
  padding: 32px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h1 {
    color: #2a2d34;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 24px;
    text-align: center;
  }

  .login-form-item {
    margin-bottom: 16px;

    label {
      font-size: 16px;
      font-weight: bold;
      color: #2a2d34;
      margin-bottom: 8px;
    }

    input {
      height: 48px;
      font-size: 16px;
      border-radius: 8px;
      border: none;
      background-color: #f2f2f2;
      padding: 0 16px;

      &:focus {
        outline: none;
        box-shadow: 0 0 4px #1890ff;
      }
    }
  }

  .login-form-button {
    width: 100%;
    height: 48px;
    margin-top: 32px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    background-color: #1890ff;
    border: none;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      background-color: #40a9ff;
    }
  }

  .ant-input-suffix {
    display: none;
  }
`;

export default function AdminSignin() {
  const history = useHistory();

  const onFinish = async (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    if (!email || !password) {
      message.warn("Please enter both email and password");
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      message.warn("Please enter a valid email address");
      return;
    }

    const adminSignin = await adminService.adminLogin(email, password)
    const data = adminSignin.data
    console.log(data)
    if(data.success == false){
      message.error(data.msg)
    } else if (data.success == true){
      localStorage.setItem('adminToken', data.data.token)
      message.success(data.msg)
      history.push("/admin/dashboard");
    }
  };

  return (
    <LoginContainer>
      <LoginForm name="login-form" onSubmit={onFinish}>
        <h1>Login</h1>
        <Form.Item
          name="email"
          className="login-form-item"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input value={'admin@gmail.com'} placeholder="Email" name="email" />
        </Form.Item>
        <Form.Item
          name="password"
          className="login-form-item"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password value={'password'} placeholder="Password" name="password" />
        </Form.Item>
        <Form.Item>
          <Button
            className="login-form-button"
            type="primary"
            htmlType="submit"
            block
          >
            Login
          </Button>
        </Form.Item>
      </LoginForm>
    </LoginContainer>
  );
}
