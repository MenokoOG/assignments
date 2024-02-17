// CssCodeOutput.jsx
import React from 'react';

function CssCodeOutput({ colors, angle }) {
  const generateCssCode = () => {
    return `background: linear-gradient(${angle}deg, ${colors.join(', ')});`;
  };

  const copyToClipboard = () => {
    const code = generateCssCode();
    navigator.clipboard.writeText(code)
      .then(() => {
        alert('CSS code copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <div className="CssCodeOutput">
      <textarea readOnly value={generateCssCode()} />
      <button onClick={copyToClipboard}>Copy CSS</button>
    </div>
  );
}

export default CssCodeOutput;
