import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import Logo from '../assets/logo.png';

const Navbar = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${isAtTop ? 'top' : ''}`}>
      <div className="men">
        <div className="logo">
          <img src={Logo} alt="logo" className="logo-img" />
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button></div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
        <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>Destinations</NavLink></li>
        <li><NavLink to="/dashboard" onClick={() => setMenuOpen(false)}>FAQs</NavLink></li>
        <li><NavLink to="/profile/student_32" onClick={() => setMenuOpen(false)}>Made by</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
