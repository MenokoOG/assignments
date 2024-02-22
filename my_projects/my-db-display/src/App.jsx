import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';

function App() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({ name: '', quantity: 0, price: 0, image: '' });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/products', formData);
      fetchProducts(); // Refresh products after adding
      setFormData({ name: '', quantity: 0, price: 0, image: '' }); // Clear form data
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/products/${id}`);
      setProducts(prevProducts => prevProducts.filter(product => product._id !== id)); // Remove deleted product from state
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} required />
          <input type="number" name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} required />
          <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
          <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
          <button type="submit">Add Product</button>
        </form>
      </div>
      <div className="products-container">
        {products.map(product => (
          <div className="card" key={product._id}>
            <h2>{product.name}</h2>
            <p>Quantity: {product.quantity}</p>
            <p>Price: ${product.price}</p>
            {product.image && <img src={product.image} alt={product.name} />}
            <button onClick={() => handleDelete(product._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
