import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button, Table } from "antd";
import { Link } from "react-router-dom";
import axios from 'axios';
const UserManagementWrapper = styled.div`
  padding: 20px;
`;


const UserManagementTable = styled(Table)`
  background-color: #fff;
  border-radius: 4px;
`;


const BlogList = () =>
{
    const apiURL = process.env.REACT_APP_API_URL;
    const [data, setData] = useState([])
    const [pagination, setPagination] = useState({});
    const [loading, setLoading] = useState(false);


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


    // FETCH BLOG LIST
    const fetchBlog = async () =>
    {
        setLoading(true);
        const res = await axios.get(apiURL + `blog/list`)
        try
        {
            const paginationObj = { ...pagination };
            paginationObj.total = res.data.data.length;
            setData(res.data.data);
            setLoading(false);
            setPagination(paginationObj);

        } catch (error)
        {

        }
    }


    const columns = [
        {
            title: "Views",
            dataIndex: "views"
        },
        {
            title: "Message",
            dataIndex: "message",
            width: '60%',
            textAlign:'justify'
        },
        {
            title: "Created At",
            dataIndex: "createdAt",
        },
        {
            title: "Action",
            dataIndex: "_id",
            width:"200px",
            render: (record) => (
                <>
                    <Button type="primary" style={{ marginRight: 2 }}>
                        <Link to={`/admin/editblog/${record}`}>Edit</Link>
                    </Button>
                    <Button type="info" style={{ marginRight: 2 }}>
                        <Link to={`/admin/blogdetail/${record}`}>View</Link>
                    </Button>
                </>
            ),
        },
    ];

    useEffect(() =>
    {
        fetchBlog()
        // eslint-disable-next-line 
    }, [])

    return (
        <>
            <UserManagementWrapper>
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
    )
}

export default BlogList