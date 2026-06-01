import React, { useState, useEffect } from 'react';

const Navbar = ({ onLogout, username }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand/Logo */}
        <a href="#home" className="nav-brand" onClick={(e) => handleLinkClick(e, 'home')}>
          <div className="logo-wrapper-nav">
            <i className="fa-solid fa-mug-hot nav-logo-icon"></i>
          </div>
          <span className="brand-name">Mahi Coffee Stop <span className="logo-emoji">☕</span></span>
        </a>

        {/* Desktop Menu Items */}
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={(e) => handleLinkClick(e, 'home')}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={(e) => handleLinkClick(e, 'about')}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={(e) => handleLinkClick(e, 'contact')}>
              Contact
            </a>
          </li>
          {username && (
            <li className="nav-user-greeting">
              Hi, {username}
            </li>
          )}
          <li className="nav-item">
            <button className="logout-btn" onClick={onLogout}>
              Logout <i className="fa-solid fa-right-from-bracket"></i>
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger Icon */}
        <button 
          className={`hamburger-menu ${isMobileMenuOpen ? 'active' : ''}`} 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`nav-menu-mobile ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="nav-menu-mobile-list">
          <li>
            <a href="#home" className="mobile-nav-link" onClick={(e) => handleLinkClick(e, 'home')}>
              <i className="fa-solid fa-house"></i> Home
            </a>
          </li>
          <li>
            <a href="#about" className="mobile-nav-link" onClick={(e) => handleLinkClick(e, 'about')}>
              <i className="fa-solid fa-circle-info"></i> About Us
            </a>
          </li>
          <li>
            <a href="#contact" className="mobile-nav-link" onClick={(e) => handleLinkClick(e, 'contact')}>
              <i className="fa-solid fa-paper-plane"></i> Contact
            </a>
          </li>
          {username && (
            <li className="mobile-user-greeting">
              Logged in as: <strong>{username}</strong>
            </li>
          )}
          <li>
            <button className="mobile-logout-btn" onClick={() => { setIsMobileMenuOpen(false); onLogout(); }}>
              <i className="fa-solid fa-right-from-bracket"></i> Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
