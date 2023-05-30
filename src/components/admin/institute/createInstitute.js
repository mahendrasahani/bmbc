import React, { useState, useEffect } from "react";
import {
  Button,
  Col,
  Form,
  Input,
  Row,
  message,
  Spin,
  Select,
  Upload,
} from "antd";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import adminService from "../../../common/adminService";
import { UploadOutline } from "@ant-design/icons";
import AuthGuard from "../authGuards";

const InstituteCreateWrapper = styled.div`
  padding: 20px;

  .input-select {
    background-color: var(--white);
    border: 2px solid;
    border-color: var(--border-color-9);
    height: 65px;
    -webkit-box-shadow: none;
    box-shadow: none;
    padding-left: 20px;
    font-size: 16px;
    color: var(--ltn__paragraph-color);
    width: 100%;
    margin-bottom: 30px;
    border-radius: 0;
    padding-right: 40px;
  }
`;

const InstituteCreateHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const InstituteCreateButton = styled(Button)`
  float: right;
`;

const Option = Select.Option;

function CreateInstitute(props) {
  const [loading, setLoading] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const [locationList, setLocationList] = useState([]);
  const [image, setImage] = useState(null);

  useEffect(() => {
    getCategories();
    getLocations();
  }, []);

  const getLocations = async () => {
    const rawData = await adminService.getAllLocations();
    setLocationList(rawData.data.data);
  };

  const getCategories = async () => {
    const rawData = await adminService.getAllCategories();
    setCategoryList(rawData.data.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(image == null){
      message.warn("Please Add Image")
    } else {
      props.form.validateFields(async (err, values) => {
        if (!err) {
          const createInstitute = await adminService.addInstitute(values, image);
          if (createInstitute.data.success == true) {
            message.success("Institute Successfully Created");
            props.form.resetFields();
            props.history.push("/admin/institute");
          }
        }
      });
    }
  };

  const handleUpload = (info) => {
    if (info.file.status === "done") {
      setImage(info.file.originFileObj);
      console.log(info.file.originFileObj);
    }
  };

  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

  const { getFieldDecorator } = props.form;
  return (
    <>
    <AuthGuard />
    <InstituteCreateWrapper>
      <InstituteCreateHeader>
        <h2>Create Institute</h2>
        <InstituteCreateButton
          onClick={() => props.history.push("/admin/institute")}
        >
          Cancel
        </InstituteCreateButton>
      </InstituteCreateHeader>
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
              <Form.Item label="Category">
                {getFieldDecorator("category", {
                  rules: [{ required: true, message: "please enter category" }],
                })(
                  <select
                    className="nice-select input-select"
                    placeholder="please enter category"
                    style={{
                      width: "100%",
                    }}
                  >
                    {categoryList &&
                      categoryList.map((d) => (
                        <option value={d.title}>{d.title}</option>
                      ))}
                  </select>
                )}
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item label="City">
                {getFieldDecorator("city", {
                  rules: [{ required: true, message: "please enter city" }],
                })(
                  <select
                    className="nice-select input-select"
                    placeholder="please enter city"
                    style={{
                      width: "100%",
                    }}
                  >
                    {locationList &&
                      locationList.map((d) => (
                        <option value={d.city}>
                          {d.city} ({d.state})
                        </option>
                      ))}
                  </select>
                )}
              </Form.Item>
            </Col>

            <Col xs={24} sm={12}>
              <Form.Item label="Info">
                {getFieldDecorator("info", {
                  rules: [{ required: true, message: "please enter info" }],
                })(<Input placeholder="please enter info" />)}
              </Form.Item>
            </Col>
          </Row>

          <Row style={{ marginBottom: "2rem" }}>
            <Col span={12}>
              <Upload
                customRequest={dummyRequest}
                listType="picture"
                maxCount={1}
                onChange={handleUpload}
              >
                <Button icon={<UploadOutline />}>Upload (Max: 1)</Button>
              </Upload>
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
    </InstituteCreateWrapper>
    </>
  );
}

export default withRouter(Form.create()(CreateInstitute));
