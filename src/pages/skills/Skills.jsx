import React, { useEffect } from 'react';
import AOS from 'aos';
import { useInView } from 'react-intersection-observer'; // <== STEP 1: Library ko import karein
import './Skills.css';

const skillsData = [
  { name: 'HTML', percentage: 80 },
  { name: 'CSS', percentage: 80 },
  { name: 'React Js', percentage: 85 },
  { name: 'Frame Works', percentage: 90 },
  { name: 'Video Editing', percentage: 80 },
  { name: 'SEO', percentage: 70 },
];

const Skills = () => {
  // ===> STEP 2: useInView hook ka istemal <===
  // 'ref' ko hum us element par lagayenge jise track karna hai.
  // 'inView' true/false batayega ke woh element screen par hai ya nahi.
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation sirf ek baar chalega
    threshold: 0.2,    // Jab 20% section nazar aayega tab animation shuru hoga
  });

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <span className="background-text-skills">Skills</span>
        
        <div className="section-header-skills" data-aos="fade-down">
          <h2><span id='skillspan'>My</span> Skills</h2>
          <p>"I turn ideas into powerful, interactive web experiences—driven by creativity, code, and a passion for seamless design."</p>
        </div>

        {/* ===> STEP 3: 'ref' ko yahan skills-grid par lagayein <=== */}
        <div className="skills-grid" ref={ref} data-aos="fade-up">
          {skillsData.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.percentage}%</span>
              </div>
              <div className="progress-bar-container-modern">
                <div 
                  className="progress-level-modern"
                  // ===> STEP 4: Width ko 'inView' ke hisab se set karein <===
                  // Agar section screen par hai (inView is true) to percentage set ho, warna 0% rahe.
                  style={{ width: inView ? `${skill.percentage}%` : '0%' }}
                ></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;