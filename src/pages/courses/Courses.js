import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import UICourseCard from "../../components/UICourseCard/UICourseCard";
import { courses } from "./courseItems";
import { useNavigate } from "react-router-dom";

const Courses = ({ limit }) => {
  const navigate = useNavigate();
  const displayedCourses = limit ? courses.slice(0, limit) : courses;

  return (
    <div className="my-5">
      <header className="text-center my-5">
        <h2>Our Courses</h2>
        <p className="text-secondary text-center">
          Explore our industry-leading courses designed to empower your learning journey with practical skills.
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
        <div className="d-flex align-items-center justify-content-center my-4">
          {limit === 3 && (
            <Button
              onClick={() => navigate('/courses')}
              className="text-light"
              variant="warning"
              type="button"
            >
              Get More Courses
            </Button>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Courses;
