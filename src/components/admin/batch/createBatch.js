import React, { useState, useEffect } from "react";
import
  {
    Button,
    Form,
    Input,
    message,
    Row,
    Col,
    DatePicker,
    Select,
    Upload,
  } from "antd";
import styled from "styled-components";
import adminService from "../../../common/adminService";
import { UploadOutline } from "@ant-design/icons";
import AuthGuard from "../authGuards";

const CreateBatchWrapper = styled.div`
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

const CreateBatchHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const CreateBatchButton = styled(Button)`
  float: right;
`;

function CreateBatch(props)
{
  const [loading, setLoading] = useState(false);
  const [examList, setExamList] = useState([]);
  const [instituteList, setInstituteList] = useState([]);
  const [branchList, setBranchList] = useState([]);
  const [planList, setPlanList] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [image, setImage] = useState(null);

  const Option = Select.Option;

  useEffect(() =>
  {
    listExams();
    listInstitute();
    listPlans();
    listBranch();
  }, []);

  const listBranch = async () =>
  {
    const rawData = await adminService.getAllBranch();
    setBranchList(rawData.data.data);
  };

  const listExams = async () =>
  {
    const rawData = await adminService.getAllExam();
    setExamList(rawData.data.data);
  };

  const listInstitute = async () =>
  {
    const rawData = await adminService.getAllInstitutes();
    setInstituteList(rawData.data.data);
  };

  const listPlans = async () =>
  {
    const rawData = await adminService.getAllPlans();
    setPlanList(rawData.data.data);
  };

  const handleSubmit = (e) =>
  {
    e.preventDefault();
    if (image == null || image == undefined)
    {
      message.warn("please add image")
    } else
    {
      props.form.validateFields(async (err, values) =>
      {
        if (!err)
        {
          setLoading(true);
          props.form.setFieldsValue({ startDate: startDate, endDate: endDate });
          const createBatch = await adminService.addBatch(values, image);
          setLoading(false);
          if (createBatch.data.success === true)
          {
            message.success("Batch Successfully Created");
            props.form.resetFields();
            props.history.push("/admin/createBatch");
            setLoading(true);
            window.location.reload(true);
            setLoading(true);
          } else
          {
            message.error("Error in creating batch");
          }
        }
      });
    }
  };

  const handleUpload = (info) =>
  {
    if (info.file.status === "done")
    {
      setImage(info.file.originFileObj);
      console.log(info.file.originFileObj);
    }
  };

  const handleRemove = () =>
  {
    setImage(null);
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
      <CreateBatchWrapper>
        <CreateBatchHeader>
          <h2>Create Batch</h2>
          <CreateBatchButton onClick={() => props.history.push("/admin/batch")}>
            Cancel
          </CreateBatchButton>
        </CreateBatchHeader>
        <Form onSubmit={handleSubmit} className="login-form">
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Batch Name">
                {getFieldDecorator("batchName", {
                  rules: [{ required: true, message: "please enter" }],
                })(<Input placeholder="please enter" />)}
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item label="Category">
                {getFieldDecorator("category", {
                  rules: [{ required: true, message: "please enter" }],
                })(
                  <Select
                    className="input-select"
                    placeholder="Please Select"
                    style={{
                      width: "100%",
                    }}
                  >
                    <Option value={"Online"}>Online</Option>
                    <Option value={"Offline"}>Offline</Option>
                  </Select>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Branch Name">
                {getFieldDecorator("branchName", {
                  rules: [{ required: true, message: "please enter" }],
                })(
                  <Select
                    className="input-select"
                    placeholder="Please Select"
                    style={{
                      width: "100%",
                    }}
                  >
                    {branchList &&
                      branchList.map((d) => (
                        <Option value={d.name}>{d.name}</Option>
                      ))}
                  </Select>
                )}
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item label="Exam">
                {getFieldDecorator("examId", {
                  rules: [{ required: true, message: "please enter" }],
                })(
                  <Select
                    className="input-select"
                    placeholder="Please Select"
                    style={{
                      width: "100%",
                    }}
                  >
                    {examList &&
                      examList.map((d) => (
                        <Option value={d._id}>{d.name}</Option>
                      ))}
                  </Select>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Institute">
                {getFieldDecorator("instituteId", {
                  rules: [{ required: true, message: "please enter" }],
                })(
                  <Select
                    className="input-select"
                    placeholder="Please Select"
                    style={{
                      width: "100%",
                    }}
                  >
                    {instituteList &&
                      instituteList.map((d) => (
                        <Option value={d._id}>{d.name}</Option>
                      ))}
                  </Select>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Plan">
                {getFieldDecorator("planName", {
                  rules: [{ required: true, message: "please enter" }],
                })(
                  <Select
                    className="input-select"
                    placeholder="Please Select"
                    style={{
                      width: "100%",
                    }}
                  >
                    {planList &&
                      planList.map((d) => (
                        <Option value={d._id}>{d.title}</Option>
                      ))}
                  </Select>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Facilities">
                {getFieldDecorator("facilities", {
                  rules: [{ required: true, message: "please enter" }],
                })(<Input placeholder="please enter" />)}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Faculties">
                {getFieldDecorator("faculties", {
                  rules: [{ required: true, message: "please enter" }],
                })(<Input placeholder="please enter" />)}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Amount">
                {getFieldDecorator("amount", {
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
                    onChange={(date, dateString) => setEndDate(dateString)}
                    style={{ width: "100%" }}
                  />
                )}
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item label="Timings">
                {getFieldDecorator("timings", {
                  rules: [{ required: true, message: "please enter" }],
                })(<Input placeholder="please enter" />)}
              </Form.Item>
            </Col>
          </Row>
          <Row style={{ marginBottom: "2rem" }}>
            <Col span={12}>
              <Upload
                onRemove={handleRemove}
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
            <Button
              size="large"
              type="primary"
              htmlType="submit"
              loading={loading}
            >
              Create
            </Button>
          </Row>
        </Form>
      </CreateBatchWrapper>
    </>
  );
}

export default Form.create()(CreateBatch);
