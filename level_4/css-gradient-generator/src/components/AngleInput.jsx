// AngleInput.jsx
import React from 'react';

function AngleInput({ angle, onChange }) {
  return (
    <div className="AngleInput">
      <label>Angle:</label>
      <input
        type="number"
        value={angle}
        onChange={(e) => onChange(parseInt(e.target.value))}
      />
    </div>
  );
}

export default AngleInput;
