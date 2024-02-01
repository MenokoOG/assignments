import React from 'react';
import Navbar from './Navbar';
import headImg from "../assets/home-bg.jpg"

const Header = () => {
  return (
    <header>
      <img src={headImg} alt="Header Background" />
      <Navbar />
      <div className="header-content">
        <h1>Clean Blog</h1>
        <h2>React A Blog Theme by Menoko OG</h2>
      </div>
    </header>
  );
};


export default Header;
