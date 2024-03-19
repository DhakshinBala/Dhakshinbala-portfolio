import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import PrivateChat from "../../Assets/Projects/PrivateChat.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import Ecart from "../../Assets/Projects/ecart.png";
import ExpenseTracker from "../../Assets/Projects/ExpenseTracker.png";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Ecart}
              title="Software Bug Tracking and Reporting Tool"
              description="This is a bug reporting website that uses React.js + MUI and CSS in the front end and NodeJs and express js in backend and MongoDb as Database."
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              title="Heart Disease Identification Using Heart Sound"
              description="The scope of this project is to detect heart disease using the heart sound of the patient using 1D Convolution Neural Network(CNN)."
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={PrivateChat}
              title="Hospital Database Management System"
              description="The system provides all the details regarding the hospital, doctors, patients, appointments, medical records, bed numbers, fares and so on which are stored in the database."
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={ExpenseTracker}
              title="SRM Campus Network"
              description="Designed a secured network for the SRM Campus using a Cisco packet tracer. Designed and configured the network to transfer the packets securely. "
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
