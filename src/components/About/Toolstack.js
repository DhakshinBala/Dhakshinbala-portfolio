import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiGithub,
  SiUbuntu,
  SiKalilinux,
  SiVmware,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <SiKalilinux />
          <span className="icon-label">Linux </span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <SiUbuntu />
          <span className="icon-label">Ubuntu</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <SiVisualstudiocode />
          <span className="icon-label">VS Code</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <SiPostman />
          <span className="icon-label">Postman</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <SiVmware />
          <span className="icon-label">VMware</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <SiGithub />
          <span className="icon-label">GitHub</span>
        </div>
      </Col>
    </Row>
  );
}

export default Toolstack;
