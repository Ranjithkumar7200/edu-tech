import React from "react";
import { Container, Accordion, Card } from "react-bootstrap";
import { primaryColor } from "../../constants/colors";
import { motion } from "framer-motion";
import { faqs } from "../faqSection/faqItems";

const FaqSection = () => {
  return (
    <div style={{ backgroundColor: primaryColor }}>
      <Container className="py-3 my-5">
        <h2 className="text-center mb-4">
          Frequently Asked Questions
        </h2>
        <Accordion defaultActiveKey="0">
          {faqs.map((faq, index) => (
            <Card key={index} className="mb-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.4, delay: index * 0.1 }} 
              >
                <Accordion.Item eventKey={String(index)}>
                  <Accordion.Header>{faq.question}</Accordion.Header>
                  <Accordion.Body>{faq.answer}</Accordion.Body>
                </Accordion.Item>
              </motion.div>
            </Card>
          ))}
        </Accordion>
      </Container>
    </div>
  );
};

export default FaqSection;
