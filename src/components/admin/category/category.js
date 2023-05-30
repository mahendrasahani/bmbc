import React, { useState, useEffect } from "react";
import { Button, Table, Row, Modal, message } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import adminService from "../../../common/adminService";
import TopNav from "../topnavComponent";
import AuthGuard from "../authGuards";

const CategoryManagementWrapper = styled.div`
  padding: 20px;
`;

const CategoryManagementHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const CategoryManagementCreateButton = styled(Button)`
  float: right;
`;

const CategoryManagementTable = styled(Table)`
  background-color: #fff;
  border-radius: 4px;
`;

const CategoryManagementColumnAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CategoryManagementEditButton = styled(Button)`
  margin-right: 8px;
`;

function CategoryManagement() {
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
    adminService.getAllCategories().then((apiResponse) => {
      const paginationObj = { ...pagination };
      paginationObj.total = apiResponse.data.data.length;
      setLoading(false);
      setData(apiResponse.data.data);
      setPagination(paginationObj);
    });
  };

  const deleteCategory = async (id) => {
    const deleteCat = await adminService.deleteCategory(id);
    if (deleteCat.data.success == true) {
      message.success(deleteCat.data.data);
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
            onClick={() => deleteCategory(record)}
            type="danger"
            style={{ marginRight: 2 }}
          >
            {"Delete"}
          </Button>
          <Button type="primary" style={{ marginRight: 2 }}>
            <Link to={`/admin/editCategory/${record}`}>Edit</Link>
          </Button>
        </>
      ),
    },
  ];

  return (
    <>
      <AuthGuard />
      <TopNav />
      <CategoryManagementWrapper>
        <CategoryManagementHeader>
          <h2>Category Management</h2>
          <CategoryManagementCreateButton type="primary">
            <Link to="/admin/createCategory">Create</Link>
          </CategoryManagementCreateButton>
        </CategoryManagementHeader>
        <CategoryManagementTable
          columns={columns}
          rowKey={(record) => record._id}
          dataSource={data}
          pagination={pagination}
          loading={loading}
          onChange={() => handleTableChange}
        />
      </CategoryManagementWrapper>
    </>
  );
}

export default CategoryManagement;
