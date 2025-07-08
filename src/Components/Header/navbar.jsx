import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from './indus-logo(dark).png';
import eyr from './goldiso.png';
import iso from './indusyouth.png'
// import { IoCall } from 'react-icons/io5'; 
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleMediaChange = (e) => setMatches(e.matches);
    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  return (
    <nav className="navbar">
      <div className={`navbar-container ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <button className="collapsible" onClick={toggleMobileMenu}>=</button>
        
      </div>
      <ul className={`navbar-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <li className="dropdown">
          <Link to="/company">Company <FaChevronDown className="dropdown-icon" /></Link>
          <ul className="dropdown-menu">
            <li><Link to="/company/about-us">About Us</Link></li>
            <li><Link to="/company/leadership">Leadership</Link></li>
            <li><Link to="/company/equal-opportunity">Equal Opportunity</Link></li>
          </ul>
        </li>
        <li className="dropdown">
          <Link>Businesses <FaChevronDown className="dropdown-icon" /></Link>
          <ul className="dropdown-menu">
            <li><Link to="/Indusb2b">Global Integrated Logistics Solutions</Link></li>
            <li><Link to="/Indusenterprises">Enterprise Solutions</Link></li>
            <li><Link to="/MySkillsAcademy">Skill Development Solutions</Link></li>
          </ul>
        </li>
        <li className="dropdown">
          <Link to="/tools">Tools <FaChevronDown className="dropdown-icon" /></Link>
          <ul className="dropdown-menu">
            <li><Link to="/tools/Rate-discovery">Rate Discovery</Link></li>
            <li><Link to="/tools/Tracking">Tracking</Link></li>
            <li><Link to="/tools/HS-code">HS Code</Link></li>
            <li><Link to="/tools/Finder">Finder</Link></li>
            <li><Link to="/tools/Currency-converter">Currency Converter</Link></li>
            <li><Link to="https://mail.ssdhostings.in:2096/">Employee Login</Link></li>
          </ul>
        </li>
        <li className="dropdown">
          <Link to="/knowledge-centre">Knowledge Centre <FaChevronDown className="dropdown-icon" /></Link>
          <ul className="dropdown-menu">
            <li><Link to="/knowledge-centre/Blogs">Blogs</Link></li>
            <li><Link to="/knowledge-centre/News-and-Updates">News and Updates</Link></li>
            <li><Link to="/knowledge-centre/Events">Events</Link></li>
            <li><Link to="/knowledge-centre/Notification-Centre">Notification Centre</Link></li>
          </ul>
        </li>
      </ul>
      <div className="navbar-right">
          <img src={eyr} alt="Eyr" className="eyr-logo" />
          {/* <a href="tel:+917011332238" className='num-head'><IoCall/>+91 701-133-2238</a> */}
          <img src={iso} alt="ISO" className="iso-logo" />
        </div>
    </nav>
  );
};

export default Navbar;
