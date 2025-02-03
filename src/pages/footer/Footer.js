import React from "react";
import { Container, Row, Col, Image, Nav, ListGroup } from "react-bootstrap";
import { CiInstagram, CiYoutube, CiLinkedin } from "react-icons/ci";
import logo from "../../assets/images/logofinal.jpg";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        <Row className="g-4">
          <Col md={3}>
            <div className="d-flex align-items-center mb-3">
              <Image
                src={logo}
                alt="Devupvers Logo"
                width={50}
                rounded
                className="me-2"
              />
              <h5 className="fw-bold mb-0">Devupvers</h5>
            </div>
            <p className="text-light">
              Devupvers offers industrial training in emerging technologies like
              Python, Data Science, Artificial Intelligence, and DevOps in
              Telugu, English, Tamil.
            </p>
          </Col>

          <Col md={3}>
            <h5 className="fw-bold mb-3">Follow Us</h5>
            <Nav className="flex-column">
              <Nav.Link
                href="https://youtube.com/@broadcodes"
                target="_blank"
                className="text-light d-flex align-items-center mb-2"
              >
                <CiYoutube className="me-2" /> YouTube
              </Nav.Link>
              <Nav.Link
                href="https://www.instagram.com/broadcodes"
                target="_blank"
                className="text-light d-flex align-items-center mb-2"
              >
                <CiInstagram className="me-2" /> Instagram
              </Nav.Link>
              <Nav.Link
                href="https://www.linkedin.com/school/broadcodes"
                target="_blank"
                className="text-light d-flex align-items-center"
              >
                <CiLinkedin className="me-2" /> LinkedIn
              </Nav.Link>
            </Nav>
          </Col>

          <Col md={3}>
            <h5 className="fw-bold mb-3">Courses</h5>
            <ListGroup variant="flush">
              <ListGroup.Item
                action
                href="/python"
                className="bg-dark text-light border-0"
              >
                Python
              </ListGroup.Item>
              <ListGroup.Item
                action
                href="/devops"
                className="bg-dark text-light border-0"
              >
                DevOps
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={3}>
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ListGroup variant="flush">
              <ListGroup.Item
                action
                href="/"
                className="bg-dark text-light border-0"
              >
                Home
              </ListGroup.Item>
              <ListGroup.Item
                action
                href="/contact"
                className="bg-dark text-light border-0"
              >
                Contact Us
              </ListGroup.Item>
              <ListGroup.Item
                action
                href="/privacy"
                className="bg-dark text-light border-0"
              >
                Privacy
              </ListGroup.Item>
              <ListGroup.Item
                action
                href="/terms"
                className="bg-dark text-light border-0"
              >
                Terms and Conditions
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>

        <hr className=" my-4" />

        <Row>
          <Col className="text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Devupvers. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
