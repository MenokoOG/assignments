// App.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Default background color

  useEffect(() => {
    const fetchRandomColor = async () => {
      try {
        // Fetching a new color using the current timestamp to avoid cache issues
        const response = await axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`);
        if (response.data && response.data.new_color) {
          // Setting the background color to the fetched color
          setBackgroundColor(`#${response.data.new_color}`);
        } else {
          console.error('Color data not found');
        }
      } catch (error) {
        console.error('Error fetching the random color:', error);
      }
    };

    fetchRandomColor();
  }, []); // This effect runs only once on component mount

  return (
    <div style={{ height: '100vh', backgroundColor }}>
      <h1 style={{ color: '#fff', textAlign: 'center' }}>Random Color Background</h1>
    </div>
  );
};

export default App;
