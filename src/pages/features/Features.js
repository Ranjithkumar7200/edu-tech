import React, { useEffect } from "react";
import { feature } from "./featureItems";
import { Col, Container, Row } from "react-bootstrap";
import AOS from "aos";


const Features = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Container className="bg-warning px-5 my-5 py-4 rounded">
        <Row className="g-4 justify-content-center align-items-center my-1">
          {feature.map((items, index) => (
            <Col
              key={index}
              xs={12}
              md={6}
              lg={4}
              className="d-flex justify-content-center"
              data-aos="fade-up"
            >
              <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-start align-items-center w-100">
                <div
                  className="p-3 rounded-4 mb-1"
                  style={{ backgroundColor: "white" }}
                >
                  <img
                    src={items.image}
                    alt={items.title}
                    className="img-fluid"
                  />
                </div>
                <div className="d-flex flex-column justify-content-between align-items-lg-start align-items-center ms-3">
                  <p className="fs-4 fw-bold p-0 m-0 text-light text-nowrap">
                    {items.title}
                  </p>
                  <p
                    className="text-wrap text-lg-start text-center text-light"
                    style={{ fontSize: "13px", fontWeight: "400" }}
                  >
                    {items.subTitle}
                  </p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Features;
