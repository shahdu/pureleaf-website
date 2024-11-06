import axios from "axios";
const baseURL = "http://localhost:5000/api/products";

export const getAllProducts = async (
  searchValue = "",
  pageNumber = 1,
  pageSize = 3,
  sortOrder = "asc"
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
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
};






   