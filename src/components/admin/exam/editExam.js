import React, { useState, useEffect } from "react";
import { Button, Form, Input, message, Row, Col, Select } from "antd";
import styled from "styled-components";
import adminService from "../../../common/adminService";
import { useParams } from "react-router-dom";
import AuthGuard from "../authGuards";

const Option = Select.Option;

const EditExamWrapper = styled.div`
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

const EditExamHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const EditExamButton = styled(Button)`
  float: right;
`;

function EditExam(props) {
  const [loading, setLoading] = useState(false);
  const [branchList, setBranchList] = useState([]);
  const [exam, setExam] = useState({});
  const { id } = useParams();

  useEffect(() => {
    listBranch();
    const fetchExam = async () => {
      const response = await adminService.getExamDetailById(id);
      const data = response.data.data;
      setExam(data);
      props.form.setFieldsValue({ ...data });
    };
    fetchExam();
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
        const updateExam = await adminService.updateExam(id, values);
        setLoading(false);
        if (updateExam.data.success === true) {
          message.success("Exam Successfully Updated");
          props.history.push("/admin/exam");
        } else {
          message.error("Error in updating exam");
        }
      }
    });
  };

  const { getFieldDecorator } = props.form;
  return (
    <>
    <AuthGuard />
    <EditExamWrapper>
      <EditExamHeader>
        <h2>Edit Exam</h2>
        <EditExamButton onClick={() => props.history.push("/admin/exam")}>
          Cancel
        </EditExamButton>
      </EditExamHeader>
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
                rules: [
                  { required: true, message: "please enter branch name" },
                ],
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
            Update
          </Button>
        </Form.Item>
      </Form>
    </EditExamWrapper>
    </>
  );
}

export default Form.create()(EditExam);
