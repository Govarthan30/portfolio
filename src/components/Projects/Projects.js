import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chat from "../../Assets/Projects/chat.png";
import grocery from "../../Assets/Projects/grocery.png";
import chatbot from "../../Assets/Projects/chatbot.png";
import technovation from "../../Assets/Projects/damage.png";
import housePrice from "../../Assets/Projects/housePrice.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Two-way Chat Communication"
              description="Real-time chat system using Node.js, MongoDB, and Socket.io for seamless communication."
              ghLink="https://github.com/Govarthan30/Two-way-chat/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={grocery}
              isBlog={false}
              title="USSD-based Online Grocery Shop"
              description="Grocery ordering system without internet using USSD technology."
              ghLink="https://github.com/Govarthan30/OFFER-VERIFICATION-SYSTEM-USING-USSD"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={housePrice}
              isBlog={false}
              title="House Price Prediction Using Linear Regression"
              description="A machine learning model using linear regression to predict house prices based on various factors."
              ghLink="https://github.com/Govarthan30/House-Price-Prediction-Using-Linear-Regression"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="Mental Assistance Chatbot"
              description="AI-powered chatbot to provide mental health support and guidance."
              ghLink="https://github.com/Govarthan30/Mental-Health-Chatbot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={technovation}
              isBlog={false}
              title="Technovation Website"
              description="Website created for my department's symposium to manage event registrations and updates."
              ghLink="https://github.com/Govarthan30/Technovation"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
