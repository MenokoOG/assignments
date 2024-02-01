// App.js
import React from 'react';
import VacationList from './VacationList';
import vacationSpots from './vacationSpots';

const App = () => {
  return (
    <div>
      <h1>Vacation Spots</h1>
      <VacationList vacationSpots={vacationSpots} />
    </div>
  );
};

export default App;
