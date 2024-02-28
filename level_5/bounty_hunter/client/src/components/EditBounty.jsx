// src/components/EditBounty.js
import React, { useState } from 'react';
import axios from 'axios';

const EditBounty = ({ bounty, onUpdate }) => {
  const [formData, setFormData] = useState({
    firstName: bounty.firstName,
    lastName: bounty.lastName,
    living: bounty.living,
    bountyAmount: bounty.bountyAmount,
    type: bounty.type
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`/api/bounty/${bounty.id}`, formData);
      onUpdate(res.data);
    } catch (error) {
      console.error('Error updating bounty:', error);
    }
  };

  return (
    <div>
      <h2>Edit Bounty</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="input-group">
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
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
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button type="submit" className="btn">Update Bounty</button>
      </form>
    </div>
  );
};

export default EditBounty;
