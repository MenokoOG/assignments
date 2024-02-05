// DiceBox.js
import React, { useState } from 'react';
import Die from './Die';

const DiceBox = () => {
  const [numbers, setNumbers] = useState([null, null, null, null, null]);
  const [rolls, setRolls] = useState(0);

  const rollDice = () => {
    const newNumbers = numbers.map(() => Math.floor(Math.random() * 6) + 1);
    setNumbers(newNumbers);
    setRolls(rolls + 1);

    if (rolls % 3 === 2) {
      // Reset selected dice after every 3rd roll
      setNumbers([null, null, null, null, null]);
    }
  };

  const selectDie = (index) => {
    const newNumbers = [...numbers];
    newNumbers[index] = newNumbers[index] === 0 ? null : 0;
    setNumbers(newNumbers);
  };

  return (
    <div className='dice-container'>
      <button onClick={rollDice}>Roll Dice</button>
      <div>
        {numbers.map((number, index) => (
          <Die key={index} value={number} onClick={() => selectDie(index)} />
        ))}
      </div>
    </div>
  );
};

export default DiceBox;
