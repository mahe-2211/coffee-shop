import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Slider from './components/Slider';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [transitioning, setTransitioning] = useState(false);

  // Read saved session if it exists
  useEffect(() => {
    const savedUser = localStorage.getItem('mahi_coffee_user');
    if (savedUser) {
      setUsername(savedUser);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (user) => {
    setTransitioning(true);
    setTimeout(() => {
      setUsername(user);
      setIsLoggedIn(true);
      localStorage.setItem('mahi_coffee_user', user);
      setTransitioning(false);
    }, 500); // Matches smooth fade CSS out duration
  };

  const handleLogout = () => {
    setTransitioning(true);
    setTimeout(() => {
      setIsLoggedIn(false);
      setUsername('');
      localStorage.removeItem('mahi_coffee_user');
      setTransitioning(false);
    }, 500); // Matches smooth fade CSS out duration
  };

  return (
    <div className={`app-root ${transitioning ? 'transition-fade' : ''}`}>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div className="homepage-wrapper fade-in-homepage">
          <Navbar onLogout={handleLogout} username={username} />
          <main>
            <Hero />
            <Slider />
            <About />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
