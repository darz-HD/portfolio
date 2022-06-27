import { Card, Col, CardTitle, CardText, Button } from "reactstrap";

import ProjectImageCarousel from "./ProjectImageCarousel";

function ProjectItem(props) {
  console.log(props.image);
  return (
    <Col lg="4" style={{ padding: "20px" }}>
      <Card body>
        <CardTitle tag="h5">{props.title}</CardTitle>
        <ProjectImageCarousel image={props.image} />
        <CardText>{props.description}</CardText>
        <Button>Details</Button>
      </Card>
    </Col>
  );
}

export default ProjectItem;
