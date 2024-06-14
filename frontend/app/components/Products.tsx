"use client"

import axios from 'axios';
import { useEffect, useState } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);
// Fetching the Api from the Server
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{product.productName}</h2>
            <p className="text-gray-700 mb-1">Price: ${product.price}</p>
            <p className="text-gray-700 mb-1">Rating: {product.rating} / 5</p>
            <p className="text-gray-700 mb-1">Discount: {product.discount}%</p>
            <p className="text-gray-700">Availability: {product.availability}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
