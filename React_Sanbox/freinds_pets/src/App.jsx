// App.js

import React from 'react';
import friendsData from './data';
import './style.css';

const Pet = ({ name, breed }) => (
  <div className="pet">
    <p>Pet Name: {name}</p>
    <p>Breed: {breed}</p>
  </div>
);

const Friend = ({ name, age, pets }) => (
  <div className="friend">
    <h2>{name}</h2>
    <p>Age: {age}</p>
    <h3>Pets:</h3>
    {pets.map((pet, index) => (
      <Pet key={index} {...pet} />
    ))}
  </div>
);

const FriendList = () => (
  <div className="container">
    <h1>Friend List</h1>
    {friendsData.map((friend, index) => (
      <Friend key={index} {...friend} />
    ))}
  </div>
);

const App = () => (
  <div>
    <FriendList />
  </div>
);

export default App;
