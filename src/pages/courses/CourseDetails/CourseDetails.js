import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import { primaryColor } from "../../../constants/colors";
import { motion } from "framer-motion";

const CourseDetails = () => {
  const location = useLocation();
  const course = location.state?.course;

  if (!course) return <p>Course not found!</p>;

  return (
    <Container className="my-5">
      <Row>
        <Col md={8}>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <Card>
              <Card.Body>
                <Card.Title>Course Title: {course.title}</Card.Title>
                <Card.Text>{course.description}</Card.Text>
                <h5>About the Course</h5>
                <p>{course.about}</p>
                <ul>
                  <li>Course Duration: {course.duration}</li>
                  <li>Level: {course.level}</li>
                  <li>Price: ${course.price}</li>
                </ul>
                <Button variant="warning">Enroll Now</Button>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
        <Col md={4}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <Image src={course.image} alt="Course" className="img-fluid" />
            <div className="embed-responsive embed-responsive-16by9 my-3">
              <iframe
                className="embed-responsive-item"
                src={course.youtubeVideo}
                allowFullScreen
                title="Course Introduction Video"
                style={{ width: "100%", height: "250px" }}
              />
            </div>
          </motion.div>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <Card.Header style={{ backgroundColor: primaryColor }} as="h5">
                Course Curriculum
              </Card.Header>
              <Card.Body>
                <motion.ul
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {course.curriculum.map((week, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      {week}
                    </motion.li>
                  ))}
                </motion.ul>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default CourseDetails;
