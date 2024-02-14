// src/App.js
import React from 'react';
import './index.css';
import LoremIpsumGenerator from './components/LoremIpsumGenerator';

function App() {
  return (
    <div className="container">
      <h1>Bacon Ipsum Generator</h1>
      <LoremIpsumGenerator />
    </div>
  );
}

export default App;
