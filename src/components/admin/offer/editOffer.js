import React, { useState, useEffect } from "react";
import { Button, Form, Input, message, Row, Col, DatePicker } from "antd";
import styled from "styled-components";
import adminService from "../../../common/adminService";
import { useParams } from "react-router-dom";
import moment from "moment";
import AuthGuard from "../authGuards";

const EditOfferWrapper = styled.div`
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

const EditOfferHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const EditOfferButton = styled(Button)`
  float: right;
`;

function EditOffer(props) {
  const [loading, setLoading] = useState(false);
  const [offer, setOffer] = useState({});
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchOffer = async () => {
      const response = await adminService.getOfferById(id);
      const data = response.data.data;
      setOffer(data);
      data.startDate = moment(data.startDate)
      data.endDate = moment(data.endDate)
      props.form.setFieldsValue({ ...data });
    };
    fetchOffer();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields(async (err, values) => {
      if (!err) {
        setLoading(true);
        const updateOffer = await adminService.updateOffer(id, values);
        setLoading(false);
        if (updateOffer.data.success === true) {
          message.success("Offer Successfully Updated");
          props.history.push("/admin/offer");
        } else {
          message.error("Error in updating offer");
        }
      }
    });
  };

  const { getFieldDecorator } = props.form;
  return (
    <>
    <AuthGuard />
    <EditOfferWrapper>
      <EditOfferHeader>
        <h2>Edit Offer</h2>
        <EditOfferButton onClick={() => props.history.push("/admin/offer")}>
          Cancel
        </EditOfferButton>
      </EditOfferHeader>
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
            Update
          </Button>
        </Form.Item>
      </Form>
    </EditOfferWrapper>
    </>
  );
}

export default Form.create()(EditOffer);
