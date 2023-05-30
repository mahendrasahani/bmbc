import React from "react";
import { Menu, Dropdown } from "antd";
import { User } from "react-feather";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const { SubMenu } = Menu;

const TopNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #001529;
  height: 64px;
  padding: 0 20px;
`;

const UserMenu = styled(Dropdown)`
  display: flex;
  align-items: center;
`;

const UserIcon = styled(User)`
  display: block;
  height: 24px;
  width: 24px;
  cursor: pointer;
`;

function TopNav() {
  const userMenu = (
    <Menu>
      <Menu.Item key="logout">Logout</Menu.Item>
    </Menu>
  );

  return (
    <TopNavWrapper>
      <Menu mode="horizontal" theme="dark">
        <Menu.Item key="home"><Link to="/admin/dashboard">Home</Link></Menu.Item>
        <Menu.Item key="users"><Link to="/admin/user">Users</Link></Menu.Item>
        <SubMenu key="gm" title="General Management">
          <Menu.Item key="institute">
            <Link to="/admin/institute">Institute</Link>
          </Menu.Item>
          <Menu.Item key="category">
            <Link to="/admin/category">Category</Link>
          </Menu.Item>

          <Menu.Item key="plan">
            <Link to="/admin/plan">Plan</Link>
          </Menu.Item>

          <Menu.Item key="batch">
            <Link to="/admin/batch">Batch</Link>
          </Menu.Item>

          <Menu.Item key="exam">
            <Link to="/admin/exam">Exam</Link>
          </Menu.Item>

          <Menu.Item key="location">
            <Link to="/admin/location">Location</Link>
          </Menu.Item>

          <Menu.Item key="branch">
            <Link to="/admin/branch">Branch</Link>
          </Menu.Item>

          <Menu.Item key="offer">
            <Link to="/admin/offer">Offer</Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="blog"><Link to="/admin/blog">Blog</Link></Menu.Item>
        <Menu.Item key="helpCenter"><Link to="/admin/helpCenter">Help Center</Link></Menu.Item>
        <Menu.Item key="institueRating"><Link to="/admin/instituteRating">Institute Rating</Link></Menu.Item>
      </Menu>
      <UserMenu overlay={userMenu} placement="bottomRight">
        <UserIcon style={{ color: "white" }} />
      </UserMenu>
    </TopNavWrapper>
  );
}

export default TopNav;
