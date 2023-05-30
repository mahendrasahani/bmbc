import React, { useState, useEffect } from "react";
import { Button, Form, Input, message, Row, Col, Select } from "antd";
import styled from "styled-components";
import adminService from "../../../common/adminService";
import AuthGuard from "../authGuards";

const Option = Select.Option;

const CreateExamWrapper = styled.div`
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

const CreateExamHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const CreateExamButton = styled(Button)`
  float: right;
`;

function CreateExam(props) {
  const [loading, setLoading] = useState(false);
  const [branchList, setBranchList] = useState([]);

  useEffect(() => {
    listBranch();
  }, []);

  const listBranch = async () => {
    const rawData = await adminService.getAllBranch();
    setBranchList(rawData.data.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields(async (err, values) => {
      if (!err) {
        setLoading(true);
        const createExam = await adminService.addExam(values);
        setLoading(false);
        if (createExam.data.success === true) {
          message.success("Exam Successfully Created");
          props.form.resetFields();
          props.history.push("/admin/exam");
        } else {
          message.error("Error in creating exam");
        }
      }
    });
  };

  const { getFieldDecorator } = props.form;
  return (
    <>
    <AuthGuard />
    <CreateExamWrapper>
      <CreateExamHeader>
        <h2>Create Exam</h2>
        <CreateExamButton onClick={() => props.history.push("/admin/exam")}>
          Cancel
        </CreateExamButton>
      </CreateExamHeader>
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
            <Form.Item label="Branch Name">
              {getFieldDecorator("branchName", {
                rules: [{ required: true, message: "please enter branch name" }],
              })(
                <Select
                  className="nice-select input-select"
                  placeholder="please enter branch name"
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
    </CreateExamWrapper>
    </>
  );
}

export default Form.create()(CreateExam);
