import { Row, Col } from "reactstrap";

import ProjectItem from "./ProjectItem";
import classes from "./Project.module.css";

const Dummy_Projects = [
  {
    id: "1",
    title: "Kitchen Hero",
    description: "Food Order App",
    image: [
      {
        key: "https://picsum.photos/id/123/1200/600",
        src: "https://picsum.photos/id/123/1200/600",
      },
      {
        key: "https://picsum.photos/id/456/1200/600",
        src: "https://picsum.photos/id/456/1200/600",
      },
      {
        key: "https://picsum.photos/id/678/1200/600",
        src: "https://picsum.photos/id/678/1200/600",
      },
    ],
  },
  {
    id: "2",
    title: "Patient Management System",
    description: "Online Consultation",
    image: [
      {
        key: "https://picsum.photos/id/123/1200/600",
        src: "https://picsum.photos/id/123/1200/600",
      },
      {
        key: "https://picsum.photos/id/456/1200/600",
        src: "https://picsum.photos/id/456/1200/600",
      },
      {
        key: "https://picsum.photos/id/678/1200/600",
        src: "https://picsum.photos/id/678/1200/600",
      },
    ],
  },
  {
    id: "3",
    title: "Vigilance App",
    description: "Contact tracing solution app",
    image: [
      {
        key: "https://picsum.photos/id/123/1200/600",
        src: "https://picsum.photos/id/123/1200/600",
      },
      {
        key: "https://picsum.photos/id/456/1200/600",
        src: "https://picsum.photos/id/456/1200/600",
      },
      {
        key: "https://picsum.photos/id/678/1200/600",
        src: "https://picsum.photos/id/678/1200/600",
      },
    ],
  },
];

function Project() {
  const projectList = Dummy_Projects.map((project) => (
    <ProjectItem
      id={project.id}
      key={project.id}
      title={project.title}
      description={project.description}
      image={project.image}
    />
  ));
  return (
    <Row>
      <Col xs="12" lg="12" style={{ marginTop: "5px" }}>
        <div className={classes["project-banner"]}>MY PROJECTS</div>
      </Col>
      {projectList}
    </Row>
  );
}

export default Project;
