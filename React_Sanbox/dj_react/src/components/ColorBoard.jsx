import React, { useState } from 'react';
import Square from './Square';
import '../index.css';

const ColorBoard = () => {
  const [colors, setColors] = useState(["white", "white", "white", "white"]);

  const handleToggleAll = () => {
    const newColors = colors.map(color => (color === "white" ? "black" : "white"));
    setColors(newColors);
  };

  const handleToggleTopHalf = () => {
    const newColors = [...colors];
    newColors[0] = newColors[1] = "purple";
    setColors(newColors);
  };

  const handleToggleBottomLeft = () => {
    const newColors = [...colors];
    newColors[2] = "blue";
    setColors(newColors);
  };

  const handleToggleBottomRight = () => {
    const newColors = [...colors];
    newColors[3] = "blue";
    setColors(newColors);
  };

  const handleToggleSquare = (index) => {
    const newColors = [...colors];
    switch (index) {
      case 0:
        newColors[0] = newColors[1] = "red";
        break;
      case 1:
        newColors[0] = newColors[1] = "green";
        break;
      case 2:
        newColors[2] = "yellow";
        break;
      case 3:
        newColors[3] = "orange";
        break;
      case 4:
        newColors[0] = "pink";
        break;
      case 5:
        newColors[1] = "cyan";
        break;
      case 6:
        newColors[2] = "magenta";
        break;
      case 7:
        newColors[3] = "lime";
        break;
      default:
        break;
    }
    setColors(newColors);
  };

  return (
    <div className="color-board">
      {colors.map((color, index) => (
        <Square
          key={index}
          color={color}
          onClick={() => handleToggleSquare(index)}
        />
      ))}
      <button onClick={handleToggleAll}>Toggle All</button>
      <button onClick={handleToggleTopHalf}>Toggle Top Half</button>
      <button onClick={handleToggleBottomLeft}>Toggle Bottom Left</button>
      <button onClick={handleToggleBottomRight}>Toggle Bottom Right</button>
      <button onClick={() => handleToggleSquare(0)}>Red Square</button>
      <button onClick={() => handleToggleSquare(1)}>Green Square</button>
      <button onClick={() => handleToggleSquare(2)}>Yellow Square</button>
      <button onClick={() => handleToggleSquare(3)}>Orange Square</button>
      <button onClick={() => handleToggleSquare(4)}>Pink Square</button>
      <button onClick={() => handleToggleSquare(5)}>Cyan Square</button>
      <button onClick={() => handleToggleSquare(6)}>Magenta Square</button>
      <button onClick={() => handleToggleSquare(7)}>Lime Square</button>
    </div>
  );
};

export default ColorBoard;
