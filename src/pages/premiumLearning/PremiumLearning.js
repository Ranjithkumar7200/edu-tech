import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import studyImg from "../../assets/images/OBJECTS1.png";
import hearts from "../../assets/images/hearts.png";
import puzzle from "../../assets/images/puzzle.png";
import "./PremiumLearning.css";
import { primaryColor } from "../../constants/colors";
import { motion } from "framer-motion";
import group2 from "../../assets/images/group2.png";

const PremiumLearning = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center my-5"
      style={{ backgroundColor: primaryColor }}
    >
      <Container className="p-4">
        <Row className="align-items-center justify-content-center">
          <Col
            xs={12}
            md={6}
            className="mb-4 mb-md-0 text-center position-relative"
          >
            <motion.img
              src={studyImg}
              alt="Woman working on laptop"
              className="img-fluid study-img"
              animate={{ y: [-5, 5, -5] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
            <div className="position-absolute d-lg-block d-none top-0 start-50 translate-middle-x study-group-container">
              <img
                src={group2}
                alt="group"
                className="img-fluid rounded"
              />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <h2 className="mb-4 text-center text-md-start">
              <span className="fw-bold">Premium Learning</span>{" "}
              <span className="text-warning">Experience</span>
            </h2>
            <div className="mb-3 d-flex align-items-center">
              <div className="bg-light rounded p-2 me-3">
                <Image
                  src={hearts}
                  alt="Easily Accessible"
                  className="rounded img-icon"
                />
              </div>
              <div>
                <h5 className="mb-0">Easily Accessible</h5>
                <p className="text-muted mb-0">
                  Learning will feel very comfortable with guardrails.
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div className="bg-light rounded p-2 me-3">
                <Image
                  src={puzzle}
                  alt="Fun Learning Experience"
                  className="rounded img-icon"
                />
              </div>
              <div>
                <h5 className="mb-0">Fun Learning Experience</h5>
                <p className="text-muted mb-0">
                  Learning will feel very comfortable with guardrails.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PremiumLearning;
