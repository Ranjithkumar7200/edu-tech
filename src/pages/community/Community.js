import React from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import { membersData } from "./communityItems";
import { motion } from 'framer-motion';

const Community = () => {
  return (
    <Container className="my-5 p-4 community-section">
      <h2 className="text-center mb-4">Join Our Learning Community</h2>
      <p className="text-center text-muted mb-5">
        Connect, learn, and grow with thousands of other learners, educators, and industry experts.
      </p>
      <Row className="justify-content-center">
        {membersData.map((member, index) => (
          <Col key={index} md={4} className="mb-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: index * 0.1 }} 
            >
              <Card className="h-100 shadow-sm">
                <Card.Body className="d-flex flex-column align-items-center text-center">
                  <Image
                    src={member.avatar}
                    roundedCircle
                    width={100}
                    height={100}
                    className="mb-3"
                  />
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Subtitle className="mb-3 text-muted">{member.role}</Card.Subtitle>
                  <Card.Text>{member.description}</Card.Text>
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

export default Community;
