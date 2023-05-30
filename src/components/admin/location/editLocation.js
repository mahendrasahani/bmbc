import React, { useState, useEffect } from "react";
import { Button, Form, Select, message, Input } from "antd";
import styled from "styled-components";
import adminService from "../../../common/adminService";
import { useParams } from "react-router-dom";
import { INDIA_STATES } from "./CityList";
import AuthGuard from "../authGuards";

const { Option } = Select;

const EditLocationWrapper = styled.div`
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
    display: none;
  }
`;

const EditLocationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const EditLocationButton = styled(Button)`
  float: right;
`;

function EditLocation(props) {
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchLocation = async () => {
      const response = await adminService.getLocationById(id);
      const data = response.data.data;
      setLocation(data);
      props.form.setFieldsValue({ ...data });
    };
    fetchLocation();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields(async (err, values) => {
      if (!err) {
        setLoading(true);
        const updateLocation = await adminService.updateLocation(id, values);
        setLoading(false);
        if (updateLocation.data.success === true) {
          message.success("Location Successfully Updated");
          props.history.push("/admin/location");
        } else {
          message.error("Error in updating location");
        }
      }
    });
  };

  const { getFieldDecorator } = props.form;
  return (
    <>
    <AuthGuard />
    <EditLocationWrapper>
      <EditLocationHeader>
        <h2>Edit Location</h2>
        <EditLocationButton
          onClick={() => props.history.push("/admin/location")}
        >
          Cancel
        </EditLocationButton>
      </EditLocationHeader>
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
            Update
          </Button>
        </Form.Item>
      </Form>
    </EditLocationWrapper>
    </>
  );
}

export default Form.create()(EditLocation);
