import React, { useState, useEffect } from "react";
import { Button, Table, Row, Modal, message } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import adminService from "../../../common/adminService";
import TopNav from "../topnavComponent";
import AuthGuard from "../authGuards";

const LocationManagementWrapper = styled.div`
  padding: 20px;
`;

const LocationManagementHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const LocationManagementCreateButton = styled(Button)`
  float: right;
`;

const LocationManagementTable = styled(Table)`
  background-color: #fff;
  border-radius: 4px;
`;

const LocationManagementColumnAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LocationManagementEditButton = styled(Button)`
  margin-right: 8px;
`;

function LocationManagement() {
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
    adminService.getAllLocations().then((apiResponse) => {
      const paginationObj = { ...pagination };
      paginationObj.total = apiResponse.data.data.length;
      setLoading(false);
      setData(apiResponse.data.data);
      setPagination(paginationObj);
    });
  };

  const deleteLocation = async (id) => {
    const deleteLoc = await adminService.deleteLocation(id);
    if (deleteLoc.data.success == true) {
      message.success(deleteLoc.data.data);
    } else {
      message.warn("An error occured please try again");
    }
    fetch();
  };

  const columns = [
    {
      title: "Head Office",
      dataIndex: "city",
    },
    {
      title: "State",
      dataIndex: "state",
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
            onClick={() => deleteLocation(record)}
            type="danger"
            style={{ marginRight: 2 }}
          >
            {"Delete"}
          </Button>
          <Button type="primary" style={{ marginRight: 2 }}>
            <Link to={`/admin/editLocation/${record}`}>Edit</Link>
          </Button>
        </>
      ),
    },
  ];

  return (
    <>
      <AuthGuard />
      <TopNav />
      <LocationManagementWrapper>
        <LocationManagementHeader>
          <h2>Location Management</h2>
          <LocationManagementCreateButton type="primary">
            <Link to="/admin/createLocation">Create</Link>
          </LocationManagementCreateButton>
        </LocationManagementHeader>
        <LocationManagementTable
          columns={columns}
          rowKey={(record) => record._id}
          dataSource={data}
          pagination={pagination}
          loading={loading}
          onChange={() => handleTableChange}
        />
      </LocationManagementWrapper>
    </>
  );
}

export default LocationManagement;
