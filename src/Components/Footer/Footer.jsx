import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";
import xIcon from "./twitter.jpg";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "./indus-logo(dark).png";
import QueryForm from "./QueryForm/QueryForm";

const Footer = () => {
  return (
    <>
      <QueryForm />
      <footer className="footer">
        <div className="footer-flex">
          <div className="footer-section">
            <img src={logo} alt="Logo" id="logo" />
          </div>
          <div className="footer-section">
            <h3>COMPANY</h3>
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="/careers">Careers</a>
              </li>
              <li>
                <a href="/faq">FAQs</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>PRODUCT</h3>
            <ul>
              <li>
                <Link to="/Indusb2b">Integrated Logistics Solutions</Link>
              </li>
              <li>
                <Link to="/MySkillsAcademy">Myskills Academy</Link>
              </li>
              <li>
                <Link to="/Indusenterprises">Enterprise Solutions</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>FOLLOW US</h3>
            <ul className="social-media">
              <li>
                <a
                  href="https://www.facebook.com/share/p/D6zonTD9MKYrtDaa/"
                  className="social-icon"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/the_indusgroup?igsh=Z3U5aXQ3dGZja3N5&utm_source=qr"
                  className="social-icon"
                >
                  <FaInstagram />
                </a>
              </li>

              {/* Custom X icon with same class */}
              <li>
                <a
                  href="https://x.com/theindusgroup_?s=11"
                  className="social-icon x-icon"
                >
                  X
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/theindusgroupco-a50239317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  className="social-icon"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@TheIndusGroupCo."
                  className="social-icon"
                >
                  <FaYoutube />
                </a>
              </li>
            </ul>

            <p>
              <a href="mailto:info@theindusgroup.com">
                <FaEnvelope /> info@theindusgroup.com
              </a>
            </p>
            <p>
              <a href="mailto:theindusgroup@outlook.com">
                <FaEnvelope /> theindusgroup@outlook.com{" "}
              </a>
            </p>
            <p>
              <a href="tel:+917011332238">
                {" "}
                <IoCall /> + 91 701-133-2238{" "}
              </a>
            </p>
          </div>
        </div>
        <div className="copyright">
          <p>Copyright © 2020-2021 The Indus Group Co. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
