import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-heading">All Rights Reserved ©️</div>
      <div className="footer-link">
        <a href="#about">About</a> &nbsp;| &nbsp;
        <a href="#contact">Contact</a> &nbsp;| &nbsp;
      </div>
    </div>
  );
};

export default Footer;
