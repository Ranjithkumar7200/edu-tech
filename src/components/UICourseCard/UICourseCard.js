import React from "react";
import { Card, Button } from "react-bootstrap";
import { Clock, MonitorPlay, Download, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./UICourseCard.css";

const UICourseCard = ({ course }) => {
  const navigate = useNavigate();
  return (
    <Card className={`shadow-sm h-100 ${!course.launched ? 'blurred' : ''}`}>
      <Card.Img
       onClick={() => navigate("/course-details", { state: { course } })} 
        variant="top"
        src={course.image}
        alt={`${course.title} thumbnail`} 
        className={`${!course.launched ? 'blurred-img' : ''}`}
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
          <span className="h5 m-0 text-primary">₹{course.price}</span>
          <small className="text-muted d-flex align-items-center">
            <Clock size={14} className="me-1" />
            {course.duration}
          </small>
        </div>
        <div className="d-flex justify-content-between text-muted small mb-3">
          <span className="d-flex align-items-center">
            <MonitorPlay size={14} className="me-1" />
            {course.lessons} Days
          </span>
          <span className="d-flex align-items-center">
            <Download size={14} className="me-1" />
            {course.sales} Sales
          </span>
        </div>
        <div className="cardsbutton">
        <a href="tel:+1234567890" className="btn btn-warning text-white mt-auto m-2 pl-5 pr-5">
  Call
</a>
        <Button variant="warning" className=" text-white mt-auto m-2"  onClick={() => navigate('/contact')} >
          Join Course
        </Button>
        
        </div>
         
      </Card.Body>
    </Card>
  );
};

export default UICourseCard;
