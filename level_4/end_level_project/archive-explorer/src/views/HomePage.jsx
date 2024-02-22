import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArchiveContext } from '../context/ArchiveContext';

function HomePage() {
  const [url, setUrl] = useState('');
  const [timestamp, setTimestamp] = useState('');
  const { checkArchive } = useContext(ArchiveContext);
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Ensure timestamp is in YYYYMMDD format if needed
    const formattedTimestamp = timestamp.replace(/-/g, '');
    await checkArchive(url, formattedTimestamp);
    navigate('/results');
  };

  return (
    <div >
      <div className='intro'><h1>Menoko OG Website Archive Explorer</h1>
      <h2>Check Archive Status</h2>
      </div>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL"
          required
        />
        <input
          type="date"
          value={timestamp}
          onChange={(e) => setTimestamp(e.target.value)}
          placeholder="Timestamp (YYYYMMDD)"
        />
        <button type="submit">Check</button>
      </form>
      <div className="instructions">
  <h2>How to Use Archive Explorer</h2>
  <p>Enter the URL of the web page you wish to find in the archive. If you're looking for a specific version of the page, you can also enter a date. Here are some tips for effective searching:</p>
  <ul>
    <li><strong>Timestamp Format:</strong> Enter the date in the format YYYYMMDD. For example, to find a page from January 15, 2020, enter 20200115.</li>
    <li>If you're unsure of the exact date, start with a broad search by entering a year, and then narrow down by adding a month and day based on the results you find.</li>
    <li>Remember, the closer your timestamp is to an actual archived version, the more likely you are to find a match.</li>
  </ul>
</div>
    </div>
  );
}

export default HomePage;
