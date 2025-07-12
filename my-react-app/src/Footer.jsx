import React from "react";
import "./Footer.css"; // Create this CSS file below

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-call">Questions? Call <a href="tel:0008009191743">000-800-919-1743</a></p>

      <div className="footer-links">
        <ul>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Investor Relations</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Speed Test</a></li>
        </ul>
        <ul>
          <li><a href="#">Help Centre</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">Cookie Preferences</a></li>
          <li><a href="#">Legal Notices</a></li>
        </ul>
        <ul>
          <li><a href="#">Account</a></li>
          <li><a href="#">Ways to Watch</a></li>
          <li><a href="#">Corporate Information</a></li>
          <li><a href="#">Only on Netflix</a></li>
        </ul>
        <ul>
          <li><a href="#">Media Centre</a></li>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>

      <div className="footer-bottom">
        <select className="footer-lang">
          <option>English</option>
          <option>தமிழ்</option>
          <option>हिन्दी</option>
        </select>
        <p>Netflix India</p>
      </div>
    </footer>
  );
};

export default Footer;
