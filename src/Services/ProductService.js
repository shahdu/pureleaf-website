export const getAllProducts = async () => {
    const response = await fetch("http://localhost:5000/api/products");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data.items;
  };