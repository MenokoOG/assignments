// PreviewBox.jsx
import React from 'react';

function PreviewBox({ colors, angle }) {
  const gradient = `linear-gradient(${angle}deg, ${colors.join(', ')})`;

  return (
    <div className="PreviewBox" style={{ background: gradient }}>
      Preview
    </div>
  );
}

export default PreviewBox;
