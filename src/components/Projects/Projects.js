import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import chatify from "../../Assets/Projects/V1.png";
import bitsOfCode from "../../Assets/Projects/v3.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Sorting Algorithm Visualizer"
              description="Sorting Visualizer is a web app for visualizing a bunch of different sorting algorithms. Sorts the different algorithms like Bubble sort,Selection sort,Insertion sort,Merge sort,Quick sort,Heap sort. This app generally sorts 6 different types of sorting algorithm with the functionality of Processing Speed Control and Array size control. Each element value is represented by the size of the bar and the algorithm sort them by placing the smallest elements on the left and the biggest on the right.Tech:HTML,CSS,Javascript."
              ghLink="https://github.com/TejasSaraf/Sorting-App"
              demoLink="https://sortingalgoapp.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="iBlogSpace"
              description="iBlogSpace is a fully responsive web app.Recreated a web based personal blog template where user can write blogs.This web app has the functionality of add,delete,search blog.Tech:Html,Css,Javascript."
              ghLink="https://github.com/TejasSaraf/iBlogSpace"
              demoLink="https://iblogspace.netlify.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
