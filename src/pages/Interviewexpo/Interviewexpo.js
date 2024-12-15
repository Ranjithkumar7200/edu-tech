import {React ,useState}  from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import { membersData } from "./InterviewItems";
import { motion } from 'framer-motion';
// import zipUrl from "../../assets/companyfolders/CAPGEMINI-devupversmaterial.zip";
import { useNavigate } from "react-router-dom";

const Interviewexpo = ( ) => {
  const [searchTerm] = useState("");
  const filteredData = membersData.filter(item =>
    item.Company.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const navigate = useNavigate();

  const handleCardClick = (companyRoute) => {
    if (companyRoute) {
      navigate(`/interview-questions/${companyRoute}`);
    }
  };
  return (
    <Container className="my-5 p-4 community-section">
      
      <Row className="justify-content-center">
      {filteredData.map((member, index) => (
          <Col key={index} md={4} className="mb-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-100 shadow-sm" onClick={() => handleCardClick(member.Company.charAt(0).toUpperCase() + member.Company.slice(1).toLowerCase())}>
                <Card.Body className="flex-column align-items-center text-center cardbody">
                  <div className="textContainer">
                    <div>
                    <Card.Title className="cardTitle text">{member.Company}</Card.Title>
                    <Card.Title className="text">Interview</Card.Title>
                    <Card.Subtitle className="mb-3 text-muted text">Experience</Card.Subtitle>
                    </div>
                    
                    <div><Image src={member.avatar} className="lap mobile images-style" /></div>
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
