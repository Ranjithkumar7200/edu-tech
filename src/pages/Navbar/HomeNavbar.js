import React, { useEffect, useState, useRef } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logofinal.jpg";
import "./HomeNavbar.css";
import Dropdown from 'react-bootstrap/Dropdown';


const HomeNavbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const handleSelect = (path) => {
    setActiveLink(path);
    setExpanded(false);
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setExpanded(false);
    }
  };



  const [show, setShow] = useState(false);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const handleMouseEnter = () => {
    if (window.innerWidth >= 992) {
      setShow(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 992) {
      setShow(false);
    }
  };
  const handleToggle = (isOpen) => {
    setShow(isOpen);
  };

    const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="light"
      sticky="top"
      style={{ backgroundColor: "#FDF8EE" }}
      expanded={expanded}
      ref={navbarRef}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={logo}
            alt="devupvers Logo"
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
          />
          Devupvers
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto" activeKey={activeLink}>
            <Nav.Link
              as={Link}
              to="/"
              className="px-3"
              onClick={() => handleSelect("/")}
            >
              <span
                className={`nav-link-custom ${activeLink === "/" ? "active" : ""
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
                className={`nav-link-custom ${activeLink === "/courses" ? "active" : ""
                  }`}
              >
                Courses
              </span>
            </Nav.Link>
            <Nav.Link
              as={Link}
              // to="/community"
              className="px-3"
            // onClick={() => handleSelect("/community")}
            >
              <span
                className={`nav-link-custom ${show ? "active" : ""}`}
              >



                <Dropdown
                  show={show}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onToggle={handleToggle}
                >
                  <Dropdown.Toggle as="span" id="dropdown-basic">
                    Community
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      as={Link}
                      to="/community"
                      className={activeItem === "blogs" ? "active-link" : ""}
                      onClick={() => {
                        handleItemClick("blogs");
                      }}
                    >
                      Blogs
                    </Dropdown.Item>
                    <Dropdown.Item
                      as={Link}
                      to="/interviewexpo"
                      className={activeItem === "interviewexpo" ? "active-link" : ""}
                      onClick={() => {
                        handleItemClick("interviewexpo");
                      }}
                    >
                      Interview Expo
                    </Dropdown.Item>
                    <Dropdown.Item
                      as={Link}
                      to="/"
                      className={activeItem === "action3" ? "active-link" : ""}
                      onClick={() => {
                        handleItemClick("platforms");
                      }}
                    >
                     Platforms
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </span>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className="px-3"
              onClick={() => handleSelect("/about")}
            >
              <span
                className={`nav-link-custom ${activeLink === "/about" ? "active" : ""
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
                className={`nav-link-custom ${activeLink === "/contact" ? "active" : ""
                  }`}
              >
                Contact
              </span>
            </Nav.Link>
          </Nav>

          <Nav className="d-flex">
            <Button variant="warning" as={Link} onClick={() => handleSelect("/contact")} to="/contact">
              Join Group
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HomeNavbar;
