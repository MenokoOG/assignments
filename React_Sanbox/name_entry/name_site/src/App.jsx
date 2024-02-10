import React, { useState } from 'react';
import './index.css'; // Import the CSS file

function App() {
  const [inputValue, setInputValue] = useState('');
  const [namesList, setNamesList] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    setNamesList([...namesList, inputValue]);
    setInputValue('');
  };

  return (
    <div className="container">
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a name"
        />
        <h1>{inputValue}</h1>
      </div>
      <button onClick={handleButtonClick}>Add Name</button>
      <ol>
        {namesList.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
