import Sider from "antd/es/layout/Sider";
import { Menu } from "../lib/Menu";
import "../style/Home.css";
import { Image, Button, Layout } from "antd";
import { Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;

function Home() {
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Header
          style={{
            position: "sticky",
            top: 0,
            height: "150px",
            backgroundColor: "#38404b",
            zIndex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Link to="/Home">
            <Image src="/Logo.png" alt="/Home" preview={false} />
          </Link>
        </Header>
        <Content style={{ padding: "0 48px", backgroundColor: "#38404b" }}>
          <Button className="Useless-btn">Get Started {">"}</Button>
          <div className="Text">Simple Todo List</div>
          <div className="Text-1">My very own custom todo list</div>
        </Content>
      </Layout>
    </>
  );
}

export default Home;
