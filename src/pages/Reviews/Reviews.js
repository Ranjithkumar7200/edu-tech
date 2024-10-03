import React from "react";
import UIReviewCarousel from "../../components/UIReviewCarousel/UIReviewCarousel";
import { reviewItems } from "./reviewItems";
import { Container } from "react-bootstrap";

const Reviews = () => {
  return (
    <div className="my-5">
      <header className="text-center my-5">
        <h2>What student’s say</h2>
        <p className="text-secondary text-center">
          Our students' experiences speak volumes about our programs and the
          positive impact they have on their learning journey.
        </p>
      </header>
      <Container>
        <UIReviewCarousel items={reviewItems} />
      </Container>
    </div>
  );
};

export default Reviews;
