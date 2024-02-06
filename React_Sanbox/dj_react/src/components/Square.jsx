import React from 'react';

const Square = ({ color, onClick }) => {
  return (
    <div
      className="square"
      style={{ backgroundColor: color }}
      onClick={onClick}
    />
  );
};

export default Square;
