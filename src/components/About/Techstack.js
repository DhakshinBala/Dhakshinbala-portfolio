import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiPython,
} from "react-icons/di";
import {
  SiFirebase,
  SiTailwindcss,
  SiRedux,
  SiMui,
  SiOwasp,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <DiJavascript1 />
          <span className="icon-label">JavaScript</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <DiPython />
          <span className="icon-label">Python</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <SiTailwindcss />
          <span className="icon-label">Tailwind CSS</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <DiNodejs />
          <span className="icon-label">Node.js</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <DiReact />
          <span className="icon-label">React</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <SiOwasp />
          <span className="icon-label">OWASP</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <DiMongodb />
          <span className="icon-label">MongoDB</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <DiGit />
          <span className="icon-label">Git</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <SiFirebase />
          <span className="icon-label">Firebase</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <SiRedux />
          <span className="icon-label">Redux</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <SiMui />
          <span className="icon-label">Material-UI</span>
        </div>
      </Col>
    </Row>
  );
}

export default Techstack;
