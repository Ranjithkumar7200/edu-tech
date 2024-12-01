import React from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import { membersData } from "./InterviewItems";
import { motion } from 'framer-motion';
import zipUrl from "../../assets/companyfolders/CAPGEMINI-broadcodesmaterial.zip";

const Interviewexpo = () => {
  return (
    <Container className="my-5 p-4 community-section">
      {/* <h2 className="text-center mb-4">Join Our Learning Community</h2>
      <p className="text-center text-muted mb-5">
        Connect, learn, and grow with thousands of other learners, educators, and industry experts.
      </p> */}
      <Row className="justify-content-center">
        {membersData.map((member, index) => (
          <Col key={index} md={4} className="mb-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-100 shadow-sm ">
                <Card.Body className=" flex-column align-items-center text-center cardbody">
                  <div className="textContainer">
                    <div >
                      <Card.Title className="cardTitle text">{member.Company}</Card.Title>
                      <Card.Title className=" text">Interview</Card.Title>
                      <Card.Subtitle className="mb-3 text-muted text">Experience</Card.Subtitle>
                    <div>
                    <a
                        href={zipUrl}
                        download
                        style={{ textDecoration: "none", color: "inherit" }} 
                        className={`btn btn-warning text-white mt-auto   downloadbtn ${
                          !member.Download ? "disabled" : ""
                        }`}
                        aria-disabled={!member.Download}   > click 
                       
                      </a>
                    </div>
                    </div>
                    


                    {/* <Card.Text>{member.description}</Card.Text> */}
                    <div><Image
                      src={member.avatar}


                      className="lap mobile"
                    /></div>
                  </div>


                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-5">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button
            variant="warning"
            size="lg"
            onClick={() => window.open("https://chat.whatsapp.com/FnPeH6jdubOBzC7HJrNftt", "_blank")}
          >
            Join the Community
          </Button>
        </motion.div>
      </div>
    </Container>
  );
};

export default Interviewexpo;
