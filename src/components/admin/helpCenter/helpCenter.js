import React, { useState, useEffect } from "react";
import { Table, Button, message } from "antd";
import styled from "styled-components";
import adminService from "../../../common/adminService";
import TopNav from "../topnavComponent";
import AuthGuard from "../authGuards";

const HelpCenterWrapper = styled.div`
  padding: 20px;
`;

const HelpCenterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const HelpCenterTable = styled(Table)`
  background-color: #fff;
  border-radius: 4px;
`;

function HelpCenterList() {
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
    adminService.listAllHelpRequests().then((apiResponse) => {
      const paginationObj = { ...pagination };
      paginationObj.total = apiResponse.data.data.length;
      setLoading(false);
      setData(apiResponse.data.data);
      setPagination(paginationObj);
    });
  };

  // const deleteHelp = async (id) =>
  // {
  //   const deleteHelp = await adminService.deleteHelp(id);
  //   if (deleteHelp.data.success == true)
  //   {
  //     message.success(deleteHelp.data.data);
  //   } else
  //   {
  //     message.warn("An error occured please try again");
  //   }
  //   fetch();
  // };

  const handleReply = async (data, record) => {
    const replyHelp = await adminService.getHelpRequestReply({
      email: "bmbc@gmail.com",
      message: "message test",
      subject: "subject test",
      helpId: record,
    });


    if (replyHelp?.data?.success === true) {
      message.success(replyHelp.data.message);
    } else {
      message.warn("An error occured please try again");
    }
    fetch();
  };

  const columns = [
    {
      title: "Subject",
      dataIndex: "subject",
    },
    {
      title: "User",
      dataIndex: "userId",
    },
    {
      title: "User Contact",
      dataIndex: "contact",
    },
    {
      title: "Message",
      dataIndex: "message",
    },
    {
      title: "Action",
      dataIndex: "_id",
      render: (record) => (
        <>
          <Button
            type="primary"
            style={{ marginRight: 2 }}
            onClick={(e) => handleReply(e.target.value, record)}
          >
            {"Reply"}
          </Button>
        </>
      ),
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
    },
  ];

  return (
    <>
      <AuthGuard />
      <TopNav />
      <HelpCenterWrapper>
        <HelpCenterHeader>
          <h2>Help Center</h2>
        </HelpCenterHeader>
        <HelpCenterTable
          columns={columns}
          rowKey={(record) => record._id}
          dataSource={data}
          pagination={pagination}
          loading={loading}
          onChange={handleTableChange}
        />
      </HelpCenterWrapper>
    </>
  );
}

export default HelpCenterList;
