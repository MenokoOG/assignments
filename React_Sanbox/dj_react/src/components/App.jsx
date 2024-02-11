import React, { useState } from 'react';
import ColorBoard from './ColorBoard';
import '../index.css';

const App = () => {
  return (
    <div className="app">
      <div><h1>DJ Color Board</h1></div>
      
      <ColorBoard />
    </div>
  );
};

export default App;
