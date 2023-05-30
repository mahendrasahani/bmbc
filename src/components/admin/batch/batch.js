import React, { useState, useEffect } from "react";
import { Button, Table, Row, Modal, message } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import adminService from "../../../common/adminService";
import TopNav from "../topnavComponent";
import AuthGuard from "../authGuards";

const BatchManagementWrapper = styled.div`
  padding: 20px;
`;

const BatchManagementHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const BatchManagementCreateButton = styled(Button)`
  float: right;
`;

const BatchManagementTable = styled(Table)`
  background-color: #fff;
  border-radius: 4px;
`;

const BatchManagementColumnAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BatchManagementEditButton = styled(Button)`
  margin-right: 8px;
`;

function BatchManagement() {
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
    adminService.getAllBatches().then((apiResponse) => {
      const paginationObj = { ...pagination };
      paginationObj.total = apiResponse.data.data.length;
      setLoading(false);
      setData(apiResponse.data.data);
      setPagination(paginationObj);
    });
  };

  const deleteBatch = async (id) => {
    const deleteBatch = await adminService.deleteBatch(id);
    if (deleteBatch.data.success == true) {
      message.success(deleteBatch.data.data);
    } else {
      message.warn("An error occured please try again");
    }
    fetch();
  };

  const columns = [
    {
      title: "Batch Name",
      dataIndex: "batchName",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      width: "20%",
      render: (image) => (
        <img style={{ width: "120px" }} src={image} alt={"batchImage"} />
      ),
    },
    {
      title: "Action",
      dataIndex: "_id",
      render: (record) => (
        <>
          <Button
            onClick={() => deleteBatch(record)}
            type="danger"
            style={{ marginRight: 2 }}
          >
            {"Delete"}
          </Button>
          <Button type="primary" style={{ marginRight: 2 }}>
            <Link to={`/admin/editBatch/${record}`}>Edit</Link>
          </Button>
        </>
      ),
    },
  ];

  return (
    <>
       <AuthGuard />
      <TopNav />
      <BatchManagementWrapper>
        <BatchManagementHeader>
          <h2>Batch Management</h2>
          <BatchManagementCreateButton type="primary">
            <Link to="/admin/createBatch">Create</Link>
          </BatchManagementCreateButton>
        </BatchManagementHeader>
        <BatchManagementTable
          columns={columns}
          rowKey={(record) => record._id}
          dataSource={data}
          pagination={pagination}
          loading={loading}
          onChange={() => handleTableChange}
        />
      </BatchManagementWrapper>
    </>
  );
}

export default BatchManagement;
