// ColorInput.jsx
import React from 'react';

function ColorInput({ colors, onColorChange, onAddColor, onRemoveColor }) {
  return (
    <div className="ColorInput">
      {colors.map((color, index) => (
        <div key={index}>
          <input
            type="color"
            value={color}
            onChange={(e) => onColorChange(index, e.target.value)}
          />
          {index > 1 && <button onClick={() => onRemoveColor(index)}>Remove</button>}
        </div>
      ))}
      <button onClick={onAddColor}>Add Color</button>
    </div>
  );
}

export default ColorInput;
