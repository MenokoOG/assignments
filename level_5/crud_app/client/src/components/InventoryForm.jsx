import React, { useState } from 'react';
import axios from 'axios';

const InventoryForm = ({ onItemAdded }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newItem = { name, description, price, quantity };
      const response = await axios.post('/api/inventory', newItem);
      onItemAdded(response.data);
      setName('');
      setDescription('');
      setPrice('');
      setQuantity('');
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <div className="container"> {/* Apply container class */}
      <h2>Add Item</h2>
      <form className="form" onSubmit={handleSubmit}> {/* Apply form and form classes */}
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default InventoryForm;
