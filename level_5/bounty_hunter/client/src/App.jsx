// src/App.js
import React from 'react';
import CreateBounty from './components/CreateBounty';
import ReadBounties from './components/ReadBounties';
import './index.css';

function App() {
  return (
    <div className="container">
      <h1>Menoko OG</h1>
      <h1> Bounty Management System</h1>
      <CreateBounty />
      <ReadBounties />
    </div>
  );
}

export default App;
