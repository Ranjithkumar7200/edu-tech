import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpeg";
import "./EduTechNavbar.css";

const EduTechNavbar = () => {
  const [activeLink, setActiveLink] = useState("/");

  const handleSelect = (path) => {
    setActiveLink(path);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="light"
      sticky="top"
      className=""
      style={{ backgroundColor: "#FDF8EE" }}
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="d-flex align-items-center"
        >
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
            <Nav.Link
              as={Link}
              to="/"
              className="px-3"
              onClick={() => handleSelect("/")}
            >
              <span
                className={`nav-link-custom ${
                  activeLink === "/" ? "active" : ""
                }`}
              >
                Home
              </span>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/courses"
              className="px-3"
              onClick={() => handleSelect("/courses")}
            >
              <span
                className={`nav-link-custom ${
                  activeLink === "/courses" ? "active" : ""
                }`}
              >
                Courses
              </span>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/community"
              className="px-3"
              onClick={() => handleSelect("/community")}
            >
              <span
                className={`nav-link-custom ${
                  activeLink === "/community" ? "active" : ""
                }`}
              >
                Community
              </span>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className="px-3"
              onClick={() => handleSelect("/about")}
            >
              <span
                className={`nav-link-custom ${
                  activeLink === "/about" ? "active" : ""
                }`}
              >
                About Us
              </span>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className="px-3"
              onClick={() => handleSelect("/contact")}
            >
              <span
                className={`nav-link-custom ${
                  activeLink === "/contact" ? "active" : ""
                }`}
              >
                Contact
              </span>
            </Nav.Link>
          </Nav>

          <Nav className="d-flex">
            <Button variant="warning" as={Link} to="/join-group">
              Join Group
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default EduTechNavbar;
