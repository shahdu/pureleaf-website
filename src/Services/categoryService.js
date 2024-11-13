import axios from "axios";

const baseURL = "http://localhost:5000/api/categories";
const token = localStorage.getItem("token");
const decodedToken = token ? JSON.parse(atob(token.split(".")[1])) : null;
const role = decodedToken ? decodedToken.role : null;

// Fetch all categories
export const getAllCategories = async ( searchValue = "",
  pageNumber = 1,
  pageSize = 10,
  sortOrder = "asc") => {
    const params = new URLSearchParams();
  params.append("pageNumber", pageNumber);
  params.append("pageSize", pageSize);

  if (searchValue) {
    params.append("searchTerm", searchValue);
  }
  if (sortOrder) {
    params.append("sortOrder", sortOrder);
  }
  try {
    const response = await axios.get(`${baseURL}?${params.toString()}`);
    return response.data;
  } catch (error) {
    console.error("Error adding category:", error);
    throw error;
  }
};

// Add a new category

export const addCategory = async (categoryName) => {
  console.log(token);

  try {
    const response = await axios.post(
      baseURL,
      { categoryName },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error adding category:", error);
    throw error;
  }
};

export const deleteCategoryById = async (categoryId) => {

  try {
      const response = await axios.delete(`${baseURL}/${categoryId}`);
      console.log("deleted user:", response.data);
      return response.data;
    
  } catch (error) {
    console.error("Error fetching category by ID:", error);
    throw error;
  }
};
export const getCategoryById = async (categoryId) => {
  try {
    const response = await axios.get(`${baseURL}/${categoryId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching category by ID:", error);
    throw error;
  }
};

// Update an existing category
export const updateCategory = async (categoryId, updatedData) => {

  try {
      const response = await axios.put(`${baseURL}/${categoryId}`, updatedData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      return response.data;
   
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};