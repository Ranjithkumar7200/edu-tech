import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import logo from "../../assets/images/logo.jpeg";
import "./EduTechNavbar.css";

const EduTechNavbar = () => {
  const [activeLink, setActiveLink] = useState("#home");

  const handleSelect = (eventKey) => {
    setActiveLink(eventKey);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      sticky="top"
      className="shadow-sm"
      onSelect={handleSelect}
    >
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            src={logo}
            alt="EduTech Logo"
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
          />
          EduTech
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto" activeKey={activeLink}>
            <Nav.Link href="#home" className="px-3">
              <span
                className={`nav-link-custom ${
                  activeLink === "#home" ? "active" : ""
                }`}
              >
                Home
              </span>
            </Nav.Link>
            <Nav.Link href="#courses" className="px-3">
              <span
                className={`nav-link-custom ${
                  activeLink === "#courses" ? "active" : ""
                }`}
              >
                Courses
              </span>
            </Nav.Link>
            <Nav.Link href="#programs" className="px-3">
              <span
                className={`nav-link-custom ${
                  activeLink === "#programs" ? "active" : ""
                }`}
              >
                Programs
              </span>
            </Nav.Link>
            <Nav.Link href="#about" className="px-3">
              <span
                className={`nav-link-custom ${
                  activeLink === "#about" ? "active" : ""
                }`}
              >
                About Us
              </span>
            </Nav.Link>
            <Nav.Link href="#contact" className="px-3">
              <span
                className={`nav-link-custom ${
                  activeLink === "#contact" ? "active" : ""
                }`}
              >
                Contact
              </span>
            </Nav.Link>
          </Nav>

          <Nav className="d-flex">
            <Button variant="warning" href="#join-group">
              Join Group
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default EduTechNavbar;
