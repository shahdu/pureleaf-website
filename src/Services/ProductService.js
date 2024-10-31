import axios from "axios";



const url = "http://localhost:5000/api/products";

export const getAllProducts = async () => {
  try {
    const response = await axios(url);
    return response.data.data.items;
  } catch (error) {
    console.error("Network response was not ok", error);
    return [];
  }
};
