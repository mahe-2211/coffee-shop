import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    query: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.query.trim()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate modern query submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        query: ''
      });
      // Clear success notification after 4 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <span className="section-subtitle">Get in Touch</span>
        <h2 className="section-title">Contact Us</h2>
        <div className="title-underline"></div>
      </div>

      <div className="contact-container">
        {/* Left Column: Embedded Google Map */}
        <div className="contact-map-wrapper">
          <div className="map-glass-card">
            <iframe
              title="Mahi Coffee Stop Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.617540263654!2d-73.98731968459392!3d40.748440479328224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1684940000000!5m2!1sen!2sus"
              className="google-map-iframe"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="map-badge">
              <i className="fa-solid fa-location-dot"></i> 350 5th Ave, New York, NY
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Form */}
        <div className="contact-form-wrapper">
          <div className="form-glass-card">
            <h3>Send Us A Message</h3>
            <p className="form-subtitle">Have queries or feedback? We'd love to hear from you!</p>

            {isSuccess && (
              <div className="form-success-alert">
                <i className="fa-solid fa-circle-check animate-bounce"></i>
                <div>
                  <strong>Thank You!</strong> Your query has been successfully received. We'll reply shortly.
                </div>
              </div>
            )}

            <form onSubmit={handleFormSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  id="contact-name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder=" "
                  autoComplete="off"
                />
                <label htmlFor="contact-name">
                  <i className="fa-solid fa-user"></i> Full Name
                </label>
                <span className="input-line"></span>
              </div>

              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  id="contact-email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder=" "
                  autoComplete="off"
                />
                <label htmlFor="contact-email">
                  <i className="fa-solid fa-envelope"></i> Email Address
                </label>
                <span className="input-line"></span>
              </div>

              <div className="input-group">
                <textarea
                  name="query"
                  id="contact-query"
                  required
                  rows="4"
                  value={formData.query}
                  onChange={handleInputChange}
                  placeholder=" "
                ></textarea>
                <label htmlFor="contact-query">
                  <i className="fa-solid fa-comment-dots"></i> Any Queries?
                </label>
                <span className="input-line"></span>
              </div>

              <button
                type="submit"
                className={`contact-submit-btn ${isSubmitting ? 'submitting' : ''} ${isSuccess ? 'success' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="btn-loading-content">
                    <i className="fa-solid fa-paper-plane fa-spin"></i> Transmitting...
                  </span>
                ) : isSuccess ? (
                  <span className="btn-content">
                    Sent! <i className="fa-solid fa-check"></i>
                  </span>
                ) : (
                  <span className="btn-content">
                    Submit Query <i className="fa-solid fa-arrow-right-to-bracket"></i>
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
