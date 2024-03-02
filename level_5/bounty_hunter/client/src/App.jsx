import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CreateBounty from './components/CreateBounty';
import ReadBounties from './components/ReadBounties';
import './index.css';

function App() {
  const [bounties, setBounties] = useState([]);

  useEffect(() => {
    const fetchBounties = async () => {
      try {
        const res = await axios.get('/api/bounty');
        setBounties(res.data);
      } catch (error) {
        console.error('Error fetching bounties:', error);
      }
    };

    fetchBounties();
  }, []);

  const refreshBounties = async () => {
    try {
      const res = await axios.get('/api/bounty');
      setBounties(res.data);
    } catch (error) {
      console.error('Error refreshing bounties:', error);
    }
  };

  return (
    <div className="container">
      <h1>Boba Fett Bounty Management System</h1>
      <h4>Developed by Menoko OG</h4>
      <CreateBounty onBountyCreated={refreshBounties} />
      <ReadBounties bounties={bounties} onBountiesChange={refreshBounties} />
    </div>
  );
}

export default App;
