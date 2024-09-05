import React from "react";
import "../style/ToDo.css";
import { Layout, Input, Button, Image } from "antd";
import { FaBars } from "react-icons/fa";
import { Content } from "antd/es/layout/layout";
import { Link } from "react-router-dom";

const { Header } = Layout;

function Todo() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header className="navbar">
        <Link to="/Home">
          <Image
            src="/Logo.png"
            alt="/Home"
            preview={false}
            style={{ height: "70px" }}
          />
        </Link>
        <div className="task-form">
          <Input
            type="text"
            placeholder="Add new task"
            className="task-input"
          />
          <Button className="arrow-btn"></Button>
        </div>
      </Header>
      <Content></Content>
    </Layout>
  );
}

export default Todo;
