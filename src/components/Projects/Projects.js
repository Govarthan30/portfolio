import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import calendar from "../../Assets/Projects/calender.png";
import blog from "../../Assets/Projects/blog.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import chrono from "../../Assets/Projects/gift.png";

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
              imgPath={calendar}
              isBlog={false}
              title="Task Goal Calendar App"
              description="Feature-rich calendar and task manager app with drag-and-drop scheduling, goal tracking, and modals."
              ghLink="https://github.com/Govarthan30/calender-app"
              demoLink="https://calender-app-1-cicl.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blogs Editor App"
              description="Platform to create, edit, delete, and preview blog posts with real-time UI updates and dynamic rendering."
              ghLink="https://github.com/Govarthan30/blogs"
              demoLink="https://blogs-1-acln.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio Website"
              description="Personal portfolio with animations, responsive layout, and project showcase, built using React and Framer Motion."
              ghLink="https://github.com/Govarthan30/portfolio"
              demoLink="https://govarthan.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
          <ProjectCard
            imgPath={chrono}
            isBlog={false}
            title="ChronoGift"
            description="An ongoing digital gift platform where users upload a gift, set a timer and passcode, and the recipient can unlock it only after the timer ends. Includes Google/Email login, secure sharing, and mobile responsiveness."
            ghLink="https://github.com/Govarthan30/chrono-gift"
            demoLink="https://chrono-gift-gova.onrender.com/"
          />
        </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
