// App.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Default background color
  const [titleColor, setTitleColor] = useState('#EB6C70'); // Default title color

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

  useEffect(() => {
    fetchRandomColor();
  }, []); // This effect runs only once on component mount

  // Function to determine the text color based on the background color's luminance
  const getTextColor = (bgColor) => {
    const threshold = 130; // Adjust this threshold as needed
    const rgb = parseInt(bgColor.slice(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >>  8) & 0xff;
    const b = (rgb >>  0) & 0xff;
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return luminance > threshold ? '#000000' : '#ffffff';
  };

  useEffect(() => {
    setTitleColor(getTextColor(backgroundColor));
  }, [backgroundColor]); // Update title color whenever background color changes

  return (
    <div style={{ height: '100vh', backgroundColor }}>
      <h1 style={{ color: titleColor, textAlign: 'center' }}>Random Color Background</h1>
      <button onClick={fetchRandomColor} style={{ display: 'block', margin: 'auto', marginTop: '20px' }}>Change Color</button>
    </div>
  );
};

export default App;
