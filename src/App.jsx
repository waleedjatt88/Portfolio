import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/navbar/Navbar';
import Hero from './pages/home/Hero';
import About from './pages/about/About';
import Resume from './pages/resume/Resume';
import Services from './pages/services/Services';
import Skills from './pages/skills/Skills';
import Contact from './pages/contact/Contact';
import Projects from './pages/projects/Projects';
import Blog from './pages/blogs/Blogs';
import HireMe from './pages/blogs/Hireme'; 
import Footer from './components/footer/Footer';

import ScrollToHashElement from './components/ScrollToHashElement';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <ScrollToHashElement />
      
      <main>
        <div id="home"><Hero /></div>
        <div id="about"><About /></div>
        <div id="resume"><Resume /></div>
        <div id="services"><Services /></div>
        <div id="skills"><Skills /></div>
        <div id="projects"><Projects /></div>
        <div id="blog"><Blog /></div>
        <div id="hireme"><HireMe /></div>
        <div id="contact"><Contact /></div>
      </main>
      <Footer />
    </>
  );
};

export default App;