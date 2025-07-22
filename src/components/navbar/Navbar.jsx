import React from 'react';
// ===> Step 1: `Link` component ko istemal karna hai <===
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* ===> Step 2: 'a' ko 'Link' aur 'href' ko 'to' se badlein <=== */}
        <Link to="/#home" className="navbar-logo">
           <span id='portspan'>PORT</span>FOLIO
        </Link>
        
        <ul className="nav-menu">
          <li className="nav-item">
            {/* ===> Step 3: Har link ke liye 'a' ko 'Link' aur 'href' ko 'to' karein <=== */}
            {/* Note: hum "#" ka istemal kar rahe hain taake page scroll ho */}
            <Link to="/#home" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/#about" className="nav-links">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/#resume" className="nav-links">
              Resume
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/#services" className="nav-links">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/#skills" className="nav-links">
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/#projects" className="nav-links">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/#blog" className="nav-links">
              My Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/#contact" className="nav-links">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;