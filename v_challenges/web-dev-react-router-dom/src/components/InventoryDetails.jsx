import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const inventory = [
  { id: '1', name: 'Item 1', category: 'Category 1', price: 100, quantity: 10 },
  { id: '2', name: 'Item 2', category: 'Category 2', price: 200, quantity: 20 },
];

function InventoryDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = inventory.find((item) => item.id === id);

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div>
      <h2>{item.name}</h2>
      <p>Category: {item.category}</p>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => navigate('/inventory')}>Back to Inventory</button>
    </div>
  );
}

export default InventoryDetails;
