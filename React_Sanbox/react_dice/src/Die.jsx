// Die.js
import React from 'react';

const Die = ({ value, onClick }) => {
  return (
    <div className='die'
    
      onClick={onClick}
    >
      {value !== null ? value : '-'}
    </div>
  );
};

export default Die;
