import Sider from "antd/es/layout/Sider";
import { Menu } from "../lib/Menu";
import "../style/Home.css";
import { Breadcrumb, Button, Layout } from "antd";

const { Header, Content, Footer } = Layout;

function Home() {
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Header
          style={{
            position: "sticky",
            top: 0,
            height: "100px",
            zIndex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="demo-logo" />
        </Header>
        <Content style={{ padding: "0 48px" }}>
          <Button className="Useless-btn">Get Started {">"}</Button>
          <div className="Text">Simple Todo List</div>
          <div className="Text-1">My very own custom todo list</div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Hi I am Footer.</Footer>
      </Layout>
    </>
  );
}

export default Home;
