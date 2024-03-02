import React from 'react';
import CreateBounty from './components/CreateBounty';
import ReadBounties from './components/ReadBounties';
import './index.css';

function App() {
  return (
    <div className="container">
      <h1>Boba Fett Bounty Management System</h1>
      <h4>Developed by Menoko OG</h4>
      <CreateBounty />
      <ReadBounties />
    </div>
  );
}

export default App;
