import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UICourseCard from "../../components/UICourseCard/UICourseCard";
import { courses } from "./courseItems";

const Courses = ({ limit }) => {
  const displayedCourses = limit ? courses.slice(0, limit) : courses;

  return (
    <div className="my-5">
      <header className="text-center my-5">
        <h2>Our Courses</h2>
        <p className="text-secondary text-center">
          Explore our industry-leading courses designed to empower your learning
          journey with practical skills.
        </p>
      </header>
      <Container>
        <Row xs={1} md={2} lg={3} className="g-4">
          {displayedCourses.map((course) => (
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
