import React from "react";
import { Layout, Row, Col, Card, Statistic } from "antd";
import TopnavComponent from "./topnavComponent";
import AuthGuard from "./authGuards";

const { Header, Content, Footer } = Layout;

function Dashboard() {
  return (
    <>
      <AuthGuard />
      <Layout>
        <TopnavComponent />
        <Content style={{ padding: "20px" }}>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12} lg={6}>
              <Card>
                <Statistic title="Users" value={112893} />
              </Card>
            </Col>
            <Col xs={24} md={12} lg={6}>
              <Card>
                <Statistic title="Revenue" prefix="$" value={153942.32} />
              </Card>
            </Col>
            <Col xs={24} md={12} lg={6}>
              <Card>
                <Statistic title="Visitors" value={25384} />
              </Card>
            </Col>
            <Col xs={24} md={12} lg={6}>
              <Card>
                <Statistic title="Orders" value={3256} />
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
}

export default Dashboard;
