// src/components/Dashboard.js

import React from "react";
import { Col, Container, Row } from "reactstrap";
import TypingEffect from "./TypingEffect";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Container className="containe">
        <Row>
          <Col md={5}>
            <img src={process.env.PUBLIC_URL +"/photo.png"} alt="MyPic" width="100%" height="400px" />
          </Col>
          <Col md={7}>
            <TypingEffect />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
