import React, { useState, useContext, useEffect } from "react";
import { updateProduct, getProductById } from "../../Services/ProductService";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../../Context/ProductContext";

export const UpdateProduct = () => {
  const { fetchProducts } = useContext(ProductContext); 
  const navigate = useNavigate();
  const { productId } = useParams(); 
  const [product, setProduct] = useState({
    ProductName: "",
    Description: "",
    Price: 0,
    Image: "",
  });

  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductById(productId);
        if (response.success && response.data) {
          setProduct({
            ProductName: response.data.productName || "",  
            Description: response.data.description || "",
            Price: response.data.price || 0,
            categoryId: response.data.categoryId || "",  // You can keep this if you need to store categoryId but don't display it
            Image: response.data.image || "",
          });
        } else {
          setMessage("Product not found.");
        }
      } catch (error) {
        setMessage("Error fetching product data.");
      } finally {
        setIsLoading(false); 
      }
    };
    fetchProduct();
  }, [productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await updateProduct(productId, product);

      if (response.success) {
        setMessage("Product updated successfully!");
        fetchProducts(); 
        navigate("/dashboard/admin/products"); 
      } else {
        setMessage("Failed to update product.");
      }
    } catch (error) {
      setMessage("Error occurred while updating the product.");
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Update Product</h1>
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
        {/* Removed the Category dropdown */}
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
        <button type="submit" className="btn btn-primary w-100">Update Product</button>
      </form>
    </div>
  );
};
