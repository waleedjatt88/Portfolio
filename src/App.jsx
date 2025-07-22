import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// ... Aapke baaki ke component imports ...
import Navbar from './components/navbar/Navbar';
import Hero from './pages/home/Hero';
import About from './pages/about/About';
import Resume from './pages/resume/Resume';
import Services from './pages/services/Services';
import Skills from './pages/skills/Skills';

// ===> Step 1: Naye helper component ko import karein <===
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
      {/* ===> Step 2: Helper component ko yahan daal dein <=== */}
      <ScrollToHashElement />
      
      <main>
        <div id="home"><Hero /></div>
        <div id="about"><About /></div>
        <div id="resume"><Resume /></div>
        <div id="services"><Services /></div>
        <div id="skills"><Skills /></div>
      </main>
    </>
  );
};

export default App;