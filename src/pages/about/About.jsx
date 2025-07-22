import React, { useEffect } from 'react';
import AOS from 'aos';
import './About.css';


// ==> Yahan apni tasveer ka sahi path daalein
import profileImage from '../../assets/image1.png'; 

const About = () => {
   useEffect(() => {
    AOS.init({
      duration: 900, // Animation kitni der chalega (milliseconds mein)
      once: true,     // Animation sirf ek baar chalega
    });
  }, []);
  // Apni CV file ko 'public' folder mein rakhein aur yahan uska naam likhein
  const CV_FILE_URL = '\Waleed Iftikhar -CV.pdf';

  return (
    <section id="about" className="about-section" >
      <div className="about-image-container"data-aos="fade-right">
        <img src={profileImage} alt="Waleed Iftikhar" />
      </div>

      <div className="about-content-container">
        {/* Yeh "About" text background mein rahega */}
        <span className="background-text">About</span>
        
        <h2 className="about-heading"data-aos="fade-down">
          <span id='aboutspan'>About</span> Me</h2>
        
        <p className="about-description"data-aos="fade-left">
          I'm a creative and detail-focused Frontend Developer, passionate about
          crafting responsive and engaging user interfaces. I love bringing designs to
          life with clean code and modern web technologies.
        </p>

        <div className="personal-details"data-aos="fade-left">
          <div className="detail-item">
            <span className="detail-label">Name:</span>
            <span className="detail-value">Waleed Iftikhar</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Date of birth:</span>
            <span className="detail-value">June 13, 2004</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Address:</span>
            <span className="detail-value">Rahim Yar Khan, Punjab</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Zip code:</span>
            <span className="detail-value">64200</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Email:</span>
            <span className="detail-value">waleediftikhar188@gmail.com</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Phone:</span>
            <span className="detail-value">0303-0834088</span>
          </div>
        </div>

        <div className="project-counter"data-aos="fade-up">
          <span className="project-number">120</span> Project complete
        </div>
        <div data-aos="fade-up">
        <a href={CV_FILE_URL} download className="download-cv-btn">
          DOWNLOAD CV
        </a>
      </div>
      </div>
    </section>
  );
};

export default About;