import { UncontrolledCarousel } from "reactstrap";

function ProjectImageCarousel(props) {

    
  return (
    <UncontrolledCarousel
      items={props.image}
    />
  );
}

export default ProjectImageCarousel;
