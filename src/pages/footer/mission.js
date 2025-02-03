import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { Award, Target, Globe } from "lucide-react";

const Mission = () => {
  return (
    <Container  className="py-5">
      <Row className="mb-4">
        <Col>
          <h2 className="text-center display-6 fw-bold">
            Transforming <span className="mainColor">Education</span>,
            Empowering <span className="mainColor">Innovation</span>
          </h2>
        </Col>
      </Row>

      <Row className="g-4">
        <Col md={6}>
          <Card className="h-100 border shadow-0">
            <Card.Header
              className="bg-warning text-white d-flex align-items-center"
              as="h3"
            >
              <Award className="me-3" size={32} />
              Our <span className="ms-2 text-warning">Mission</span>
            </Card.Header>
            <Card.Body>
              <p className="lead text-muted">
                At Devupvers, we are redefining the future of education by
                empowering aspiring developers through immersive, hands-on
                learning experiences.
              </p>
              <div className="d-flex align-items-center">
                <Badge bg="warning" pill className="me-2">
                  Practical Learning
                </Badge>
                <Badge bg="secondary" pill>
                  Real-World Projects
                </Badge>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="h-100 border shadow-0">
            <Card.Header
              className="bg-warning text-white d-flex align-items-center"
              as="h3"
            >
              <Target className="me-3" size={32} />
              Our <span className="ms-2 text-white">Vision</span>
            </Card.Header>
            <Card.Body>
              <p className="lead text-muted">
                We envision a world where education transcends boundaries,
                providing equal access to quality learning experiences.
              </p>
              <div className="d-flex align-items-center">
                <Badge bg="warning" pill className="me-2">
                  Inclusive Learning
                </Badge>
                <Badge bg="secondary" pill>
                  Tech Innovation
                </Badge>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <Card className="border shadow-0">
            <Card.Header
              className="bg-warning text-white d-flex align-items-center"
              as="h3"
            >
              <Globe className="me-3" size={32} />
              Our <span className="ms-2 text-white">Impact</span>
            </Card.Header>
            <Card.Body>
              <p className="text-muted">
                By fostering a collaborative learning environment and providing
                expert guidance, we're shaping a future where technological
                advancement is accessible to all.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Mission;
