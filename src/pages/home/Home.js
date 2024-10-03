import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import LandingImg from "../../assets/images/OBJECTS.png";
import group1 from "../../assets/images/group1.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      className="position-relative pt-lg-3 pt-1 pb-lg-1 pb-0"
      style={{ backgroundColor: "#FDF8EE" }}
    >
      <Container className="position-relative mb-5 py-lg-5 py-3">
        <section className="hero py-5">
          <Row className="align-items-center">
            <Col
              lg={6}
              className="d-flex flex-column align-items-lg-start align-items-center "
            >
              <h1 className="display-4 text-lg-start text-center fw-bold mb-3">
                The Best Online Courses For Your Future
              </h1>
              <p className="lead text-lg-start text-center mb-4">
                Unlock your potential with our expert-led online courses. Start
                learning today and shape your tomorrow.
              </p>
              <Button variant="warning rounded" size="sm" className="px-4 py-2">
                Join Group
              </Button>
            </Col>
            <Col lg={6} className="mt-4 mt-lg-0">
              <motion.img
                src={LandingImg}
                alt="Online learning"
                className="img-fluid rounded"
                animate={{ y: [-5, 5, -5] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
            </Col>
          </Row>
        </section>
        <div className="position-absolute" style={{ top: -10 }}>
          <img src={group1} alt="group" className="img-fluid rounded" />
        </div>
      </Container>
    </div>
  );
};

export default Home;
