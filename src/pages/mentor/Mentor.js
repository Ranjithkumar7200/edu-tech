import React from "react";
import "./Mentor.css";
import { Card, Col,Row,Image } from 'react-bootstrap';
import bhagya from "../../assets/images/bhagya.jpg";
import satish from "../../assets/images/satish.jpg";
import ranjith from "../../assets/images/ranjith.jpg";
import sriman from "../../assets/images/sriman.jpg";
import lavanya from "../../assets/images/lavanya.jpg";
import rohith from "../../assets/images/rohith.jpg";

const Mentor = () => {

    const members = [
        {
          name: "satish",
          avatar: satish,
          role: "React-broadcodes",
        },
        {
            name: "Shriman",
            avatar: sriman ,
            role: "AI - broadcodes",
          },
          {
            name: "Ranjith",
            avatar: ranjith,
            role: "Flutter  - broadcodes",
          },
          {
            name: "Bhagya",
            avatar: bhagya,
            role: "React - broadcodes",
          },
          {
            name: "Rohith",
            avatar: rohith,
            role: "Angular,Spring Boot - broadcodes",
          },
          {
            name: "Lavanya",
            avatar: lavanya,
            role: "Guideware,java - broadcodes",
          },
    ];
  return (
    <div >
        <div className="background ">
      <div className="right-container ">
        
         <h1 className="text-font">Start Your Journey with us</h1> 
         <h1 className="text-font ms-5">Join course</h1>
        
        <span ><p>Accelerate Your Skills with Industry Experts on Real-Time Projects</p></span>
      </div>
      <div className="d-flex justify-content-center align-items-center flex-column mb-5">
      <div className="left-container">  < span class="google-button">vridhee</span>< span class="google-button">CGI</span> < span class="google-button">Cognizant</span></div>
      <div className=" row-container">  < span class="google-button">Capgemini</span>< span class="google-button">Wipro</span> < span class="google-button">Freelancer</span></div>
      <div className="row-container">  < span class="google-button">Accenture</span> < span class="google-button">IBM</span></div>
      </div>
      </div>
      <div className="background-color scrollable-cards-container">
      <Row className="justify-content-center">
        {members.map((member, index) => (
          <Col key={index} md={4} className="mb-4 d-flex justify-content-center">
            <Card className="h-100 card-shape" style={{ width: '300px', height: '300px' }}>
              <Card.Body className="d-flex flex-column align-items-center text-center background-color">
                <Image
                  src={member.avatar}
                  roundedCircle
                  width={100}
                  height={100}
                  className="mb-3 imagecontain"
                />
                <Card.Title>Meet Your Mentor</Card.Title>
                <Card.Subtitle className="mb-3 text-muted">{member.name}</Card.Subtitle>
                <Card.Text>{member.role}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
</div>

    </div>
  );
};

export default Mentor;
