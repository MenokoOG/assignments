// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
      </ul>
    </nav>
  );
};

const Footer = () => <footer>&copy; 2024 Plumbing Company</footer>;

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={darkMode ? "dark-mode" : ""}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
        <div className="theme-toggle">
          <button onClick={toggleTheme}>{darkMode ? "Light Mode" : "Dark Mode"}</button>
        </div>
      </div>
    </Router>
  );
};

export default App;
