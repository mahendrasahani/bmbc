import React, { useState, useEffect } from "react";
import { Button, Table, Row, Modal, message } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import adminService from "../../../common/adminService";
import TopNav from "../topnavComponent";
import AuthGuard from "../authGuards";
import PopupConfirm from "../../global-components/PopupConfirm";

const InstituteManagementWrapper = styled.div`
  padding: 20px;
`;

const InstituteManagementHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const InstituteManagementCreateButton = styled(Button)`
  float: right;
`;

const InstituteManagementTable = styled(Table)`
  background-color: #fff;
  border-radius: 4px;
`;

const InstituteManagementColumnAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InstituteManagementEditButton = styled(Button)`
  margin-right: 8px;
`;

function InstituteManagement()
{
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});
  const [popup, setPopup] = useState(false);
  useEffect(() =>
  {
    fetch();
  }, []);

  const handleTableChange = async (pagination, filters, sorter) =>
  {
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

  const fetch = (params = {}) =>
  {
    setLoading(true);
    adminService.getAllInstitutes().then((apiResponse) =>
    {
      const paginationObj = { ...pagination };
      paginationObj.total = apiResponse.data.data.length;
      setLoading(false);
      setData(apiResponse.data.data);
      setPagination(paginationObj);
    });
  };

  const deleteInstitute = async (id) =>
  {
    setPopup(true);
    const deleteIns = await adminService.deleteInstitute(id)
    if (deleteIns.data.success == true)
    {
      message.success(deleteIns.data.data);
    } else
    {
      message.warn('An error occured please try again')
    }
    fetch()
  }
  const handleDeleteTrue = () =>
  {
    setPopup(false);
    fetch();
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "City",
      dataIndex: "city",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      width: "20%",
      render: (image) => (
        <img style={{ width: "120px" }} src={image} alt={"instituteImage"} />
      ),
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
            onClick={() => deleteInstitute(record)}
            type="danger"
            style={{ marginRight: 2 }}
          >
            {"Delete"}
          </Button>
          {popup && <PopupConfirm handleDeleteTrue={handleDeleteTrue} />}

          <Button type="primary" style={{ marginRight: 2 }}>
            <Link to={`/admin/editInstitute/${record}`}>Edit</Link>
          </Button>
        </>
      ),
    },
  ];

  return (
    <>
      <AuthGuard />
      <TopNav />
      <InstituteManagementWrapper>
        <InstituteManagementHeader>
          <h2>Institute Management</h2>
          <InstituteManagementCreateButton type="primary">
            <Link to="/admin/createInstitute">Create</Link>
          </InstituteManagementCreateButton>
        </InstituteManagementHeader>
        <InstituteManagementTable
          columns={columns}
          rowKey={(record) => record._id}
          dataSource={data}
          pagination={pagination}
          loading={loading}
          onChange={() => handleTableChange}
        />

      </InstituteManagementWrapper>
    </>
  );
}

export default InstituteManagement;
