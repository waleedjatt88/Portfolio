import React, { useEffect } from 'react';
import AOS from 'aos';
import './Resume.css'; // Is file ko neeche se copy karein

const Resume = () => {

  // AOS (Animate on Scroll) ko initialize karna
  useEffect(() => {
    AOS.init({
      duration: 900, // Animation ka time
      once: true,     // Animation sirf ek baar hoga
    });
  }, []);

  // Apni CV file ka link (public folder se)
  const CV_FILE_URL = '\Waleed Iftikhar -CV.pdf';

  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        
        {/* Background Text */}
        <span className="background-text-resume">Resume</span>
        
        {/* Main Heading */}
        <div className="section-header" data-aos="fade-down">
          <h2><span id='resumespan'>Res</span>ume</h2>
          <p>"I believe in continuous growth—every challenge is an opportunity to learn, improve, and move one step closer to success."</p>
        </div>

        {/* Resume Grid */}
        <div className="resume-grid">

          {/* Column 1: Education */}
          <div className="resume-column">
            <div data-aos="fade-right"> 
            <div className="resume-item" >
              <span className="item-date">2022-2026</span>
              <h3 className="item-title">Master Degree of IT</h3>
              <h4 className="item-subtitle">ISLAMIA UNIVERSITY</h4>
              <p className="item-description">
I hold a Master’s degree in Information Technology from The Islamia University, where I gained strong expertise in modern web technologies and software development.              </p>
            </div>
            </div>
            <div data-aos="fade-right"> 
            <div className="resume-item" >
              <span className="item-date">2018-2020</span>
              <h3 className="item-title">INTERMEDIATE IN ICS </h3>
              <h4 className="item-subtitle">KHAWAJA FAREED GOV COLLEGE</h4>
              <p className="item-description">
I completed my Intermediate in Computer Science (ICS) from Khawaja Fareed College, where I built a solid foundation in programming and computer fundamentals.              </p>
            </div>
            </div>
            <div data-aos="fade-right">
            <div className="resume-item">
              <span className="item-date">2020-2021</span>
              <h3 className="item-title">Course in Microsoft Office Applications</h3>
              <h4 className="item-subtitle">VOCATIONAL TRANING INSTITUTE</h4>
              <p className="item-description">
Successfully completed a Course Microsoft Office Applications, gaining hands-on experience with MS Word, Excel, PowerPoint, and Outlook.              </p>
            </div>
          </div>
          </div>

          {/* Column 2: Experience */}
          <div className="resume-column">
            <div data-aos="fade-left"> 
            <div className="resume-item">
              <span className="item-date">April,2025-June,2015</span>
              <h3 className="item-title">WEB-DEVELOPMENT  COURSE</h3>
              <h4 className="item-subtitle">DEVCASTLE INSTITUTE</h4>
              <p className="item-description">
Completed a comprehensive Web Development course covering HTML, CSS, JavaScript, and responsive design techniques.              </p>
            </div>
            </div>
             <div data-aos="fade-left"> 
            <div className="resume-item">
              <span className="item-date">-</span>
              <h3 className="item-title">Wordpress Developer</h3>
              <h4 className="item-subtitle">///</h4>
              <p className="item-description">
                A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
              </p>
            </div>
            </div>
             <div data-aos="fade-left"> 
            <div className="resume-item">
              <span className="item-date">-</span>
              <h3 className="item-title">UI/UX Designer</h3>
              <h4 className="item-subtitle">///</h4>
              <p className="item-description">
                A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
              </p>
            </div>
          </div>
          </div>
          
        </div>

        {/* Download Button */}
         <div data-aos="fade-up"> 
        <div className="download-button-container">
            <a href={CV_FILE_URL} download className="download-cv-btn-resume">
              DOWNLOAD CV
            </a>
        </div>
        </div>

      </div>
    </section>
  );
};

export default Resume;