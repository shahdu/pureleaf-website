import axios from "axios";
const baseURL = "http://localhost:5000/api/products";

const token = localStorage.getItem("token");

export const getAllProducts = async (
  searchValue = "",
  pageNumber = 1,
  pageSize = 3,
  sortOrder = "asc",
  sortBy = "CreatedAt"
) => {
  const params = new URLSearchParams();

  params.append("pageNumber", pageNumber);
  params.append("pageSize", pageSize);

  if (searchValue) {
    params.append("searchTerm", searchValue);
  }
  if (sortOrder) {
    params.append("sortOrder", sortOrder);
  }
  if (sortBy) {
    params.append("sortBy", sortBy);
  }

  const url = `${baseURL}?${params.toString()}`;
  const response = await axios.get(url);
  console.log(url);

  return response.data;
};

// Add a new product
export const addProduct = async (productData) => {

  try {
      const response = await axios.post(baseURL, productData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
};

export const getProductById = async (productId) => {
  try {
    const response = await axios(`${baseURL}/${productId}`);

    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const deleteProductById = async (productId) => {

  try {
      const response = await axios.delete(`${baseURL}/${productId}`, {
        Authorization: `Bearer ${token}`,
      });
      console.log("deleted product:", response.data);
      return response.data;
   
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    throw error;
  }
};

// Update an existing product
export const updateProduct = async (productId, updatedData) => {

  try {
      const response = await axios.put(`${baseURL}/${productId}`, updatedData, {
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
