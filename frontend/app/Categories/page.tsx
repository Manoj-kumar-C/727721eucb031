// pages/products.js
"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState('productName'); // Default sorting by product name

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/categories');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Function to sort products based on selected key
  const sortProducts = (key) => {
    const sortedProducts = [...products].sort((a, b) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    });
    setProducts(sortedProducts);
  };

  return (
    <>
      <Header />

      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Products Listing with Sorting</h1>
        
        {/* Sorting dropdown */}
        <div className="mb-4">
          <label htmlFor="sortBy" className="block text-gray-700">Sort by:</label>
          <select
            id="sortBy"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={sortBy}
            onChange={(e) => {
              setSortBy(e.target.value);
              sortProducts(e.target.value);
            }}
          >
            <option value="productName">Product Name</option>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
            <option value="discount">Discount</option>
            <option value="company">Company</option>
            <option value="category">Category</option>
          </select>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">{product.productName}</h2>
              <p className="text-gray-700 mb-1">Price: ${product.price}</p>
              <p className="text-gray-700 mb-1">Rating: {product.rating} / 5</p>
              <p className="text-gray-700 mb-1">Discount: {product.discount}%</p>
              <p className="text-gray-700">Availability: {product.availability}</p>
              <p className="text-gray-700">Company: {product.company}</p>
              <p className="text-gray-700">Category: {product.category}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductsPage;
