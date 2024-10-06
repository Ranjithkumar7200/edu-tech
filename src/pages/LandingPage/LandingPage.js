import React from "react";
import Features from "../features/Features";
import Courses from "../courses/Courses";
import PremiumLearning from "../premiumLearning/PremiumLearning";
import Reviews from "../Reviews/Reviews";
import Home from "../home/Home";
import WhyChooseUs from "../whyChooseUs/WhyChooseUs";
import FaqSection from "../faqSection/FaqSection";

const LandingPage = () => {
  return (
    <div>
      <Home />
      <Features />
      <Courses limit={3} />
      <PremiumLearning />
      <WhyChooseUs />
      <Reviews />
      <FaqSection />
    </div>
  );
};

export default LandingPage;
