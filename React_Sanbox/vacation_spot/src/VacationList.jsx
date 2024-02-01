// VacationList.js
import React from 'react';
import Card from './Card';

const VacationList = ({ vacationSpots }) => {
  return (
    <div className="vacation-list">
      {vacationSpots.map((spot, index) => (
        <Card key={index} vacationSpot={spot} />
      ))}
    </div>
  );
};

export default VacationList;
