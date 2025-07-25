import React, {useEffect} from 'react';
import AOS from 'aos';
import './Projects.css'; 

// ===> Step 1: Library ki zaroori cheezein import karein <===
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // Blur effect ke liye CSS

import projImg1 from '../../assets/project-4.jpg';
import projImg2 from '../../assets/project-5.jpg';
import projImg3 from '../../assets/project-1.jpg';
import projImg4 from '../../assets/project-2.jpg';
import projImg5 from '../../assets/project-6.jpg';
import projImg6 from '../../assets/project-3.jpg';

const projectsData = [
  { image: projImg1, title: 'Branding & Illustration', category: 'WEB DESIGN' },
  { image: projImg2, title: 'Creative Portfolio', category: 'UI/UX DESIGN' },
  { image: projImg3, title: 'Digital Marketing', category: 'SEO' },
  { image: projImg4, title: 'Mobile App Mockup', category: 'APP DEVELOPMENT' },
  { image: projImg5, title: 'Video Editing', category: 'RESOURCES' },
  { image: projImg6, title: 'Company Website', category: 'WEB DEVELOPMENT' },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="container">

        <span className="background-text-projects">Projects</span>

        <div className="section-header-projects" data-aos="fade-up">
          <h2><span id='ourspan'>Our</span> Projects</h2>
          <p>"Driven by passion and purpose, I’m constantly learning, creating, and pushing boundaries to turn ideas into impactful digital experiences".</p>
        </div>

        <div className="projects-grid" data-aos="fade-up">
          {projectsData.map((project, index) => (
            <div className="project-card" key={index}>
              
              {/* ===> Step 2: Purane <img> tag ko is LazyLoadImage se badal dein <=== */}
              <LazyLoadImage
                alt={project.title}
                src={project.image}
                effect="blur" // Yeh blur wala effect lagayega
                height="100%"
                width="100%"
                // Isse CSS ka object-fit kaam karega
                wrapperClassName="lazy-image-wrapper" 
              />
              
              <div className="project-overlay">
                <div className="overlay-text">
                  <h3>{project.title}</h3>
                  <span>{project.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Projects;