import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import UICourseCard from "../../components/UICourseCard/UICourseCard";
import { courses } from "./courseItems";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Courses = ({ limit }) => {
  const navigate = useNavigate();
 
  const displayedCourses = limit ? courses.slice(0, limit) : courses;

  return (
    <div className="my-5">
      <header className="text-center my-5">
     

        <motion.h2
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          Our Courses
        </motion.h2>
        <motion.p
          className="text-secondary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }} 
        >
          Explore our industry-leading courses designed to empower your learning
          journey with practical skills.
        </motion.p>
      </header>
      <Container>
        <Row xs={1} md={2} lg={3} className="g-4">
          {displayedCourses.map((course, index) => (
            <Col key={course.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.3, delay: index * 0.1 }} 
              >
                <UICourseCard course={course} />
              </motion.div>
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
