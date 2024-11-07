import axios from "axios";

const baseURL = "http://localhost:5000/api/categories";

// Fetch all categories
export const getAllCategories = async () => {
  const response = await axios.get(baseURL);
  return response.data.data.items; // Returns array of category objects
};

// Add a new category
export const addCategory = async (categoryName) => {
  const response = await axios.post(baseURL, { categoryName });
  return response.data;
};