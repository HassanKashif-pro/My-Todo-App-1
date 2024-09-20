import React, { useState, useEffect } from "react";
import "../style/Home.css";
import { Image, Button, Layout, Alert } from "antd";
import { Link, useNavigate } from "react-router-dom";

const { Header, Content } = Layout;

function Home() {
  const navigate = useNavigate(); // Initialize navigate
  const [noticeVisible, setNoticeVisible] = useState(true); // State to manage notice visibility

  // Hide the notice after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setNoticeVisible(false);
    }, 5000); // Hide after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const getStartedBtn = () => {
    navigate("/todo"); // Use navigate instead of redirect
  };

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
            <Image src="/Logo.png" alt="Home" preview={false} />
          </Link>
        </Header>

        <Content style={{ padding: "0 48px", backgroundColor: "#38404b" }}>
          {/* Conditional rendering of the notice */}
          {noticeVisible && (
            <Alert
              message="Looks Better in 67% view"
              type="info"
              showIcon
              closable
              onClose={() => setNoticeVisible(false)} // Manual close option
            />
          )}

          <Button className="Useless-btn" onClick={getStartedBtn}>
            Get Started {">"}
          </Button>

          <div className="Text">Simple Todo List</div>
          <div className="Text-1">My very own custom todo list</div>
        </Content>
      </Layout>
    </>
  );
}

export default Home;
