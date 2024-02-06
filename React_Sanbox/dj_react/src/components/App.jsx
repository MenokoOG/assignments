import React, { useState } from 'react';
import ColorBoard from './ColorBoard';
import '../index.css';

const App = () => {
  return (
    <div className="app">
      <h1>DJ Color Board</h1>
      <ColorBoard />
    </div>
  );
};

export default App;
