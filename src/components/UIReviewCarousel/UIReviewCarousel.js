import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import AOS from "aos"; 


const UIReviewCarousel = ({ items, intervalTime = 2000 }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const containerRef = useRef(null);

  useEffect(() => {
   
    AOS.init({ duration: 1000 });

    const updateVisibleCount = () => {
      const container = containerRef.current;
      const width = container ? container.offsetWidth : 0;

      if (width >= 1400) {
        setVisibleCount(3);
      } else if (width >= 1200) {
        setVisibleCount(3);
      } else if (width >= 992) {
        setVisibleCount(3);
      } else if (width >= 768) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };

    updateVisibleCount();

    const resizeObserver = new ResizeObserver(() => {
      updateVisibleCount();
    });

    const containerElement = containerRef.current;

    if (containerElement) {
      resizeObserver.observe(containerElement);
    }

    return () => {
      if (containerElement) {
        resizeObserver.unobserve(containerElement);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + visibleCount) % items.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [visibleCount, intervalTime, items.length]);

  const visibleItems = items.slice(startIndex, startIndex + visibleCount);

  if (visibleItems.length < visibleCount) {
    visibleItems.push(...items.slice(0, visibleCount - visibleItems.length));
  }

  return (
    <Container ref={containerRef} className="my-5">
      <Row className="justify-content-center">
        {visibleItems.map((item, index) => (
          <Col key={index} md={12 / visibleCount} className="mb-4">
            <Card
              className="h-100 shadow-sm"
              data-aos="slide-up"
            >
              <Card.Body className="d-flex flex-column">
                <Card.Text className="flex-grow-1 text-muted">
                  "{item.quote}"
                </Card.Text>
                <div className="d-flex align-items-center mt-3">
                  <Image
                    src={item.avatar}
                    roundedCircle
                    width={40}
                    height={40}
                    className="me-3"
                  />
                  <div>
                    <Card.Title className="mb-0 h6">{item.name}</Card.Title>
                    <Card.Subtitle className="text-muted small">
                      {item.role}
                    </Card.Subtitle>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UIReviewCarousel;
