import React, { useState, useEffect } from "react";
import { Button, Table } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import adminService from "../../../common/adminService";
import TopNav from "../topnavComponent";
import AuthGuard from "../authGuards";

const UserManagementWrapper = styled.div`
  padding: 20px;
`;

const UserManagementHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const UserManagementCreateButton = styled(Button)`
  float: right;
`;

const UserManagementTable = styled(Table)`
  background-color: #fff;
  border-radius: 4px;
`;

const UserManagementColumnAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserManagementEditButton = styled(Button)`
  margin-right: 8px;
`;

function UserManagement() {
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
    adminService.getAllUsers().then((apiResponse) => {
      const paginationObj = { ...pagination };
      paginationObj.total = apiResponse.data.data.length;
      setLoading(false);
      setData(apiResponse.data.data);
      setPagination(paginationObj);
    });
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    // {
    //   title: "Phone No.",
    //   dataIndex: "phone",
    // },
    // {
    //   title: "City",
    //   dataIndex: "city",
    // },
    // {
    //   title: "Qualification",
    //   dataIndex: "qualification",
    // },
    {
      title: "Joined On",
      dataIndex: "createdAt",
    },
    // {
    //   title: "Action",
    //   dataIndex: "_id",
    //   render: (record) => (
    //     <UserManagementColumnAction>
    //       <UserManagementEditButton type="primary">
    //         <Link to={`/users/editUser?id=${record}`}>Edit</Link>
    //       </UserManagementEditButton>
    //     </UserManagementColumnAction>
    //   ),
    // },
  ];

  return (
    <>
    <AuthGuard />
      <TopNav />
      <UserManagementWrapper>
        <UserManagementHeader>
          <h2>User Management</h2>
          <UserManagementCreateButton type="primary">
            <Link to="/admin/createUser">Create</Link>
          </UserManagementCreateButton>
        </UserManagementHeader>
        <UserManagementTable
          columns={columns}
          rowKey={(record) => record._id}
          dataSource={data}
          pagination={pagination}
          loading={loading}
          onChange={() => handleTableChange}
        />
      </UserManagementWrapper>
    </>
  );
}

export default UserManagement;
