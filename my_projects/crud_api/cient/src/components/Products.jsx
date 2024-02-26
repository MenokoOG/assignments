// src/components/Products.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/products'); // Adjust URL as needed
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            <h2>{product.name}</h2>
            <p>Quantity: {product.quantity}</p>
            <p>Price: {product.price}</p>
            {product.image && <img src={product.image} alt={product.name} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
