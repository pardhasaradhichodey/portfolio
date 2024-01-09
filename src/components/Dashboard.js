// src/components/Dashboard.js

import React from "react";
import { Col, Container, Row } from "reactstrap";
import TypingEffect from "./TypingEffect";
import "./dashboard.css";


const Dashboard = () => {
  return (
    <div className="dashboard">
    <img src={process.env.PUBLIC_URL +"/photo1.png"} alt="MyPic" className="bimg" height="500px" />
      <Container className="containe">
        <Row>
          <Col md={4}>
            
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
