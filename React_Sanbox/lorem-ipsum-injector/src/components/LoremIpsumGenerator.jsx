// src/LoremIpsumGenerator.js
import React, { useState } from 'react';

const LoremIpsumGenerator = () => {
  const [numParagraphs, setNumParagraphs] = useState(1);
  const [paragraphs, setParagraphs] = useState('');

  const generateLoremIpsum = () => {
    fetch(`https://baconipsum.com/api/?type=all-meat&paras=${numParagraphs}`)
      .then(response => response.json())
      .then(data => setParagraphs(data.join('\n\n')))
      .catch(error => console.error('Error fetching lorem ipsum:', error));
  };

  return (
    <div>
      <label htmlFor="numParagraphs">Number of Paragraphs:</label>
      <input
        type="number"
        id="numParagraphs"
        value={numParagraphs}
        onChange={e => setNumParagraphs(e.target.value)}
      />
      <button onClick={generateLoremIpsum}>Generate</button>
      <div className="paragraphs">{paragraphs}</div>
    </div>
  );
};

export default LoremIpsumGenerator;
