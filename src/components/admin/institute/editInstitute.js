import React, { useState, useEffect } from "react";
import { Button, Form, Input, message, Col, Row, Upload } from "antd";
import styled from "styled-components";
import adminService from "../../../common/adminService";
import { useParams } from "react-router-dom";
import { UploadOutline } from "@ant-design/icons";
import AuthGuard from "../authGuards";

const EditInstituteWrapper = styled.div`
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

const EditInstituteHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const EditInstituteButton = styled(Button)`
  float: right;
`;

function EditInstitute(props)
{
  const [loading, setLoading] = useState(false);
  const [institute, setInstitute] = useState({});
  const [categoryList, setCategoryList] = useState([]);
  const [locationList, setLocationList] = useState([]);
  const [image, setImage] = useState(null);
  const { id } = useParams();

  useEffect(() =>
  {
    getCategories();
    getLocations();
    const fetchInstitute = async () =>
    {
      const response = await adminService.getInstituteById(id);
      const data = response.data.data;
      setInstitute(data);
      props.form.setFieldsValue({ ...data });
    };
    fetchInstitute();
  }, []);

  const getLocations = async () =>
  {
    const rawData = await adminService.getAllLocations();
    setLocationList(rawData.data.data);
  };

  const getCategories = async () =>
  {
    const rawData = await adminService.getAllCategories();
    setCategoryList(rawData.data.data);
  };

  const handleSubmit = (e) =>
  {
    e.preventDefault();
    props.form.validateFields(async (err, values,image) =>
    {
      if (!err)
      {
        setLoading(true);
        const updateInstitute = await adminService.updateInstitute(id, values, image);
        setLoading(false);
        if (updateInstitute.data.success === true)
        {
          message.success("Institute Successfully Updated");
          props.history.push("/admin/institute");
        } else
        {
          message.error("Error in updating institute");
        }
      }
    });
  };

  const handleUpload = (info) =>
  {
    if (info.file.status === "done")
    {
      setImage(info.file.originFileObj);
    }
  };

  const dummyRequest = ({ file, onSuccess }) =>
  {
    setTimeout(() =>
    {
      onSuccess("ok");
    }, 0);
  };

  const { getFieldDecorator } = props.form;

  return (
    <>
      <AuthGuard />
      <EditInstituteWrapper>
        <EditInstituteHeader>
          <h2>Edit Institute</h2>
          <EditInstituteButton
            onClick={() => props.history.push("/admin/institute")}
          >
            Cancel
          </EditInstituteButton>
        </EditInstituteHeader>
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

          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item label="Rating">
                {getFieldDecorator("rating", {
                  rules: [{ required: true, message: "please enter rating" }],
                })(<Input placeholder="please enter rating" />)}
              </Form.Item>
            </Col>
          </Row>

          <Row style={{ marginBottom: "2rem" }}>
            <Col span={12}>
              {/* <Upload
              customRequest={dummyRequest}
              listType="picture"
              maxCount={1}
              onChange={handleUpload}
            >
              <Button icon={<UploadOutline />}>Upload (Max: 1)</Button>
            </Upload> */}

              <Form.Item label="image">
                {getFieldDecorator("image", {
                  rules: [{ required: true }],
                })(
                  <Upload
                    customRequest={dummyRequest}
                    listType="picture"
                    maxCount={1}
                    onChange={handleUpload}
                  >
                    <Button icon={<UploadOutline />}>Upload (Max: 1)</Button>
                  </Upload>
                )}
              </Form.Item>
            </Col>
          </Row>

          <Row>
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
          </Row>
        </Form>
      </EditInstituteWrapper>
    </>
  );
}

export default Form.create()(EditInstitute);
