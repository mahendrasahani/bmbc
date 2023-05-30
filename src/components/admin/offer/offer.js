import React, { useState, useEffect } from "react";
import { Button, Table, Row, Modal, message } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import adminService from "../../../common/adminService";
import TopNav from "../topnavComponent";
import AuthGuard from "../authGuards";

const OfferManagementWrapper = styled.div`
  padding: 20px;
`;

const OfferManagementHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const OfferManagementCreateButton = styled(Button)`
  float: right;
`;

const OfferManagementTable = styled(Table)`
  background-color: #fff;
  border-radius: 4px;
`;

const OfferManagementColumnAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OfferManagementEditButton = styled(Button)`
  margin-right: 8px;
`;

function OfferManagement() {
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
    adminService.getAllOffers().then((apiResponse) => {
      const paginationObj = { ...pagination };
      paginationObj.total = apiResponse.data.data.length;
      setLoading(false);
      setData(apiResponse.data.data);
      setPagination(paginationObj);
    });
  };

  const deleteOffer = async (id) => {
    const deleteOffer = await adminService.deleteOffer(id);
    if (deleteOffer.data.success == true) {
      message.success(deleteOffer.data.data);
    } else {
      message.warn("An error occured please try again");
    }
    fetch();
  };

  const columns = [
    {
      title: "Offer Name",
      dataIndex: "offerName",
    },
    {
      title: "Code",
      dataIndex: "code",
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
            onClick={() => deleteOffer(record)}
            type="danger"
            style={{ marginRight: 2 }}
          >
            {"Delete"}
          </Button>
          <Button type="primary" style={{ marginRight: 2 }}>
            <Link to={`/admin/editOffer/${record}`}>Edit</Link>
          </Button>
        </>
      ),
    },
  ];

  return (
    <>
    <AuthGuard />
      <TopNav />
      <OfferManagementWrapper>
        <OfferManagementHeader>
          <h2>Offer Management</h2>
          <OfferManagementCreateButton type="primary">
            <Link to="/admin/createOffer">Create</Link>
          </OfferManagementCreateButton>
        </OfferManagementHeader>
        <OfferManagementTable
          columns={columns}
          rowKey={(record) => record._id}
          dataSource={data}
          pagination={pagination}
          loading={loading}
          onChange={() => handleTableChange}
        />
      </OfferManagementWrapper>
    </>
  );
}

export default OfferManagement;
