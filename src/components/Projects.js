// src/components/Projects.js

import React, { useState } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import './Projects.css';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('python');

  const toggleTab = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Container>
      <h1>Projects</h1>
      <Row>
        {/* Main Projects Section */}
        {[1, 2, 3].map((item) => (
          <Col md={4} key={item}>
            <Card>
              <CardBody>
                <CardTitle tag="h5">Project Title {item}</CardTitle>
                <CardText>Description of project {item}.</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Practice Projects Section with Tabs */}
      <Nav tabs>
        {['python', 'javascript', 'react', 'java'].map((language) => (
          <NavItem key={language}>
            <NavLink
              className={classnames({ active: activeTab === language })}
              onClick={() => { toggleTab(language); }}
            >
              {language.charAt(0).toUpperCase() + language.slice(1)}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <TabContent activeTab={activeTab}>
        {['python', 'javascript', 'react', 'java'].map((language) => (
          <TabPane tabId={language} key={language}>
            <Row>
              <Col sm="12">
                <h4>{language.charAt(0).toUpperCase() + language.slice(1)} Practice Projects</h4>
                {/* List of projects for each language */}
              </Col>
            </Row>
          </TabPane>
        ))}
      </TabContent>
    </Container>
  );
};

export default Projects;
