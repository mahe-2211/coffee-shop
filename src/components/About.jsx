import React from 'react';

const About = () => {
  const cards = [
    {
      icon: 'fa-mug-hot',
      title: 'Freshly Brewed Coffee',
      desc: 'Every morning, our master baristas select premium organic beans, roast them carefully, and brew with precise temp controls to lock in maximum flavor and aroma.'
    },
    {
      icon: 'fa-cookie-bite',
      title: 'Artisanal Snacks',
      desc: 'Our bakery chefs handcraft delicious cookies, flaky pastries, and savory muffins daily using fresh local farm ingredients to pair perfectly with your daily beverage.'
    },
    {
      icon: 'fa-seedling',
      title: 'Relaxing Atmosphere',
      desc: 'Step into an oasis of calm. Our café features soft cozy couches, gentle jazz tunes, warm aesthetic lighting, and robust high-speed Wi-Fi designed for relaxation or work.'
    },
    {
      icon: 'fa-heart',
      title: 'Unrivaled Quality',
      desc: 'We are passionate about coffee and deeply dedicated to you. Every guest is welcomed like family, ensuring a refreshing experience with every single visit.'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <span className="section-subtitle">Our Story</span>
        <h2 className="section-title">About Us</h2>
        <div className="title-underline"></div>
      </div>

      <div className="about-container">
        {/* Intro Highlight Paragraph */}
        <div className="about-intro-card">
          <div className="about-intro-left">
            <span className="about-badge">Established 2026</span>
            <h3>Crafting Premium Experiences One Cup At A Time</h3>
            <p>
              At <strong>Mahi Coffee Stop</strong>, we believe coffee is much more than a quick caffeine fix—it is a cherished daily ritual, a reason to bring people together, and a craft that requires ultimate devotion. 
            </p>
            <p>
              Our shop was founded in 2026 on a simple philosophy: combine exceptional hand-roasted coffee, mouthwatering fresh eats, a serene beautiful atmosphere, and absolute customer satisfaction. Whether you need a crisp morning espresso, a silent cozy corner to work on your laptop, or a lovely space to share laughs with friends, Mahi Coffee Stop is your perfect sanctuary.
            </p>
          </div>
          <div className="about-intro-right">
            <div className="about-quote-box">
              <i className="fa-solid fa-quote-left quote-icon"></i>
              <p className="quote-text">
                "Behind every successful day, there is a cup of Mahi Coffee."
              </p>
              <span className="quote-author">— The Mahi Barista Team</span>
            </div>
          </div>
        </div>

        {/* Feature Grid Cards */}
        <div className="about-grid">
          {cards.map((card, index) => (
            <div className="about-card" key={index}>
              <div className="about-card-icon-container">
                <i className={`fa-solid ${card.icon} about-card-icon`}></i>
              </div>
              <h3 className="about-card-title">{card.title}</h3>
              <p className="about-card-description">{card.desc}</p>
              <div className="about-card-hover-border"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
