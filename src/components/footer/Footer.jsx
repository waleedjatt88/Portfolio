import React from 'react';
import { Link } from 'react-router-dom'; 
import './Footer.css'; 

// Icons ke liye
import { FaTwitter, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container footer-grid">
        
        <div className="footer-column">
          <h4>About</h4>
          <p>"Frontend Developer specializing in React.js, building fast and responsive web interfaces."</p>
          
        </div>

        <div className="footer-column">
          <h4>Links</h4>
          <ul className="footer-links">
            <li><Link to="/#home">→ Home</Link></li>
            <li><Link to="/#about">→ About</Link></li>
            <li><Link to="/#services">→ Services</Link></li>
            <li><Link to="/#projects">→ Projects</Link></li>
            <li><Link to="/#contact">→ Contact</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Services</h4>
          <ul className="footer-links">
            <li><a href="#">→ Web Design</a></li>
            <li><a href="#">→ Web Development</a></li>
            <li><a href="#">→ Ui/Ux Designer</a></li>
            <li><a href="#">→ Front-end Developer</a></li>
            <li><a href="#">→ Video Editor</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Have a Questions?</h4>
          <ul className="footer-contact-info">
            <li>
              <span><FaMapMarkerAlt /></span>
              <p>Punjab,Pakistan</p>
            </li>
            <li>
              <span><FaPhone /></span>
              <p>0303-0834088</p>
            </li>
            <li>
              <span><FaEnvelope /></span>
              <p>waleediftikhar188@gmail.com</p>
            </li>
          </ul>
          <div className="social-icons">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

      </div>
      <div className="copyright-text">
        <p>© {new Date().getFullYear()} All rights reserved | This Portfolio is made by Waleed Iftikhar. </p>
      </div>
    </footer>
  );
};

export default Footer;
