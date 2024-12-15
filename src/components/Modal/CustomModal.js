import { Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import whatsapp from "../../assets/images/whatsapp.png";
import copy from "../../assets/images/copy.png";
import ticked from "../../assets/images/ticked.png";
import "./CustomModal.css";

const CustomModal = ({ showModal, handleClose, shareableLink }) => {
  const [isCopied, setIsCopied] = useState(false); 

  const handleWhatsAppShare = () => {
    const message = encodeURIComponent(`${shareableLink}`);
    window.open(`https://wa.me/?text=${message}`, "_blank");
  };

  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(shareableLink).then(() => {
      setIsCopied(true); 
      setTimeout(() => setIsCopied(false), 2000); 
    });
  };

  const preventRefresh = (event) => {
    event.preventDefault();
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          <strong>Share this post</strong>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="Modal-container">
          <div>
            <a
              href="/"
              onClick={(e) => {
                preventRefresh(e);
                handleWhatsAppShare();
              }}
            >
              <img src={whatsapp} alt="Share on WhatsApp" />
            </a>
          </div>
          <div>
            <a
              href="/"
              onClick={(e) => {
                preventRefresh(e);
                copyLinkToClipboard();
              }}
            >
              <img src={isCopied ? ticked : copy} alt={isCopied ? "Copied" : "Copy link"} />
            </a>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CustomModal;
