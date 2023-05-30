import React, { useState, useEffect } from "react";
import { Button, Table, Row, Modal, message } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import adminService from "../../../common/adminService";
import TopNav from "../topnavComponent";
import AuthGuard from "../authGuards";

const PlanManagementWrapper = styled.div`
  padding: 20px;
`;

const PlanManagementHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const PlanManagementCreateButton = styled(Button)`
  float: right;
`;

const PlanManagementTable = styled(Table)`
  background-color: #fff;
  border-radius: 4px;
`;

const PlanManagementColumnAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlanManagementEditButton = styled(Button)`
  margin-right: 8px;
`;

function PlanManagement() {
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
    adminService.getAllPlans().then((apiResponse) => {
      const paginationObj = { ...pagination };
      paginationObj.total = apiResponse.data.data.length;
      setLoading(false);
      setData(apiResponse.data.data);
      setPagination(paginationObj);
    });
  };

  const deletePlan = async (id) => {
    const deletePlan = await adminService.deletePlan(id);
    if (deletePlan.data.success == true) {
      message.success(deletePlan.data.data);
    } else {
      message.warn("An error occured please try again");
    }
    fetch();
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "title",
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
            onClick={() => deletePlan(record)}
            type="danger"
            style={{ marginRight: 2 }}
          >
            {"Delete"}
          </Button>
          <Button type="primary" style={{ marginRight: 2 }}>
            <Link to={`/admin/editPlan/${record}`}>Edit</Link>
          </Button>
        </>
      ),
    },
  ];

  return (
    <>
      <AuthGuard />
      <TopNav />
      <PlanManagementWrapper>
        <PlanManagementHeader>
          <h2>Plan Management</h2>
          <PlanManagementCreateButton type="primary">
            <Link to="/admin/createPlan">Create</Link>
          </PlanManagementCreateButton>
        </PlanManagementHeader>
        <PlanManagementTable
          columns={columns}
          rowKey={(record) => record._id}
          dataSource={data}
          pagination={pagination}
          loading={loading}
          onChange={() => handleTableChange}
        />
      </PlanManagementWrapper>
    </>
  );
}

export default PlanManagement;
