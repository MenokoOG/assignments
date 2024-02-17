// GradientGenerator.jsx
import React, { useState } from 'react';
import ColorInput from './ColorInput';
import AngleInput from './AngleInput';
import PreviewBox from './PreviewBox';
import CssCodeOutput from './CssCodeOutput';

function GradientGenerator() {
  const [colors, setColors] = useState(['#ff0000', '#00ff00']); // Initial colors
  const [angle, setAngle] = useState(0);

  const handleColorChange = (index, color) => {
    const newColors = [...colors];
    newColors[index] = color;
    setColors(newColors);
  };

  const addColor = () => {
    setColors([...colors, '#000000']); // Default new color
  };

  const removeColor = (index) => {
    if (colors.length > 2) {
      const newColors = [...colors];
      newColors.splice(index, 1);
      setColors(newColors);
    }
  };

  return (
    <div className="GradientGenerator">
      <ColorInput
        colors={colors}
        onColorChange={handleColorChange}
        onAddColor={addColor}
        onRemoveColor={removeColor}
      />
      <AngleInput angle={angle} onChange={setAngle} />
      <PreviewBox colors={colors} angle={angle} />
      <CssCodeOutput colors={colors} angle={angle} />
    </div>
  );
}

export default GradientGenerator;
