
import "./Accenture.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import { TCSData , AccentureData , LT , Cognizant } from './InterviewQuesItems';
import { useParams } from "react-router-dom";
const InterviewQues = ({route}) => {
    const { company } = useParams();
    
    const [startIndex, setStartIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(3);
    const containerRef = useRef(null);
    let data;
    let companyName; 

    console.log(company)
   
    if (company === "Tcs") {
        data = TCSData;
        companyName ="TCS"  ;
        
    } else if ( company === "Accenture") {
        data = AccentureData; 
        companyName ="Accenture" 
    } else if (company === "L&t"){
        data = LT;
        companyName ="L&T";
    }
    else if (company === "Cognizant"){
        data = Cognizant;
        companyName ="Cognizant";
    }
    useEffect(() => {
        AOS.init({ duration: 8000 });

        const updateVisibleCount = () => {
            const container = containerRef.current;
            const width = container ? container.offsetWidth : 0;

            if (width >= 1400) {
                setVisibleCount(3);
            } else if (width >= 1200) {
                setVisibleCount(3);
            } else if (width >= 992) {
                setVisibleCount(3);
            } else if (width >= 768) {
                setVisibleCount(2);
            } else {
                setVisibleCount(1);
            }
        };

        updateVisibleCount();

        const resizeObserver = new ResizeObserver(() => {
            updateVisibleCount();
        });

        const containerElement = containerRef.current;

        if (containerElement) {
            resizeObserver.observe(containerElement);
        }

        return () => {
            if (containerElement) {
                resizeObserver.unobserve(containerElement);
            }
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setStartIndex((prevIndex) => (prevIndex + visibleCount) % data.length);
        }, 3000);
    
        return () => clearInterval(interval);
    }, [visibleCount, data.length]); 

    const visibleItems = data.slice(startIndex, startIndex + visibleCount);

    if (visibleItems.length < visibleCount) {
        visibleItems.push(...data.slice(0, visibleCount - visibleItems.length));
    }
    return (
        <div className="background-color">
            <div className="headContainer">  <h1> {companyName} Interview Experience </h1></div>

            <div>Updated on 2024</div>
            <div className="headContainer"><h2 ><strong><u>{companyName}&nbsp;Experience</u></strong></h2></div>
            <Container ref={containerRef} className="mt-5">
                <Row className="justify-content-center">
                    {visibleItems.map((item, index) => (
                        <Col key={index} md={12 / visibleCount} className="mb-4">
                            <Card className="h-100 shadow-sm" data-aos="slide-up">
                                <Card.Body>

                                    <Card.Title className=" text-align color ">{companyName}</Card.Title>

                                    <Card.Text className="text-muted"  dangerouslySetInnerHTML={{ __html: item.paragraph }} />
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>




        </div>

    );
};

export default InterviewQues;

