import axios from "axios";

const baseURL = "http://localhost:5000/api/categories";

// Fetch all categories
export const getAllCategories = async () => {
  const response = await axios.get(baseURL);
  return response.data.data.items; // Returns array of category objects
};

// Add a new category

export const addCategory = async (categoryName) => {
  const token = localStorage.getItem("token");
  console.log(token);
  if (!token) {
    throw new Error("User not authenticated");
  }

  try {
    const decodedToken = token ? JSON.parse(atob(token.split(".")[1])) : null;
    const role = decodedToken ? decodedToken.role : null;
    if (role === "Admin") {
      const response = await axios.post(
        baseURL,
        { categoryName },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } else {
      throw new Error("Unauthorized: Only Admins can add categories");
    }
  } catch (error) {
    console.error("Error adding category:", error);
    throw error;
  }
};
