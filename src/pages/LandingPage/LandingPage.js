import React from "react";
import Features from "../features/Features";
import Courses from "../courses/Courses";
import PremiumLearning from "../premiumLearning/PremiumLearning";
import Reviews from "../Reviews/Reviews";
import Home from "../home/Home";

const LandingPage = () => {
  return (
    <div>
      <Home />
      <Features />
      <Courses limit={3} />
      <PremiumLearning />
      <Reviews />
    </div>
  );
};

export default LandingPage;
