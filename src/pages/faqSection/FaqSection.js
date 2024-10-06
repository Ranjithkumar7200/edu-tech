import React from "react";
import { Container, Accordion, Card,} from "react-bootstrap";
import { faqs } from "./faqItems";
import { primaryColor } from "../../constants/colors";

const FaqSection = () => {
  return (
    <div style={{backgroundColor:primaryColor}}>
      <Container className="py-3 my-5">
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>
        <Accordion defaultActiveKey="0">
        {faqs.map((faq, index) => (
          <Card key={index} className="mb-3">
            <Accordion.Item eventKey={String(index)}>
              <Accordion.Header>{faq.question}</Accordion.Header>
              <Accordion.Body>{faq.answer}</Accordion.Body>
            </Accordion.Item>
          </Card>
        ))}
      </Accordion>
      </Container>
    </div>
  );
};

export default FaqSection;
