// pages/products.js
"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 5000]); // Example price range
  const [selectedCompany, setSelectedCompany] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedAvailability, setSelectedAvailability] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/categories');
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [priceRange, selectedCompany, selectedCategory, selectedAvailability]);

  const handlePriceRangeChange = (e) => {
    const value = e.target.value.split(',').map(Number);
    setPriceRange(value);
  };

  const handleCompanyChange = (e) => {
    setSelectedCompany(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleAvailabilityChange = (e) => {
    setSelectedAvailability(e.target.value);
  };

  const filterProducts = () => {
    let filtered = [...products];
    if (selectedCompany) {
      filtered = filtered.filter(product => product.company === selectedCompany);
    }
    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    if (selectedAvailability) {
      filtered = filtered.filter(product => product.availability === selectedAvailability);
    }
    if (priceRange) {
      filtered = filtered.filter(product => product.price >= priceRange[0] && product.price <= priceRange[1]);
    }
    setFilteredProducts(filtered);
  };

  return (
    <>
      <Header />

      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Product Filter</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {/* Price Range Input */}
          <div className="col-span-1">
            <label htmlFor="priceRange" className="block text-gray-700 mb-2">Price Range:</label>
            <input
              type="range"
              id="priceRange"
              className="w-full"
              min="0"
              max="5000"
              step="100"
              value={priceRange.join(',')}
              onChange={handlePriceRangeChange}
            />
            <div className="flex justify-between text-gray-700 mt-2">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>

          {/* Company Dropdown */}
          <div className="col-span-1">
            <label htmlFor="company" className="block text-gray-700 mb-2">Company:</label>
            <select
              id="company"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={selectedCompany}
              onChange={handleCompanyChange}
            >
              <option value="">All Companies</option>
              {[...new Set(products.map(product => product.company))].map(company => (
                <option key={company} value={company}>{company}</option>
              ))}
            </select>
          </div>

          {/* Category Dropdown */}
          <div className="col-span-1">
            <label htmlFor="category" className="block text-gray-700 mb-2">Category:</label>
            <select
              id="category"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">All Categories</option>
              {[...new Set(products.map(product => product.category))].map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* Availability Dropdown */}
          <div className="col-span-1">
            <label htmlFor="availability" className="block text-gray-700 mb-2">Availability:</label>
            <select
              id="availability"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={selectedAvailability}
              onChange={handleAvailabilityChange}
            >
              <option value="">All</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-md bg-white">
              <h2 className="text-xl font-semibold mb-2">{product.productName}</h2>
              <p className="text-gray-700 mb-1">Price: ${product.price}</p>
              <p className="text-gray-700 mb-1">Rating: {product.rating} / 5</p>
              <p className="text-gray-700 mb-1">Discount: {product.discount}%</p>
              <p className="text-gray-700 mb-1">Availability: {product.availability}</p>
              <p className="text-gray-700 mb-1">Company: {product.company}</p>
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
