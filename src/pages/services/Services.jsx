import React, { useEffect } from 'react';
import AOS from 'aos';
import './Services.css'; // Is file ko neeche se copy karein
import { FaSquareWebAwesomeStroke,FaWebflow,FaSearchengin } from "react-icons/fa6";
import { SiTmux } from "react-icons/si";
import { MdDeveloperMode } from "react-icons/md";

import { FaPhotoVideo } from 'react-icons/fa';

// Service data ko ek jagah manage karna behtar hai
const servicesData = [
  {
    icon: <FaSquareWebAwesomeStroke/>,
    title: 'WEB DESIGN',
    aosDelay: '0',
  },
  {
    icon: <SiTmux />,
    title: 'UI/UX Designer', // Note: Correct spelling is "Photography"
    aosDelay: '200',
  },
  {
    icon: < FaWebflow/>,
    title: 'WEB DEVELOPER',
    aosDelay: '400',
  },
  {
    icon: < MdDeveloperMode/>,
    title: 'APP DEVELOPING',
    aosDelay: '0',
  },
  {
    icon: <FaSearchengin />,
    title: 'SEO EXPERT',
    aosDelay: '200',
  },
  {
    icon: <FaPhotoVideo />,
    title: 'VIDEO EDITING',
    aosDelay: '400',
  },
];

const Services = () => {
  // AOS (Animate on Scroll) ko initialize karna
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);

  return (
    <section id="services" className="services-section">
      <div className="services-container">

        {/* Background Text */}
        <span className="background-text-services">Services</span>

        {/* Main Heading */}
        <div className="section-header-services" data-aos="fade-down">
          <h2><span id='servicesspan'>Serv</span>ices</h2>
          <p>"I turn ideas into powerful, interactive web experiences—driven by creativity, code, and a passion for seamless design"</p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="service-card" 
              data-aos="fade-up" 
              data-aos-delay={service.aosDelay}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <div className="service-divider"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;