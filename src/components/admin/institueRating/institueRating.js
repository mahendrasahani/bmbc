import React, { useState, useEffect } from "react";
import { Table, Button, message } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import adminService from "../../../common/adminService";
import TopNav from "../topnavComponent";
import AuthGuard from "../authGuards";

const RatingWrapper = styled.div`
  padding: 20px;
`;

const RatingHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const RatingTable = styled(Table)`
  background-color: #fff;
  border-radius: 4px;
`;

function InstituteRating() {
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
    adminService.listInstitueRating().then((apiResponse) => {
      const paginationObj = { ...pagination };
      paginationObj.total = apiResponse.data.data.length;
      setLoading(false);
      setData(apiResponse.data.data);
      setPagination(paginationObj);
    });
  };

  const deleteRating = async (id) => {
    const deleteRating = await adminService.deleteInstituteRating(id);
    if (deleteRating.data.success == true) {
      message.success(deleteRating.data.data);
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
    // {
    //   title: "User",
    //   dataIndex: "userId",
    // },
    {
      title: "Rating",
      dataIndex: "rating",
    },
    {
      title: "Review",
      dataIndex: "info",
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
            type="primary"
            style={{ marginRight: 2 }}
          >
            {"Edit"}
          </Button>
        </>
      ),
    },
  ];

  return (
    <>
      <AuthGuard />
      <TopNav />
      <RatingWrapper>
        <RatingHeader>
          <h2>Institute Ratings</h2>
        </RatingHeader>
        <RatingTable
          columns={columns}
          rowKey={(record) => record._id}
          dataSource={data}
          pagination={pagination}
          loading={loading}
          onChange={handleTableChange}
        />
      </RatingWrapper>
    </>
  );
}

export default InstituteRating;
