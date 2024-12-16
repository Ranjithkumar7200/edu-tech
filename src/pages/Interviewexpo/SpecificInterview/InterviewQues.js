import "./InterviewQuestion.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import { TCSData, AccentureData, LT, Cognizant ,Capgemini } from './InterviewQuesItems';
import { useParams, useLocation } from "react-router-dom";
import { CompanyList } from "./InterviewQuesItems";
import { SiWhatsapp } from "react-icons/si";
import CustomModal from "../../../components/Modal/CustomModal";

const InterviewQues = () => {
    const { company } = useParams();
    const [visibleItems, setVisibleItems] = useState([]);
    const containerRef = useRef(null);
    const location = useLocation();
    const cardRefs = useRef([]);
    const [showModal, setShowModal] = useState(false);
    const [shareableLink, setShareableLink] = useState("");


    useEffect(() => {
        AOS.init();
    }, []);

    let data;
    let companyName;

    if (company === "Tcs") {
        data = TCSData;
        companyName = "TCS";
    } else if (company === "Accenture") {
        data = AccentureData;
        companyName = "Accenture";
    } else if (company === "L&t") {
        data = LT;
        companyName = "L&T";
    } else if (company === "Cognizant") {
        data = Cognizant;
        companyName = "Cognizant";
    }
    else if (company === "Capgemini") {
        data = Capgemini;
        companyName = "Capgemini";
    }

    useEffect(() => {

        const urlParams = new URLSearchParams(location.search);

        const cardIndex = parseInt(urlParams.get("card"), 10);



        if (!isNaN(cardIndex) && cardRefs.current[cardIndex]) {

            cardRefs.current[cardIndex].scrollIntoView({

                behavior: "smooth",

                block: "start",

            });

        }

    }, [location.search, visibleItems]);
    useEffect(() => {
        if (data) {
            setVisibleItems(data);
        }
    }, [data]);

    const handleShare = (index) => {
        const link = `${window.location.origin}${location.pathname}?card=${index}`;
        setShareableLink(link);
        console.log("Modal should be opened");
        setShowModal(true);
    };

    const handleCopyLink = () => {
        navigator.clipboard.writeText(shareableLink)
            .then(() => {
                alert("Link copied to clipboard!");
                setShowModal(false);
            })
            .catch((error) => {
                console.error("Error copying link", error);
            });
    };


    return (
        <div className="background-color">
            <div className="headContainer">  <h1> {companyName} Interview Experience </h1></div>

            <div>Updated on 2024</div>
            <div className="headContainer"><h2 ><strong><u>{companyName}&nbsp;Experience</u></strong></h2></div>
            <div className="main-container lap mobile">
                <div className="interview-left-container ">
                    {CompanyList.map((company, index) => (
                        <div key={index} className="comapanynames">
                            <a href={company.link} className="txt-color" style={{ color: "black" }}>
                                <strong>{company.name}</strong>
                            </a>
                        </div>
                    ))} </div>
                <div className="interview-right-container">
                    <Container ref={containerRef} >
                        <Row className="justify-content-center">
                            {visibleItems.map((item, index) => (
                                <Col key={index} md={12 / visibleItems.length} className="mb-4">
                                    <Card ref={(el) => (cardRefs.current[index] = el)} className=" card-styles shadow-sm" >
                                        <Card.Body>
                                            <Card.Title className="text-align color">{companyName}</Card.Title>
                                            <Card.Text className="text-muted" dangerouslySetInnerHTML={{ __html: item.paragraph }} />
                                            <div className="card-bottom-container">
                                                <div className="card-bottom-share" ><button className="share-button" onClick={() => handleShare(index)}>Share  <SiWhatsapp /></button></div>

                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </div>
            </div>
            <CustomModal
                showModal={showModal}
                handleClose={() => setShowModal(false)} 
                shareableLink={shareableLink}
                handleCopyLink={handleCopyLink}
            />

        </div>
    );
};

export default InterviewQues;
