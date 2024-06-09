import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Workcards from "./WorkCards";

import Cisco from "../../Assets/Work/cisco.png";
import VTF from "../../Assets/Work/vtf.png";
import Vcloud from "../../Assets/Work/vcloud.jpeg";

import "./work.css";

function Work() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          <strong className="Fluorescent-Blue">Work Experience </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <div className="project-card-wrapper">
              <Workcards
                imgPath={Vcloud}
                title="Vcloud Point"
                description={
                  <>
                    <p>
                      <center>
                        <strong>Cyber Security Analyst</strong>
                        <br />
                        July 2021 – Sep 2022
                      </center>
                    </p>
                    <ul>
                      <li>
                        Conducted security assessments and audits of vMatrix
                        Server Manager software and associated zero client
                        infrastructure, identifying over 15 vulnerabilities and
                        weaknesses to ensure a robust security posture.
                      </li>
                      <li>
                        Implemented and maintained security controls, including
                        access controls, encryption mechanisms, and intrusion
                        detection systems, to prevent unauthorized access and
                        data breaches, resulting in a 40% reduction in security
                        incidents.
                      </li>
                      <li>
                        Monitored system logs and network traffic, promptly
                        responding to mitigate threats and ensuring the
                        integrity and confidentiality of sensitive information,
                        achieving an average incident response time of less than
                        1 hour.
                      </li>
                      <li>
                        Provided security awareness training to end users and
                        administrators, promoting a culture of cybersecurity
                        awareness and best practices to mitigate risks
                        effectively, resulting in a 35% improvement in overall
                        cybersecurity posture.
                      </li>
                    </ul>
                  </>
                }
              />
            </div>
          </Col>

          <Col md={6} lg={4} className="project-card">
            <div className="project-card-wrapper">
              <Workcards
                imgPath={VTF}
                title="Virtually Testing Foundation"
                description={
                  <>
                    <p>
                      <center>
                        <strong>Penetration Testing Internship</strong>
                        <br />
                        Apr 2021 – Jun 2021
                      </center>
                    </p>
                    <ul>
                      <li>
                        Focused on web application penetration testing,
                        specifically targeting OWASP’s Top 10 vulnerabilities
                        using Linux.
                      </li>
                      <li>
                        The primary task involved identifying vulnerabilities in
                        lab-designed web applications, determining the type of
                        vulnerability, and successfully exploiting them.
                      </li>
                      <li>
                        Utilizing tools such as Burp Collaborator, Intruder, and
                        Repeater, efficiently checked and exploited 7
                        vulnerabilities like CSRF and SSRF attacks,
                        demonstrating proficiency and time-saving techniques.
                      </li>
                      <li>
                        This practical experience enhanced my skills in
                        navigating and exploiting vulnerabilities, while also
                        reinforcing my ability to write professional penetration
                        test reports that effectively communicated the impact
                        and severity of identified bugs.
                      </li>
                      <li>
                        Additionally, in a real-time monitoring setting,
                        employed Intrusion Detection and Prevention (IDP/IPS)
                        systems to detect and prevent 3 threats promptly,
                        showcasing my capability to respond swiftly to security
                        incidents.
                      </li>
                    </ul>
                  </>
                }
              />
            </div>
          </Col>

          <Col md={6} lg={4} className="project-card">
            <div className="project-card-wrapper">
              <Workcards
                imgPath={Cisco}
                
                title="Cisco Networking Academy"
                description={
                  <>
                    <p>
                      <center>
                        <strong>Cyber Security Virtual Internship</strong>
                        <br />
                        Jan 2021 – Mar 2021
                      </center>
                    </p>
                    <ul>
                      <li>
                        In a role where data confidentiality and availability
                        were paramount, implemented proper procedures to ensure
                        the secure handling of sensitive information.
                      </li>
                      <li>
                        The task involved developing and implementing procedures
                        to safeguard data confidentiality and availability
                        effectively.
                      </li>
                      <li>
                        Created digital models of IP networks and IoT systems
                        using Cisco Packet Tracer, ensuring a comprehensive
                        understanding of the network architecture for secure
                        data handling.
                      </li>
                      <li>
                        Additionally, demonstrated proficiency in securely
                        transferring files by employing the Secure File Transfer
                        Protocol via SSL, mitigating the risk of unauthorized
                        access during file transfers.
                      </li>
                      <li>
                        These actions contributed to an improved data security
                        posture, with established procedures and secure
                        protocols enhancing data confidentiality and
                        availability measures within the organization.
                      </li>
                    </ul>
                  </>
                }
              />
            </div>
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Work;
