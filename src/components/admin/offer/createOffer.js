import React, { useState } from "react";
import { Button, Form, Input, message, Row, Col, DatePicker } from "antd";
import styled from "styled-components";
import adminService from "../../../common/adminService";
import AuthGuard from "../authGuards";

const CreateOfferWrapper = styled.div`
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

const CreateOfferHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const CreateOfferButton = styled(Button)`
  float: right;
`;

function CreateOffer(props) {
  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields(async (err, values) => {
      if (!err) {
        setLoading(true);
        const createOffer = await adminService.addOffer(values);
        setLoading(false);
        if (createOffer.data.success === true) {
          message.success("Offer Successfully Created");
          props.form.resetFields();
          props.history.push("/admin/offer");
        } else {
          message.error("Error in creating offer");
        }
      }
    });
  };

  const { getFieldDecorator } = props.form;
  return (
    <>
    <AuthGuard />
    <CreateOfferWrapper>
      <CreateOfferHeader>
        <h2>Create Offer</h2>
        <CreateOfferButton onClick={() => props.history.push("/admin/offer")}>
          Cancel
        </CreateOfferButton>
      </CreateOfferHeader>
      <Form onSubmit={handleSubmit} className="login-form">
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Offer Name">
              {getFieldDecorator("offerName", {
                rules: [{ required: true, message: "please enter" }],
              })(<Input placeholder="please enter" />)}
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="Code">
              {getFieldDecorator("code", {
                rules: [{ required: true, message: "please enter" }],
              })(<Input placeholder="please enter" />)}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Discount Percent">
              {getFieldDecorator("discountPercent", {
                rules: [{ required: true, message: "please enter" }],
              })(<Input placeholder="please enter" />)}
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="Start Date">
              {getFieldDecorator("startDate", {
                rules: [{ required: true, message: "please enter" }],
              })(
                <DatePicker
                  format={"DD-MM-YYYY"}
                  onChange={(date, dateString) => setStartDate(dateString)}
                  style={{ width: "100%" }}
                />
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="End Date">
              {getFieldDecorator("endDate", {
                rules: [{ required: true, message: "please enter" }],
              })(
                <DatePicker
                  format={"DD-MM-YYYY"}
                  onChange={(date, dateString) => setStartDate(dateString)}
                  style={{ width: "100%" }}
                />
              )}
            </Form.Item>
          </Col>
        </Row>
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
    </CreateOfferWrapper>
    </>
  );
}

export default Form.create()(CreateOffer);
