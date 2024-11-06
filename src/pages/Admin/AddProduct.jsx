import React, { useState } from 'react'
import { addProduct } from '../../Services/ProductService';


export const AddProduct = () => {
  const [product, setProduct] = useState({
    ProductName: "",
    Description: "",
    Price: "",
    Quantity: "",
    categoryId: "",
    Image: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input (example)
    if (!product.ProductName || !product.Price || !product.Quantity) {
      setMessage("Please fill out all required fields.");
      return;
    }

    try {
      const response = await addProduct(product);

      if (response.success) {
        setMessage("Product added successfully!");
        // Optionally reset the form
        setProduct({
          ProductName: "",
          Description: "",
          Price: "",
          Quantity: "",
          categoryId: "",
          Image: "",
        });
      } else {
        setMessage("Failed to add product.");
      }
    } catch (error) {
      setMessage("Error occurred while adding the product.");
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Add New Product</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
        <div className="mb-3">
          <label htmlFor="ProductName" className="form-label">Product Name:</label>
          <input
            type="text"
            name="ProductName"
            id="ProductName"
            value={product.ProductName}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Description" className="form-label">Description:</label>
          <textarea
            name="Description"
            id="Description"
            value={product.Description}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Price" className="form-label">Price:</label>
          <input
            type="number"
            name="Price"
            id="Price"
            value={product.Price}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Quantity" className="form-label">Quantity:</label>
          <input
            type="number"
            name="Quantity"
            id="Quantity"
            value={product.Quantity}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="categoryId" className="form-label">Category ID:</label>
          <input
            type="text"
            name="categoryId"
            id="categoryId"
            value={product.categoryId}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Image" className="form-label">Image URL:</label>
          <input
            type="url"
            name="Image"
            id="Image"
            value={product.Image}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Add Product</button>
      </form>
    </div>
  );
};

