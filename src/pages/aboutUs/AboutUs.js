import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <Container className="my-5">
      <Row className="justify-content-center text-center mb-5">
        <Col md={10}>
          <h2 className="display-4">About Us</h2>
          <p className="text-secondary">
            Welcome to <strong>BroadCodes</strong>, where education meets innovation. Our mission is to revolutionize learning by making it more accessible, engaging, and effective for learners across the globe. In today's fast-changing world, knowledge is power, and we aim to empower learners with the tools they need to thrive in both their personal and professional lives.
          </p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={6}>
          <h3>Our Vision</h3>
          <p>
            We envision a world where education is not limited by geography, socio-economic status, or learning style. We believe in the transformative power of knowledge and that everyone should have access to quality learning experiences, regardless of where they come from.
          </p>
        </Col>
        <Col md={6}>
          <h3>What We Do</h3>
          <p>
            At <strong>BroadCodes</strong>, we offer a comprehensive suite of digital learning tools and resources that cater to learners at every stage of their educational journey. Our courses range from foundational subjects to specialized skills for professional development, all curated by leading industry experts and educators.
          </p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={6}>
          <h4>Our Platform Provides:</h4>
          <ul>
            <li>
              <strong>Interactive Online Courses</strong>: Designed with learner engagement in mind, incorporating quizzes, projects, and hands-on exercises that make learning an active, rewarding experience.
            </li>
            <li>
              <strong>Live Classes and Webinars</strong>: Learn directly from industry professionals through live sessions that allow for real-time questions, discussions, and feedback.
            </li>
            <li>
              <strong>Self-Paced Learning</strong>: Our flexible courses allow students to learn at their own pace, ensuring a deeper understanding of the material.
            </li>
            <li>
              <strong>Cutting-Edge Technology</strong>: Utilizing artificial intelligence and personalized learning pathways to cater to each student’s unique learning style.
            </li>
          </ul>
        </Col>
        <Col md={6}>
          <h3>Our Values</h3>
          <ul>
            <li>
              <strong>Accessibility</strong>: We are committed to breaking down barriers to education. Our platform is available anytime, anywhere, so you can learn from the comfort of your home or on-the-go.
            </li>
            <li>
              <strong>Community</strong>: Learning is more effective when done together. Our online community of learners, mentors, and instructors creates a supportive environment where students can share insights, collaborate, and grow.
            </li>
            <li>
              <strong>Quality</strong>: Quality is at the heart of everything we do. Our content is developed and reviewed by leading experts in their fields, ensuring our learners have access to the most accurate and up-to-date information.
            </li>
          </ul>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={6}>
          <h3>Our Team</h3>
          <p>
            Behind <strong>BroadCodes</strong> is a diverse group of passionate educators, technology enthusiasts, and industry experts. We bring together years of experience in education, software development, and content creation to deliver the best possible learning experience.
          </p>
        </Col>
        <Col md={6}>
          <h3>Why Choose Us?</h3>
          <ul>
            <li>
              <strong>Personalized Learning</strong>: Our platform adapts to your individual needs, providing customized recommendations to enhance your learning journey.
            </li>
            <li>
              <strong>Engaging Content</strong>: We make learning fun and engaging through a mix of videos, quizzes, challenges, and gamified content.
            </li>
            <li>
              <strong>Career-Focused Skills</strong>: Our courses are designed to provide practical, career-oriented skills. We work closely with industry partners to ensure our learners gain competencies that are in demand in the real world.
            </li>
          </ul>
        </Col>
      </Row>

      <Row className="justify-content-center text-center">
        <Col md={10}>
          <h3>Join Us Today</h3>
          <p className="text-secondary">
            Whether you are a student, professional, or lifelong learner, <strong>BroadCodes</strong> is here to help you achieve your educational goals. Join our vibrant community of learners today, and take the next step toward your brighter future.
          </p>
          <Button variant="warning"  onClick={() => navigate('/contact')}  >
            Get Started
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
