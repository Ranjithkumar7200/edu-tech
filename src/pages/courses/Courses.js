import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UICourseCard from "../../components/UICourseCard";
import { courses } from "./courseItems";

const Courses = () => {
  return (
    <div className="mt-5">
      <header className="text-center my-5">
        <h2>Our Tracks</h2>
        <p className="text-secondary text-center">
          Explore our industry-leading courses designed to empower your learning
          journey with practical skills.
        </p>
      </header>
      <Container>
        <Row xs={1} md={2} lg={3} className="g-4">
          {courses.map((course) => (
            <Col key={course.id}>
              <UICourseCard course={course} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
