import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaRegThumbsUp, FaUsers, FaLaptopCode, FaAward } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4" data-aos="fade-up">
        Why Choose Us
      </h2>
      <Row className="g-4">
        <Col md={6} lg={3} data-aos="fade-up">
          <Card className="h-100 border-0 shadow-sm text-center">
            <Card.Body>
              <FaRegThumbsUp className="text-warning mb-3" size={40} />
              <Card.Title>Quality Content</Card.Title>
              <Card.Text>
                Our courses are crafted by industry experts to ensure you get
                the best learning experience.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={3} data-aos="fade-up" data-aos-delay="200">
          <Card className="h-100 border-0 shadow-sm text-center">
            <Card.Body>
              <FaUsers className="text-warning mb-3" size={40} />
              <Card.Title>Expert Instructors</Card.Title>
              <Card.Text>
                Learn from seasoned professionals who are passionate about
                teaching and guiding you on your journey.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={3} data-aos="fade-up" data-aos-delay="400">
          <Card className="h-100 border-0 shadow-sm text-center">
            <Card.Body>
              <FaLaptopCode className="text-warning mb-3" size={40} />
              <Card.Title>Hands-on Learning</Card.Title>
              <Card.Text>
                Gain practical skills with real-world projects, exercises, and
                hands-on coding examples.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={3} data-aos="fade-up" data-aos-delay="600">
          <Card className="h-100 border-0 shadow-sm text-center">
            <Card.Body>
              <FaAward className="text-warning mb-3" size={40} />
              <Card.Title>Certification</Card.Title>
              <Card.Text>
                Get certified upon completion to boost your career prospects and
                showcase your skills.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default WhyChooseUs;
