import React, { useEffect } from 'react';
import AOS from 'aos';
import './Contact.css'; 
import profileImage from '../../assets/image4.png';

import { FaMapMarkerAlt, FaPhone, FaPaperPlane, FaGlobe } from 'react-icons/fa';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <span className="background-text-contact">Contact</span>
        
        <div className="section-header-contact" data-aos="fade-up">
          <h2><span id='contactspan'>Contact</span> Me</h2>
          <p>"Have a project or idea in mind? Feel free to contact me—let’s build something amazing together"</p>
        </div>

        <div className="contact-info-grid" data-aos="fade-up">
          <div className="info-item">
            <div className="info-icon"><FaMapMarkerAlt /></div>
            <h3 className="info-title">ADDRESS</h3>
            <p>Punjab, Pakistan</p>
          </div>
          <div className="info-item">
            <div className="info-icon"><FaPhone /></div>
            <h3 className="info-title">CONTACT NUMBER</h3>
            <p>0303-0834088</p>
          </div>
          <div className="info-item">
            <div className="info-icon"><FaPaperPlane /></div>
            <h3 className="info-title">EMAIL ADDRESS</h3>
            <p>waleediftikhar188@gmail.com</p>
          </div>
          <div className="info-item">
            <div className="info-icon"><FaGlobe /></div>
            <h3 className="info-title">WEBSITE</h3>
            <p>yoursite.com</p>
          </div>
        </div>

        <div className="contact-form-area">
          <div className="contact-image" data-aos="fade-right">
            <img src={profileImage} alt="Waleed Iftikhar" />
          </div>
          <form className="form-container" data-aos="fade-left">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message" rows="6" required></textarea>
            <button type="submit" className="send-message-btn">SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;