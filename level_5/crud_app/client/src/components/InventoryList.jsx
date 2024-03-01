import React, { useEffect, useState } from 'react';
import axios from 'axios';

const InventoryList = () => {
  const [inventory, setInventory] = useState([]);
  const [editItemId, setEditItemId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editPrice, setEditPrice] = useState('');
  const [editQuantity, setEditQuantity] = useState('');

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    try {
      const response = await axios.get('/api/inventory');
      setInventory(response.data);
    } catch (error) {
      console.error('Error fetching inventory:', error);
    }
  };

  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`/api/inventory/${itemId}`);
      fetchInventory();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleEdit = (item) => {
    setEditItemId(item._id);
    setEditName(item.name);
    setEditDescription(item.description);
    setEditPrice(item.price);
    setEditQuantity(item.quantity);
  };

  const handleCancelEdit = () => {
    setEditItemId(null);
    setEditName('');
    setEditDescription('');
    setEditPrice('');
    setEditQuantity('');
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    try {
      const updatedItem = {
        name: editName,
        description: editDescription,
        price: editPrice,
        quantity: editQuantity
      };
      await axios.put(`/api/inventory/${editItemId}`, updatedItem);
      fetchInventory();
      handleCancelEdit();
    } catch (error) {
      console.error('Error editing item:', error);
    }
  };

  return (
    <div className="container">
      <h2>Inventory List</h2>
      <div className="grid-container">
        {inventory.map(item => (
          <div className="card" key={item._id}>
            {editItemId === item._id ? (
              <form className="edit-form" onSubmit={handleSubmitEdit}>
                <input type="text" placeholder="Name" value={editName} onChange={(e) => setEditName(e.target.value)} required />
                <input type="text" placeholder="Description" value={editDescription} onChange={(e) => setEditDescription(e.target.value)} />
                <input type="number" placeholder="Price" value={editPrice} onChange={(e) => setEditPrice(e.target.value)} required />
                <input type="number" placeholder="Quantity" value={editQuantity} onChange={(e) => setEditQuantity(e.target.value)} required />
                <button type="submit">Update</button>
                <button type="button" onClick={handleCancelEdit}>Cancel</button>
              </form>
            ) : (
              <>
                <h2>{item.name}</h2>
                <p>Description: {item.description}</p>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <div>
                  <button onClick={() => handleEdit(item)}>Edit</button>
                  <button onClick={() => handleDelete(item._id)}>Delete</button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InventoryList;
