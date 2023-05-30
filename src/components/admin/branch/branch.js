import React, { useState, useEffect } from "react";
import { Button, Table, Row, Modal, message } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import adminService from "../../../common/adminService";
import TopNav from "../topnavComponent";
import AuthGuard from "../authGuards";

const BranchManagementWrapper = styled.div`
  padding: 20px;
`;

const BranchManagementHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const BranchManagementCreateButton = styled(Button)`
  float: right;
`;

const BranchManagementTable = styled(Table)`
  background-color: #fff;
  border-radius: 4px;
`;

const BranchManagementColumnAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BranchManagementEditButton = styled(Button)`
  margin-right: 8px;
`;

function BranchManagement() {
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
    adminService.getAllBranch().then((apiResponse) => {
      const paginationObj = { ...pagination };
      paginationObj.total = apiResponse.data.data.length;
      setLoading(false);
      setData(apiResponse.data.data);
      setPagination(paginationObj);
    });
  };

  const deleteBranch = async (id) => {
    const deleteBranch = await adminService.deleteBranch(id);
    if (deleteBranch.data.success == true) {
      message.success(deleteBranch.data.data);
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
      title: "Created At",
      dataIndex: "createdAt",
    },
    {
      title: "Action",
      dataIndex: "_id",
      render: (record) => (
        <>
          <Button
            onClick={() => deleteBranch(record)}
            type="danger"
            style={{ marginRight: 2 }}
          >
            {"Delete"}
          </Button>
          <Button type="primary" style={{ marginRight: 2 }}>
            <Link to={`/admin/editBranch/${record}`}>Edit</Link>
          </Button>
        </>
      ),
    },
  ];

  return (
    <>
      <AuthGuard />
      <TopNav />
      <BranchManagementWrapper>
        <BranchManagementHeader>
          <h2>Branch Management</h2>
          <BranchManagementCreateButton type="primary">
            <Link to="/admin/createBranch">Create</Link>
          </BranchManagementCreateButton>
        </BranchManagementHeader>
        <BranchManagementTable
          columns={columns}
          rowKey={(record) => record._id}
          dataSource={data}
          pagination={pagination}
          loading={loading}
          onChange={() => handleTableChange}
        />
      </BranchManagementWrapper>
    </>
  );
}

export default BranchManagement;
