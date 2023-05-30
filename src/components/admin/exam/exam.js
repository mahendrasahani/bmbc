import React, { useState, useEffect } from "react";
import { Button, Table, Row, Modal, message } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import adminService from "../../../common/adminService";
import TopNav from "../topnavComponent";
import AuthGuard from "../authGuards";

const ExamManagementWrapper = styled.div`
  padding: 20px;
`;

const ExamManagementHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ExamManagementCreateButton = styled(Button)`
  float: right;
`;

const ExamManagementTable = styled(Table)`
  background-color: #fff;
  border-radius: 4px;
`;

const ExamManagementColumnAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ExamManagementEditButton = styled(Button)`
  margin-right: 8px;
`;

function ExamManagement() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});

  useEffect(() => {
    fetch();
  }, []);

  const handleTableChange = async (pagination, filters, sorter) => {
    const pager = { ...pagination };
    pager.current = pagination.current;
    setPagination(pager);
    fetch({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
  };

  const fetch = (params = {}) => {
    setLoading(true);
    adminService.getAllExam().then((apiResponse) => {
      const paginationObj = { ...pagination };
      paginationObj.total = apiResponse.data.data.length;
      setLoading(false);
      setData(apiResponse.data.data);
      setPagination(paginationObj);
    });
  };

  const deleteExam = async (id) => {
    const deleteExam = await adminService.deleteExam(id);
    if (deleteExam.data.success == true) {
      message.success(deleteExam.data.data);
    } else {
      message.warn("An error occured please try again");
    }
    fetch();
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Branch Name",
      dataIndex: "branchName",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
    },
    {
      title: "Action",
      dataIndex: "_id",
      render: (record) => (
        <>
          <Button
            onClick={() => deleteExam(record)}
            type="danger"
            style={{ marginRight: 2 }}
          >
            {"Delete"}
          </Button>
          <Button type="primary" style={{ marginRight: 2 }}>
            <Link to={`/admin/editExam/${record}`}>Edit</Link>
          </Button>
        </>
      ),
    },
  ];

  return (
    <>
      <AuthGuard />
      <TopNav />
      <ExamManagementWrapper>
        <ExamManagementHeader>
          <h2>Exam Management</h2>
          <ExamManagementCreateButton type="primary">
            <Link to="/admin/createExam">Create</Link>
          </ExamManagementCreateButton>
        </ExamManagementHeader>
        <ExamManagementTable
          columns={columns}
          rowKey={(record) => record._id}
          dataSource={data}
          pagination={pagination}
          loading={loading}
          onChange={() => handleTableChange}
        />
      </ExamManagementWrapper>
    </>
  );
}

export default ExamManagement;
