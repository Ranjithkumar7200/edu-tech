import React from "react";
import { Card, Button } from "react-bootstrap";
import { Clock, MonitorPlay, Download, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UICourseCard = ({ course }) => {
  const navigate = useNavigate();
  return (
    <Card className="shadow-sm h-100">
      <Card.Img
       onClick={() => navigate("/course-details", { state: { course } })} 
        variant="top"
        src={course.image}
        alt={`${course.title} thumbnail`}
        className="pointer"
      />
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center mb-1">
          <small className="text-muted">{course.category}</small>
          <div>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                fill={i < course.rating ? "#ffc107" : "none"}
                color="#ffc107"
              />
            ))}
          </div>
        </div>
        <Card.Title className="h6 mb-1">{course.title}</Card.Title>
        <div className="d-flex justify-content-between align-items-center mb-1">
          <span className="h5 m-0 text-primary">${course.price}</span>
          <small className="text-muted d-flex align-items-center">
            <Clock size={14} className="me-1" />
            {course.duration}
          </small>
        </div>
        <div className="d-flex justify-content-between text-muted small mb-3">
          <span className="d-flex align-items-center">
            <MonitorPlay size={14} className="me-1" />
            {course.lessons} Courses
          </span>
          <span className="d-flex align-items-center">
            <Download size={14} className="me-1" />
            {course.sales} Sales
          </span>
        </div>
        <Button variant="warning" className="w-100 text-white mt-auto">
          Join Course
        </Button>
      </Card.Body>
    </Card>
  );
};

export default UICourseCard;
