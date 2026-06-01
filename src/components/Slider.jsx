import React, { useState, useEffect, useRef } from 'react';

const sliderImages = [
  {
    url: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=800',
    title: 'Signature Cappuccino',
    desc: 'Rich espresso mixed with creamy steamed milk and capped with deep layers of foam.'
  },
  {
    url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800',
    title: 'Classic Morning Brew',
    desc: 'Freshly ground artisanal beans dripped slowly to extract the pure aromatic flavor.'
  },
  {
    url: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=800',
    title: 'Velvet Cold Brew',
    desc: 'Slow-steeped in cold water for 24 hours, finished with sweet cream swirl.'
  },
  {
    url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800',
    title: 'Freshly Baked Pastries',
    desc: 'Artisanal buttery croissants and pain au chocolat prepared warm every morning.'
  }
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 2000); // Auto slide every 2 seconds
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, []);

  const handlePrev = () => {
    stopTimer();
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
    );
    startTimer();
  };

  const handleNext = () => {
    stopTimer();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    startTimer();
  };

  const handleDotClick = (index) => {
    stopTimer();
    setCurrentIndex(index);
    startTimer();
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="section-header">
        <span className="section-subtitle">Our Specialties</span>
        <h2 className="section-title">Brewed with Love</h2>
        <div className="title-underline"></div>
      </div>

      <div className="slider-outer-container">
        {/* Main Slider Display Area */}
        <div className="slider-viewport">
          <div 
            className="slider-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {sliderImages.map((slide, index) => (
              <div className="slide-item" key={index}>
                <div className="slide-card">
                  <div className="slide-image-wrapper">
                    <img 
                      src={slide.url} 
                      alt={slide.title} 
                      className="slide-image"
                      loading="lazy"
                    />
                    <div className="slide-image-overlay"></div>
                  </div>
                  <div className="slide-details">
                    <span className="slide-category">Mahi Special</span>
                    <h3 className="slide-title">{slide.title}</h3>
                    <p className="slide-description">{slide.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Manual Navigation Arrows */}
        <button className="slider-arrow arrow-left" onClick={handlePrev} aria-label="Previous Slide">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button className="slider-arrow arrow-right" onClick={handleNext} aria-label="Next Slide">
          <i className="fa-solid fa-chevron-right"></i>
        </button>

        {/* Indicators Dots */}
        <div className="slider-dots">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;
