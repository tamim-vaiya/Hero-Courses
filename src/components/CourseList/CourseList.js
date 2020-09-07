import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const CourseList = (props) => {
  const { name, img, title, description, price } = props.course;
  const btnStyle = {
    backgroundColor: "#7167ff",
    border: "1px solid #7167ff"
  }
  const boxStyle = {
     width: '95%',
      margin: '20px auto',
       boxShadow:'5px 5px 10px gray'
       }
  return (
    <Container>
      <Row>
        <Card style={boxStyle}>
          <Col> <Card.Img variant="top" src={img} /></Col>
          <Col>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{title}</Card.Text>
              <Card.Text>{description}</Card.Text>
              <Card.Text><h2>${price}</h2></Card.Text>
              <Button style={btnStyle} onClick={() => props.handleAddEvent(props.course)}>Enroll Now</Button>
            </Card.Body>
          </Col>
        </Card>
      </Row>

    </Container>

  );
};

export default CourseList;