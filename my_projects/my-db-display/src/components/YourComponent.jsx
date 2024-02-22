import React, { useState, useEffect } from 'react';

const YourComponent = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data);
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      setError(error.message); // Set error state if fetch fails
      setLoading(false); // Set loading to false on error
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Display loading state while fetching data
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message if fetch fails
  }

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

export default YourComponent;
