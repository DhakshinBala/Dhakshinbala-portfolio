import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" data-aos="zoom-in">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="primary-header">
              Dhakshineshwara Balaji Selvaraj
            </span>{" "}
            from United Kingdom. I am a computer science master graduate and a
            passionate cybersecurity analyst.
            <br />
            <br />
            In addition to hacking , here are some other things I enjoy doing!
          </p>
          <ul>
            <li className="about-activity">
              <AiOutlineArrowRight /> Playing CTFs
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Driving
            </li>
            {/* <li className="about-activity">
              <AiOutlineArrowRight />
            </li> */}
            <li className="about-activity">
              <AiOutlineArrowRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
