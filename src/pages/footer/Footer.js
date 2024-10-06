import React from "react";
import logo from "../../assets/images/logofinal.jpg";
import "./Footer.css";
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="background">
      <header className="text-center">
        <section className="footer background pt-5 pb-3 mt-3">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="footer-logo">
                  <img src={logo} className="w-50" alt="logo" />
                  <span className="h5 fw-bold">unplacedEdutech</span>
                </div>
                
                <p className="mt-3">
                  unplacedEdutech offers industrial training in emerging technologies like Python, Data Science, Artificial Intelligence, and DevOps in Telugu,English,tamil.
                </p>
              </div>
              <div className="col-md-3">
                <div className="h5 fw-bold footer-items">Follow Us</div>
                <div className="theme-divider2 mb-3"></div>
                <div className="social footer-items">
                  <ul className="list-unstyled">
                    <li>
                      <a href="" target="_blank" rel="noopener noreferrer" className="footer-text  text-decoration-none">
                      <span><CiInstagram /></span>  Instagram
                      </a>
                    </li>
                    <li>
                      <a href="" target="_blank" rel="noopener noreferrer" className=" footer-text   text-decoration-none">
                      <span className="mr-10"><CiYoutube /></span> Youtube
                      </a>
                    </li>
                    <li>
                      <a href="" target="_blank" rel="noopener noreferrer" className=" footer-text    text-decoration-none">
                      <span className="mr-11"><CiLinkedin /></span> Linkedin
                      </a>
                    </li>
                    <li>
                      <a href="" target="_blank" rel="noopener noreferrer" className="footer-text  text-decoration-none">
                      <span className="mr-6"><FaTelegram /></span> Telegram
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="h5 fw-bold footer-items">Courses</div>
                <div className="theme-divider2 mb-3"></div>
                <div className="social footer-items">
                  <ul className="list-unstyled">
                    <li>
                      <a href="" className="footer-text  text-decoration-none">Python</a>
                    </li>
                    <li>
                      <a href="" className="footer-text text-decoration-none">DevOps</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="h5 fw-bold footer-items">Quick Links</div>
                <div className="theme-divider2 mb-3"></div>
                <div className="social footer-items">
                  <ul className="list-unstyled">
                    <li>
                      <a href="" className="footer-text text-decoration-none">Home</a>
                    </li>
                    <li>
                      <a href="" className="footer-text text-decoration-none">Contact Us</a>
                    </li>
                    <li>
                      <a href="" className="footer-text text-decoration-none">Privacy</a>
                    </li>
                    <li>
                      <a href="" className="footer-text text-decoration-none">Terms and Conditions</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-6">
                <p className="m-0 text-center fw-bold">Copyright © 2024 unplacededutech</p>
              </div>
             
            </div>
          </div>
        </section>
      </header>
    </div>
  );
};

export default Footer;
