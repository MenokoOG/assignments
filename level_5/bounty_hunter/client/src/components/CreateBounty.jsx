import React, { useState } from 'react';
import axios from 'axios';

const CreateBounty = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    living: '',
    bountyAmount: '',
    type: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/bounty', formData);
      console.log('New bounty created:', res.data);
      setFormData({
        firstName: '',
        lastName: '',
        living: '',
        bountyAmount: '',
        type: ''
      });
    } catch (error) {
      console.error('Error creating bounty:', error);
    }
  };

  return (
    <div>
      <h2>Create Bounty</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="input-group">
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              placeholder='First Name'
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              placeholder='Last Name'
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Living:</label>
            <input
              type="text"
              name="living"
              value={formData.living}
              placeholder='Yes or No'
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Bounty Amount:</label>
            <input
              type="number"
              name="bountyAmount"
              value={formData.bountyAmount}
              placeholder='0.00'
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Type:</label>
            <input
              type="text"
              name="type"
              value={formData.type}
              placeholder='Jedi or Sith'
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button type="submit" className="btn">Create Bounty</button>
      </form>
    </div>
  );
};

export default CreateBounty;
