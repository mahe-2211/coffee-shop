import React from 'react';

const Footer = () => {
  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Brand Summary Column */}
        <div className="footer-column brand-column">
          <div className="footer-brand">
            <i className="fa-solid fa-mug-hot footer-logo-icon"></i>
            <h3>Mahi Coffee Stop</h3>
          </div>
          <p className="footer-desc">
            Serving fresh, premium handcrafted coffee and bakery snacks daily. Experience luxury café vibes tailored to your productivity.
          </p>
          <div className="footer-hours">
            <strong>Open Hours:</strong> Mon - Sun (7:00 AM - 10:00 PM)
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-column links-column">
          <h4>Navigation</h4>
          <ul className="footer-links-list">
            <li>
              <a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>
                <i className="fa-solid fa-chevron-right footer-arrow-icon"></i> Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>
                <i className="fa-solid fa-chevron-right footer-arrow-icon"></i> About Us
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>
                <i className="fa-solid fa-chevron-right footer-arrow-icon"></i> Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Column */}
        <div className="footer-column social-column">
          <h4>Follow Us</h4>
          <p className="social-text">Stay updated on new brews, discounts, and secret menu items!</p>
          <div className="social-icons-wrapper">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn facebook" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn instagram" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn twitter" aria-label="Twitter">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn pinterest" aria-label="Pinterest">
              <i className="fa-brands fa-pinterest-p"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Divider Bar */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-content">
          <p>© 2026 Mahi Coffee Stop. All rights reserved.</p>
          <p className="footer-credit">Designed with <i className="fa-solid fa-heart credit-heart"></i> for premium experiences</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
