import React, { useState, useEffect } from "react";
import { Button, Form, Input, message, Select } from "antd";
import styled from "styled-components";
import adminService from "../../../common/adminService";
import { INDIA_STATES } from "./CityList";
import AuthGuard from "../authGuards";

const { Option } = Select;

const CreateLocationWrapper = styled.div`
  padding: 20px;

  .input-select {
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

  .ant-select-selection {
   border: none;
   height: 100%;
   width: 100%;
   align-items: center;
   display: grid;
  }

  .ant-select-arrow {
    display: none
  }
`;

const CreateLocationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const CreateLocationButton = styled(Button)`
  float: right;
`;

function CreateLocation(props) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields(async (err, values) => {
      if (!err) {
        setLoading(true);
        const createLocation = await adminService.addLocation(values);
        setLoading(false);
        if (createLocation.data.success === true) {
          message.success("Location Successfully Created");
          props.form.resetFields();
          props.history.push("/admin/location");
        } else {
          message.error("Error in creating location");
        }
      }
    });
  };

  const { getFieldDecorator } = props.form;
  return (
    <>
    <AuthGuard />
    <CreateLocationWrapper>
      <CreateLocationHeader>
        <h2>Create Location</h2>
        <CreateLocationButton onClick={() => props.history.push("/admin/location")}>
          Cancel
        </CreateLocationButton>
      </CreateLocationHeader>
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item label="Head Office">
          {getFieldDecorator("city", {
            rules: [{ required: true, message: "Please enter" }],
          })(<Input placeholder="Please enter" />)}
        </Form.Item>
        <Form.Item label="State">
          {getFieldDecorator("state", {
            rules: [{ required: true, message: "Please select state" }],
          })(
            <Select
              className="nice-select input-select"
              placeholder="Please select state"
              style={{
                width: "100%",
              }}
            >
              {INDIA_STATES &&
                    INDIA_STATES.map((d) => (
                      <Option value={d.name}>{d.name}</Option>
                    ))}
            </Select>
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
    </CreateLocationWrapper>
    </>
  );
}

export default Form.create()(CreateLocation);
