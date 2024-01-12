// src/components/Projects.js

import classnames from "classnames";
import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import "./Projects.css";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("Python");

  const toggleTab = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const practice_projects = [
    {
      language: "Python",
      projects: [
        {
          title: "Wallet Watch",
          Description: "",
          link:""
        },
        {
          title: "Wallet Watch",
          Description: "",
          link:""
        },
      ],
    },
    {
      language: "JavaScript",
      projects: [
        {
          title: "To Do List",
          Description: "",
          link:""
        },
        {
          title: "Wallet Watch",
          Description: "",
          link:""
        },
      ],
    },
    {
      language: "React",
      projects: [
        {
          title: "Monoster Rolodex",
          Description: "",
          link:""
        },
        {
          title: "JS Project",
          Description: "",
          link:""
        },
      ],
    },
    {
      language: "Java",
      projects: [
        {
          title: "Java Project 1",
          Description: "",
          link:""
        },
        {
          title: "Java Project 2",
          Description: "",
          link:""
        },
      ],
    },
  ];
  const projects_details = [
    {
      title: "Civicx",
      Description: "",
      link: "https://github.com/pardhasaradhichodey/Cloud_Computing_Project",
    },
    {
      title: "Covid Prediction",
      Description: "",
      link: "https://github.com/pardhasaradhichodey/finalProjectUndergrads",
    },
    {
      title: "Movie Ticket Booking Application",
      Description: "",
      link: "https://github.com/pardhasaradhichodey/InternshipProject.Net",
    },
  ];
  return (
    <Container>
      <h1>Projects</h1>
      <Row>
        {/* Main Projects Section */}
        {projects_details.map((item) => (
          <Col md={4} key={item}>
            <Card className="projectcard">
              <CardBody>
                <CardTitle tag="h5"> {item.title}</CardTitle>
                <CardText>Description of project {item.Description}.</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Practice Projects Section with Tabs */}
      <Nav tabs>
        {practice_projects.map((language) => (
          <NavItem key={language.language}>
            <NavLink
              className={classnames({
                active: activeTab === language.language,
              })}
              onClick={() => {
                toggleTab(language.language);
              }}
            >
              {language.language}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <TabContent activeTab={activeTab}>
        {practice_projects.map((language) => (
          <TabPane tabId={language.language} key={language.language}>
            <Row>
              <Col sm="12">
                <h4>{language.language} Practice Projects</h4>
                {/* List of projects for each language */}
                <Container>
                  <Row>
                    {language.projects.map((project) => (
                      <Col>
                        <Card className="projectcard">
                          <CardBody>
                            <CardTitle tag="h5"> {project.title}</CardTitle>
                            <CardText>{project.Description}.</CardText>
                          </CardBody>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Container>
              </Col>
            </Row>
          </TabPane>
        ))}
      </TabContent>
    </Container>
  );
};

export default Projects;
