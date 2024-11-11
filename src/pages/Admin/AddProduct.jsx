import React, { useState, useContext } from "react";
import { addProduct } from "../../Services/ProductService";
import { CategoryContext } from "../../Context/CategoryContext";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../Context/ProductContext";
import { Box, Button, TextField, Typography, Select, MenuItem, InputLabel, FormControl } from "@mui/material";

export const AddProduct = () => {
  const { categories } = useContext(CategoryContext);
  const { fetchProducts } = useContext(ProductContext); 
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    ProductName: "",
    Description: "",
    Price: "",
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

    if (!product.ProductName || !product.Price || !product.categoryId) {
      setMessage("Please fill out all required fields.");
      return;
    }

    try {
      const response = await addProduct(product);

      if (response.success) {
        setMessage("Product added successfully!");
        setProduct({
          ProductName: "",
          Description: "",
          Price: "",
          categoryId: "",
          Image: "",
        });
        fetchProducts();
        navigate("/dashboard/admin/products");
      } else {
        setMessage("Failed to add product.");
      }
    } catch (error) {
      setMessage("Error occurred while adding the product.");
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: "auto",
        mt: 5,
        p: 4,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography variant="h4" align="center" fontWeight="bold" sx={{ color: "#2e7d32", mb: 3 }}>
        Add New Product
      </Typography>
      {message && <Typography color="error">{message}</Typography>}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Product Name"
          name="ProductName"
          value={product.ProductName}
          onChange={handleChange}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Description"
          name="Description"
          value={product.Description}
          onChange={handleChange}
          multiline
          rows={3}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Price"
          name="Price"
          value={product.Price}
          onChange={handleChange}
          type="number"
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <FormControl fullWidth required sx={{ mb: 2 }}>
          <InputLabel>Category</InputLabel>
          <Select
            name="categoryId"
            value={product.categoryId}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>Select Category</em>
            </MenuItem>
            {categories.map((category) => (
              <MenuItem key={category.categoryId} value={category.categoryId}>
                {category.categoryName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          label="Image URL"
          name="Image"
          value={product.Image}
          onChange={handleChange}
          type="url"
          fullWidth
          sx={{ mb: 2 }}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#66bb6a",
            color: "#fff",
            "&:hover": { backgroundColor: "#388e3c" },
          }}
        >
          Add Product
        </Button>
      </form>
    </Box>
  );
};
