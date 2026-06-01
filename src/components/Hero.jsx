import React from 'react';

const Hero = () => {
  const handleScrollToSlider = (e) => {
    e.preventDefault();
    const sliderSection = document.getElementById('gallery');
    if (sliderSection) {
      sliderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header id="home" className="hero-section">
      <div className="hero-bg-overlay"></div>
      <div className="hero-content">
        <div className="hero-badge">
          <i className="fa-solid fa-star"></i> Finest Cafe Experience
        </div>
        <h1 className="hero-title animate-fade-in-up">
          Welcome To <br />
          <span className="text-highlight">Coffee Shop</span>
        </h1>
        <p className="hero-subtitle animate-fade-in-up delay-1">
          Fresh Coffee For Everyday
        </p>
        <div className="hero-desc animate-fade-in-up delay-2">
          Handcrafted espresso drinks, fresh artisanal pastries, and a warm cozy atmosphere. 
          Step into Mahi Coffee Stop and elevate your senses.
        </div>
        <div className="hero-buttons animate-fade-in-up delay-3">
          <a href="#gallery" className="hero-btn-primary" onClick={handleScrollToSlider}>
            Explore Our Gallery <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
      
      {/* Dynamic Scroll Indicator */}
      <a href="#gallery" className="scroll-indicator" onClick={handleScrollToSlider}>
        <span className="mouse-wheel"></span>
        <span className="scroll-text">Scroll Down</span>
      </a>
    </header>
  );
};

export default Hero;
