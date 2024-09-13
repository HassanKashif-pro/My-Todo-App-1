import React from "react";
import "../style/ToDo.css";
import { Layout, Input, Button, Image, Flex, AutoComplete } from "antd";
import { FaBars } from "react-icons/fa";
import { Content } from "antd/es/layout/layout";
import { Link } from "react-router-dom";
import TaskCards from "../lib/TaskCards";

const { Header } = Layout;

function Todo() {
  const submitButton = () => {
    console.log("Submit button clicked");
  };
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
          <Button className="arrow-btn" onSubmit={submitButton}>
            {">"}
          </Button>
        </div>
      </Header>
      <Content className="content">
        <div>
          <TaskCards />
          <h1 className="h1">Completed</h1>
        </div>
      </Content>
    </Layout>
  );
}

export default Todo;
