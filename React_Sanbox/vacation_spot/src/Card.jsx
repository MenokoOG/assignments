// Card.js
import React from 'react';
import './style.css';

const Card = (props) => {
  const { place, price, timeToGo } = props.vacationSpot;

  const getDollarSigns = () => {
    if (price < 500) return '$';
    else if (price < 1000) return '$$';
    else return '$$$';
  };

  return (
    <div className={`card ${timeToGo.toLowerCase()}`}>
      <h3>{place}</h3>
      <p>{`Price: ${price}`}</p>
      <p>{`Time to Go: ${timeToGo}`}</p>
      <p>{getDollarSigns()}</p>
    </div>
  );
};

export default Card;
