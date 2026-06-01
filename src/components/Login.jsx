import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!username.trim()) {
      setError('Please enter a username.');
      return;
    }

    if (!email.trim() || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address.');
      return;
    }

    // Trigger unique submit micro-animation before logging in
    setIsSubmitting(true);
    setTimeout(() => {
      onLogin(username);
    }, 1000); // Smooth delay to showcase the button animation
  };

  return (
    <div className="login-wrapper">
      <div className="login-bg-overlay"></div>
      
      <div className="login-card-container">
        <form className="login-card" onSubmit={handleSubmit}>
          <div className="login-logo-area">
            <span className="coffee-beans-icon">☕</span>
            <h2>Mahi Coffee Stop</h2>
            <p className="login-subtitle">Your favorite brew is just a login away</p>
          </div>

          {error && <div className="login-error-msg">{error}</div>}

          <div className="input-group">
            <input 
              type="text" 
              id="username" 
              required 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder=" "
              autoComplete="off"
            />
            <label htmlFor="username">
              <i className="fa-solid fa-user"></i> Username
            </label>
            <span className="input-line"></span>
          </div>

          <div className="input-group">
            <input 
              type="email" 
              id="email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" "
              autoComplete="off"
            />
            <label htmlFor="email">
              <i className="fa-solid fa-envelope"></i> Email ID
            </label>
            <span className="input-line"></span>
          </div>

          <button 
            type="submit" 
            className={`login-submit-btn ${isSubmitting ? 'submitting' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="btn-loading-content">
                <i className="fa-solid fa-circle-notch fa-spin"></i> Preparing Brew...
              </span>
            ) : (
              <span className="btn-content">
                Enter Cafe <i className="fa-solid fa-chevron-right"></i>
              </span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
