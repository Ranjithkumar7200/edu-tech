import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./CoursesPage.css";
import course from "../../assets/images/logo.jpeg";

const courses = [
  {
    title: "Web Development Bootcamp",
    description: "Learn to build websites and applications from scratch.",
    image: course,
    rating: "4.8",
    price: "₹199",
  },
  {
    title: "Data Science with Python",
    description: "Master data analysis and machine learning.",
    image: course,
    rating: "4.7",
    price: "₹299",
  },
  {
    title: "Digital Marketing Essentials",
    description: "Grow your business using digital marketing strategies.",
    image: course,
    rating: "4.6",
    price: "₹149",
  },
];

const Courses = () => {
  return (
    <div className="courses-page">
      <header className="courses-header">
        <h1>Explore Our Courses</h1>
      </header>
      <Container>
        <Row className="g-4">
          {courses.map((course, index) => (
            <Col md={4} key={index}>
              <Card className="course-card">
                <Card.Img variant="top" src={course.image} alt="courses" />
                <Card.Body>
                  <Card.Title>{course.title}</Card.Title>
                  <Card.Text>{course.description}</Card.Text>
                  <div className="course-footer">
                    <span className="course-rating">
                      Rating: {course.rating}
                    </span>
                    <span className="course-price">{course.price}</span>
                  </div>
                  <Button
                    style={{ backgroundColor: "#578ac7", border: "none" }}
                    className="mt-3"
                  >
                    Enroll Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
