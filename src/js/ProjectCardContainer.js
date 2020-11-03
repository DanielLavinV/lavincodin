import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ThisIsMe from "../images/this_is_me.jpg";

class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Card className="project-card">
        <div style={{overflow: "hidden"}}>
          <Card.Img variant="top" src={this.props.src} />
        </div>
        <Card.ImgOverlay>
          <Card.Title>{this.props.cardTitle}</Card.Title>
        </Card.ImgOverlay>
        <Card.Body>
          <Card.Text>{this.props.cardText}</Card.Text>
          <Button variant="primary" href={this.props.href} target="_blank">Check it out!</Button>
        </Card.Body>
      </Card>
    );
  }
}

/* Takes as props the cards as objects 
eg content={[{img: "image1.jpg", cardTitle:"text", cardText:"cardtext"}}*/
class ProjectCardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  renderColumns() {
    let output = [];
    for(const child of this.props.content) {
      output.push(
        <Col sm={12} 
        md={this.props.content.length < 3 ? 
          3 : Math.floor(12/this.props.content.length)}>
          <ProjectCard
            src={child.img}
            cardTitle={child.cardTitle}
            cardText={child.cardText}
            href={child.href}
          />
        </Col>
      );
    }
    return output;
  }

  render() {
    return (
      <Row>
        {this.renderColumns()}
      </Row>
    );
  }
}

export default ProjectCardContainer;
