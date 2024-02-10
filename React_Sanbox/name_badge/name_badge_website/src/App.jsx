// App.js
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [badges, setBadges] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    placeOfBirth: '',
    phone: '',
    favoriteFood: '',
    comment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBadge = {
      ...formData
    };
    setBadges((prevBadges) => [...prevBadges, newBadge]);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      placeOfBirth: '',
      phone: '',
      favoriteFood: '',
      comment: ''
    });
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          minLength={3}
          required
        />
        <input
          className="input"
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          minLength={3}
          required
        />
        <input
          className="input"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          className="input"
          type="text"
          name="placeOfBirth"
          placeholder="Place of Birth"
          value={formData.placeOfBirth}
          onChange={handleChange}
          minLength={3}
          required
        />
        <input
          className="input"
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          minLength={3}
          required
        />
        <input
          className="input"
          type="text"
          name="favoriteFood"
          placeholder="Favorite Food"
          value={formData.favoriteFood}
          onChange={handleChange}
          minLength={3}
          required
        />
        <textarea
          className="input"
          name="comment"
          placeholder="Comment"
          value={formData.comment}
          onChange={handleChange}
          minLength={3}
          required
        />
        <button className="button" type="submit">Submit</button>
      </form>
      <div className="badges">
        {badges.map((badge, index) => (
          <div key={index} className={`badge ${index % 2 === 0 ? 'red' : 'blue'}`}>
            <p>{`${badge.firstName} ${badge.lastName}`}</p>
            <p>{badge.email}</p>
            <p>{badge.placeOfBirth}</p>
            <p>{badge.phone}</p>
            <p>{badge.favoriteFood}</p>
            <p>{badge.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
